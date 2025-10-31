import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative w-full bg-stone-800 text-white overflow-hidden">
            {/* Background watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] text-[200px] md:text-[300px] font-bold font-serif tracking-[0.15em] text-stone-600 pointer-events-none select-none">
                Pivot
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* PLATFORM */}
                    <div>
                        <h3 className="font-bold text-base mb-4">PLATFORM</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/experimentation" className="hover:underline">
                                    Experimentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/product-analytics" className="hover:underline">
                                    Product Analytics
                                </Link>
                            </li>
                            <li>
                                <Link href="/session-replay" className="hover:underline">
                                    Session Replay
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* INFORMATION */}
                    <div>
                        <h3 className="font-bold text-base mb-4">INFORMATION</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/pricing" className="hover:underline">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/press" className="hover:underline">
                                    Press room
                                </Link>
                            </li>
                            <li>
                                <Link href="/api" className="hover:underline">
                                    API
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs" className="hover:underline">
                                    Jobs
                                </Link>
                            </li>
                            <li>
                                <Link href="/sell-pivot" className="hover:underline">
                                    Sell Pivot
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* LEGAL */}
                    <div>
                        <h3 className="font-bold text-base mb-4">LEGAL</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/terms" className="hover:underline">
                                    Terms and conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/license" className="hover:underline">
                                    License agreement
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:underline">
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/copyright" className="hover:underline">
                                    Copyright information
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="hover:underline">
                                    Cookies policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h3 className="font-bold text-base mb-4">SUPPORT</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/faq" className="hover:underline">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div>
                        <h3 className="font-bold text-base mb-4">SOCIAL MEDIA</h3>
                        <div className="flex gap-4 mb-6">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                                aria-label="Facebook"
                            >
                                <Facebook className="size-5" />
                            </Link>
                            <Link
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                                aria-label="X (Twitter)"
                            >
                                <Twitter className="size-5" />
                            </Link>
                            <Link
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                                aria-label="Pinterest"
                            >
                                <span className="text-xl font-bold">P</span>
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                                aria-label="Instagram"
                            >
                                <Instagram className="size-5" />
                            </Link>
                            <Link
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity"
                                aria-label="YouTube"
                            >
                                <Youtube className="size-5" />
                            </Link>
                        </div>
                        <p className="text-sm mb-4">
                            Get exclusive design feedback sent straight to your inbox
                        </p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 flex-1"
                            />
                            <Button className="bg-black text-white hover:bg-gray-800 rounded-md">
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-12 mt-8 pb-24">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">                        
                        <span className="text-sm text-gray-400">
                            Copyright © 2024-2025 Pivot AI. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

