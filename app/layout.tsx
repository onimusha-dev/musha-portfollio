import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { ThemeProvider } from "@/lib/theme";

/* ── Fonts (self-hosted by Next.js, preloaded automatically) ── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "鬼 musha — Portfolio",
  description: "20 year old self-taught developer. Backend, DevOps and low-level enthusiast.",
  openGraph: {
    title: "鬼 musha",
    description: "20 year old self-taught developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          ── FOUC prevention ──────────────────────────────────────
          This inline script runs SYNCHRONOUSLY before the first
          paint, so the user never sees a flash of the wrong theme.
          It reads localStorage (cached pref) → falls back to the
          device's prefers-color-scheme.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  try {
    var m = localStorage.getItem('theme-mode');
    var s = localStorage.getItem('theme-scheme') || 'blue';
    var dark = m !== null ? m === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-scheme', s);
  } catch(e) {}
})();`,
          }}
        />
      </head>
      <body className={`${inter.variable} ${caveat.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
