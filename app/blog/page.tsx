"use client";

import "./blog.css";
import { useEffect, useState, useCallback } from "react";
import { marked } from "marked";
import { posts, type BlogPost } from "@/content/blogs";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

/* ── Configure marked ────────────────────────────────────────── */
marked.setOptions({ gfm: true, breaks: false });

/* ── Blog Reader Modal ───────────────────────────────────────── */
function BlogReader({ post, onClose }: { post: BlogPost; onClose: () => void }) {
    const html = marked.parse(post.content) as string;

    // Lock body scroll while open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    // ESC key does NOT close (must use X button — as requested)
    // keeping this clean: no keyboard shortcut to dismiss

    return (
        <div className="blog-overlay" aria-modal="true" role="dialog">
            <div className="blog-panel">
                {/* ── Sticky top bar ── */}
                <div className="blog-topbar">
                    <span className="blog-topbar-title">{post.title}</span>
                    <button
                        className="blog-close-btn"
                        onClick={onClose}
                        aria-label="Close article"
                        title="Close"
                    >
                        <Icons.Close className="w-4 h-4" />
                    </button>
                </div>

                {/* ── Article ── */}
                <article className="blog-content">
                    {/* Meta header */}
                    <div className="mb-8">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {post.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="text-xs font-mono px-2.5 py-0.5 rounded-full select-none"
                                    style={{ background: "var(--accent)/12", color: "var(--accent)", border: "1px solid var(--accent)/25" }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-3 text-sm font-mono" style={{ color: "var(--muted)" }}>
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Rendered markdown */}
                    <div
                        className="prose"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </article>
            </div>
        </div>
    );
}

/* ── Blog Card (Medium-style row) ────────────────────────────── */
function BlogCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
    return (
        <div
            className="blog-card flex items-start gap-6 py-8 px-1"
            style={{ borderBottom: "1px solid var(--card-border)" }}
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && onClick()}
        >
            {/* Left: text content */}
            <div className="flex-1 min-w-0">
                {/* tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-xs font-mono px-2 py-0.5 rounded-full select-none"
                            style={{
                                background: "var(--c0)",
                                color: "var(--muted)",
                                border: "1px solid var(--card-border)",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* title */}
                <h2
                    className="text-xl font-bold leading-snug mb-2 transition-colors duration-150 group-hover:text-accent"
                    style={{ color: "var(--foreground)" }}
                >
                    {post.title}
                </h2>

                {/* excerpt */}
                <p
                    className="text-base font-mono leading-relaxed line-clamp-2 mb-4"
                    style={{ color: "var(--muted)" }}
                >
                    {post.excerpt}
                </p>

                {/* meta row */}
                <div className="flex items-center gap-3 text-sm font-mono" style={{ color: "var(--muted)" }}>
                    <span className="opacity-70">{post.date}</span>
                    <span className="opacity-40">·</span>
                    <span className="opacity-70">{post.readTime}</span>
                    <span className="opacity-40">·</span>
                    <span
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center gap-1"
                        style={{ color: "var(--accent)" }}
                    >
                        Read →
                    </span>
                </div>
            </div>

            {/* Right: cover image (if present) */}
            {post.cover && (
                <div className="shrink-0 w-28 h-20 sm:w-36 sm:h-24 rounded-lg overflow-hidden bg-foreground/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                </div>
            )}
        </div>
    );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function BlogPage() {
    const [open, setOpen] = useState<BlogPost | null>(null);
    const close = useCallback(() => setOpen(null), []);

    return (
        <>
            <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-24">
                {/* ── Header ── */}
                <div className="mb-2">
                    <div className="flex items-center gap-2 text-sm font-mono opacity-40 mb-4">
                        <Link href="/" className="hover:opacity-70 transition-opacity">home</Link>
                        <span>/</span>
                        <span>blog</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-1">Blog</h1>
                    <p className="text-base font-mono opacity-50">
                        Thoughts, write-ups &amp; dev notes · {posts.length} post{posts.length !== 1 ? "s" : ""}
                    </p>
                </div>

                {/* ── Divider ── */}
                <div className="mt-8" style={{ borderTop: "1px solid var(--card-border)" }} />

                {/* ── Post list ── */}
                <div className="group/list">
                    {posts.map(post => (
                        <BlogCard key={post.slug} post={post} onClick={() => setOpen(post)} />
                    ))}
                </div>

                {/* ── Empty state ── */}
                {posts.length === 0 && (
                    <div className="flex flex-col items-center text-center py-32">
                        <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-xl font-mono select-none"
                            style={{ background: "var(--card)", border: "1px dashed var(--card-border)", color: "var(--accent)" }}
                        >
                            ✍
                        </div>
                        <p className="text-lg font-bold mb-2">No posts yet</p>
                        <p className="text-base font-mono opacity-40 max-w-xs leading-relaxed">
                            Writing is in progress. Check back soon.
                        </p>
                    </div>
                )}
            </main>

            {/* ── Reader modal — portal-like fixed overlay ── */}
            {open && <BlogReader post={open} onClose={close} />}
        </>
    );
}
