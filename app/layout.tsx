import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Focus Mode Scheduler — Schedule Team-Wide Quiet Hours",
  description: "Automatically schedule organization-wide Do Not Disturb periods and manage team focus sessions with Slack integration."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="16ecb67f-6277-4160-8d28-a8d56c09e749"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
