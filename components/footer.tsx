import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative w-full bg-stone-800 text-white overflow-hidden">
            {/* Background watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] text-[100px] sm:text-[150px] md:text-[200px] lg:text-[300px] font-bold font-serif tracking-[0.15em] text-stone-600 select-none flex items-center z-1 opacity-30 sm:opacity-100">
                {"Pivot".split("").map((char, index) => (
                    <span
                        key={index}
                        className="inline-block transition-transform duration-300 hover:-translate-y-[10%] cursor-pointer"
                    >
                        {char}
                    </span>
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pointer-events-none">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
                    {/* PLATFORM */}
                    <div>
                        <h3 className="font-bold text-base mb-4">PLATFORM</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/experimentation" className="hover:underline pointer-events-auto">
                                    Experimentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/product-analytics" className="hover:underline pointer-events-auto">
                                    Product Analytics
                                </Link>
                            </li>
                            <li>
                                <Link href="/session-replay" className="hover:underline pointer-events-auto">
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
                                <Link href="/pricing" className="hover:underline pointer-events-auto">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline pointer-events-auto">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/press" className="hover:underline pointer-events-auto">
                                    Press room
                                </Link>
                            </li>
                            <li>
                                <Link href="/api" className="hover:underline pointer-events-auto">
                                    API
                                </Link>
                            </li>
                            <li>
                                <Link href="/jobs" className="hover:underline pointer-events-auto">
                                    Jobs
                                </Link>
                            </li>
                            <li>
                                <Link href="/sell-pivot" className="hover:underline pointer-events-auto">
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
                                <Link href="/terms" className="hover:underline pointer-events-auto">
                                    Terms and conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/license" className="hover:underline pointer-events-auto">
                                    License agreement
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:underline pointer-events-auto">
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/copyright" className="hover:underline pointer-events-auto">
                                    Copyright information
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="hover:underline pointer-events-auto">
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
                                <Link href="/faq" className="hover:underline pointer-events-auto">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline pointer-events-auto">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
                        <h3 className="font-bold text-base mb-4">SOCIAL MEDIA</h3>
                        <div className="flex gap-4 mb-6">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity pointer-events-auto"
                                aria-label="Facebook"
                            >
                                <Facebook className="size-5" />
                            </Link>
                            <Link
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity pointer-events-auto"
                                aria-label="X (Twitter)"
                            >
                                <Twitter className="size-5" />
                            </Link>
                            <Link
                                href="https://pinterest.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity pointer-events-auto"
                                aria-label="Pinterest"
                            >
                                <span className="text-xl font-bold">P</span>
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity pointer-events-auto"
                                aria-label="Instagram"
                            >
                                <Instagram className="size-5" />
                            </Link>
                            <Link
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-70 transition-opacity pointer-events-auto"
                                aria-label="YouTube"
                            >
                                <Youtube className="size-5" />
                            </Link>
                        </div>
                        <p className="text-sm mb-4">
                            Get exclusive design feedback sent straight to your inbox
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 flex-1 pointer-events-auto"
                            />
                            <Button className="bg-black text-white hover:bg-gray-800 rounded-md pointer-events-auto shrink-0">
                                Sign up
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 sm:pt-12 mt-6 sm:mt-8 pb-12 sm:pb-24">
                    <div className="flex flex-col items-center justify-center gap-4">                        
                        <span className="text-xs sm:text-sm text-gray-400 text-center">
                            Copyright © 2024-2025 Pivot AI. All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

