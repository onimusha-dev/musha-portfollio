import { post1, post2, post3 } from "./posts";

// ── BlogPost type ─────────────────────────────────────────────
// Keep this shape stable — a future dashboard will write to this
// same structure, just sourced from a DB/API instead of constants.
export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;         // display string e.g. "Feb 20, 2026"
    readTime: string;     // e.g. "6 min read"
    tags: string[];
    cover?: string;       // optional cover image URL
    content: string;      // raw Markdown (README-style)
}

// ── Posts registry ────────────────────────────────────────────
// To add a new post: create posts/<slug>.ts and add it here.
export const posts: BlogPost[] = [post1, post2, post3];
