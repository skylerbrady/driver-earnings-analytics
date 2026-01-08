import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white bg-[var(--card)] border border-[var(--border)] border-b border-gray-200 dark:border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-8">
            <span className="text-xl font-bold">Earner</span>

            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>

            <Link href="/trips" className="text-sm font-medium">
              Trips
            </Link>

            {/* Theme Switch */}
            <ThemeToggle />
          </div>
        </nav>

        <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
