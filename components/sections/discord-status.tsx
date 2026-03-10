"use client";

import { useEffect, useState } from "react";

// ── Your Discord user ID (from constants) ────────────────────
const DISCORD_USER_ID = "1302743050518265969";
const POLL_INTERVAL = 30_000; // ms — refresh every 30s

// ── Lanyard types (simplified) ────────────────────────────────
interface LanyardActivity {
    name: string;
    type: number;          // 0 = Playing, 2 = Listening, ...
    details?: string;      // e.g. "Editing quote-rotator.tsx"
    state?: string;        // e.g. "In musha-portfollio"
    application_id?: string;
    assets?: {
        large_image?: string;
        large_text?: string;
        small_image?: string;
        small_text?: string;
    };
}

interface LanyardData {
    discord_status: "online" | "idle" | "dnd" | "offline";
    activities: LanyardActivity[];
    // discord_user also available but we don't need it
}

// ── Status styling ────────────────────────────────────────────
const STATUS_META = {
    online: { label: "Online", color: "#3fb950", pulse: true },
    idle: { label: "Idle", color: "#d29922", pulse: false },
    dnd: { label: "Do Not Disturb", color: "#f78166", pulse: false },
    offline: { label: "Offline", color: "#7d8590", pulse: false },
} as const;

// VS Code application IDs (for vscord / official extension)
const VSCODE_APP_IDS = new Set([
    "383226320970055681", // VS Code (official)
    "782685898163232778", // vscord
    "810516608442695700", // VS Code (Insiders)
]);

function isVSCodeActivity(a: LanyardActivity) {
    return (
        a.application_id && VSCODE_APP_IDS.has(a.application_id)
    ) || a.name.toLowerCase().includes("visual studio code")
        || a.name.toLowerCase().includes("code");
}

// ── Component ─────────────────────────────────────────────────
export default function DiscordStatus() {
    const [data, setData] = useState<LanyardData | null>(null);
    const [error, setError] = useState(false);

    const fetchStatus = async () => {
        try {
            const res = await fetch(
                `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`,
                { next: { revalidate: 0 } }
            );
            if (!res.ok) throw new Error("Lanyard fetch failed");
            const json = await res.json();
            if (json.success) {
                setData(json.data as LanyardData);
                setError(false);
            } else {
                setError(true);
            }
        } catch {
            setError(true);
        }
    };

    useEffect(() => {
        fetchStatus();
        const id = setInterval(fetchStatus, POLL_INTERVAL);
        return () => clearInterval(id);
    }, []);

    // Don't render anything until we have data (or on error)
    if (error || !data) return null;

    const status = STATUS_META[data.discord_status];
    const vscActivity = data.activities.find(isVSCodeActivity);

    return (
        <div className="flex flex-wrap items-center gap-2 mt-4 select-none">

            {/* ── Discord status pill ── */}
            <div
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border"
                style={{
                    background: "var(--card)",
                    borderColor: "var(--card-border)",
                    color: "var(--muted)",
                }}
                title={`Discord: ${status.label}`}
            >
                {/* Animated dot */}
                <span className="relative flex h-2 w-2">
                    {status.pulse && (
                        <span
                            className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                            style={{ backgroundColor: status.color }}
                        />
                    )}
                    <span
                        className="relative inline-flex rounded-full h-2 w-2"
                        style={{ backgroundColor: status.color }}
                    />
                </span>
                {status.label}
            </div>

            {/* ── VS Code activity pill (only when detected) ── */}
            {vscActivity && (
                <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border max-w-xs truncate"
                    style={{
                        background: "var(--card)",
                        borderColor: "var(--card-border)",
                        color: "var(--muted)",
                    }}
                    title={[vscActivity.details, vscActivity.state].filter(Boolean).join(" · ")}
                >
                    {/* VS Code icon */}
                    <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.88V4.12a1.5 1.5 0 0 0-.85-1.533zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                    </svg>
                    <span className="truncate">
                        {vscActivity.details
                            ? vscActivity.details.replace(/^(Editing|Viewing)\s+/, "")
                            : vscActivity.name}
                    </span>
                </div>
            )}
        </div>
    );
}
