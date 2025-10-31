"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-5 bg-white">
            {/* Brand/Logo Section */}
            <div className="flex items-center gap-2 sm:gap-3">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800" style={{ fontFamily: "serif" }}>
                    Pivot
                </h1>
                <p className="hidden sm:block text-sm text-gray-500 font-sans">Built for modern marketing teams</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5 bg-gray-800 rounded-lg px-1.5 py-1">
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

            {/* Desktop User Actions */}
            <div className="hidden md:flex items-center gap-6">
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

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <div className="flex flex-col gap-6 mt-8">
                        <div className="flex flex-col gap-2">
                            <Link
                                href="/platform"
                                className="px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                Platform
                            </Link>
                            <Link
                                href="/pricing"
                                className="px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/audience"
                                className="px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                Audience
                            </Link>
                        </div>
                        <div className="border-t pt-6 flex flex-col gap-4">
                            <Link
                                href="/login"
                                className="px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-md transition-colors text-center"
                                onClick={() => setOpen(false)}
                            >
                                Log in
                            </Link>
                            <Button
                                asChild
                                className="bg-gray-800 text-white hover:bg-gray-700 rounded-lg w-full"
                            >
                                <Link href="/waitlist" onClick={() => setOpen(false)}>Join waitlist</Link>
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
