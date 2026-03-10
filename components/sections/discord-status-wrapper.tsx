"use client";

import dynamic from "next/dynamic";

const DiscordStatus = dynamic(
    () => import("@/components/sections/discord-status"),
    { ssr: false }
);

export default function DiscordStatusWrapper() {
    return <DiscordStatus />;
}
