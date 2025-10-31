import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full px-8 pt-8 pb-5 bg-white">
            {/* Brand/Logo Section */}
            <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-800" style={{ fontFamily: "serif" }}>
                    Pivot
                </h1>
                <p className="text-sm text-gray-500 font-sans">Built for modern marketing teams</p>
            </div>

            {/* Main Navigation Links */}
            <div className="flex items-center gap-0.5 bg-gray-800 rounded-lg px-1.5 py-1">
                <Link
                    href="/platform"
                    className="px-4 py-1.5 text-sm font-medium text-white rounded-md bg-gray-700/50 hover:bg-gray-600/50 transition-colors"
                >
                    Platform
                </Link>
                <Link
                    href="/pricing"
                    className="px-4 py-1.5 text-sm font-medium text-white rounded-md hover:bg-gray-700/50 transition-colors"
                >
                    Pricing
                </Link>
                <Link
                    href="/audience"
                    className="px-4 py-1.5 text-sm font-medium text-white rounded-md hover:bg-gray-700/50 transition-colors"
                >
                    Audience
                </Link>
            </div>

            {/* User Action Section */}
            <div className="flex items-center gap-6">
                <Link
                    href="/login"
                    className="text-sm font-medium text-gray-800 hover:text-gray-600 transition-colors"
                >
                    Log in
                </Link>
                <Button
                    asChild
                    className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg px-4"
                >
                    <Link href="/waitlist">Join waitlist</Link>
                </Button>
            </div>
        </nav>
    );
}
