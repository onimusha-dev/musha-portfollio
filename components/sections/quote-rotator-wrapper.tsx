"use client";

import dynamic from "next/dynamic";

const QuoteRotator = dynamic(
    () => import("@/components/sections/quote-rotator"),
    { ssr: false }
);

export default function QuoteRotatorWrapper() {
    return <QuoteRotator />;
}
