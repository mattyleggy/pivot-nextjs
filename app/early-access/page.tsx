"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { sendWaitlistEmail } from "@/app/actions/email";
import { toast } from "sonner";

export default function WaitlistPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await sendWaitlistEmail(formData);

            if (result.success) {
                toast.success("Successfully got early access! Check your email for confirmation.");
                setFormData({
                    name: "",
                    email: "",
                });
            } else {
                toast.error(result.error || "Failed to get early access. Please try again.");
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans max-w-[1920px] mx-auto w-full">
            <div className="flex flex-col lg:flex-row w-full min-h-screen">
                {/* Left Column - Form Section */}
                <div className="w-full lg:w-[40%] bg-white px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 flex flex-col">
                    {/* Logo/Brand */}
                    <Link href="/" className="mb-8 lg:mb-12">
                        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "serif" }}>
                            Pivot
                        </h1>
                    </Link>

                    {/* Form Content */}
                    <div className="flex-1 flex flex-col max-w-lg">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                            Get Early Access
                        </h2>
                        <p className="text-base text-gray-600 mb-2">
                            Be among the first to experience Pivot when we launch.
                        </p>
                        <p className="text-lg font-semibold text-gray-900 mb-8 sm:mb-10">
                            300k+ users have already joined
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                            {/* Name Field */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name" className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                                    Name *
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full h-11"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                                    Email *
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="w-full h-11"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            {/* Consent Text */}
                            <p className="text-sm text-gray-600 mt-2">
                                By getting early access, you agree to our{" "}
                                <Link href="/privacy" className="underline hover:text-gray-900">
                                    privacy policy
                                </Link>{" "}
                                and consent to receiving updates about Pivot.
                            </p>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 bg-gray-900 text-white hover:bg-gray-800 rounded-md text-base font-medium mt-auto disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Getting Access..." : "Get Early Access"}
                            </Button>
                        </form>

                        {/* Additional Info */}
                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-600">
                                Get early access, exclusive updates, and special launch pricing when Pivot is ready.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Hero Image with Overlays */}
                <div className="w-full lg:w-[60%] relative min-h-[500px] lg:min-h-screen">
                    {/* Background Image */}
                    <div className="absolute inset-0 2xl:inset-4 2xl:rounded-xl 2xl:overflow-hidden">
                        <Image
                            src="/images/hero/hero-waitlist.png"
                            alt="Pivot landscape"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Overlay Testimonial Boxes */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16 2xl:px-4 2xl:py-4">
                        {/* Top Box - DoorDash */}
                        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 mb-4 max-w-sm w-full shadow-xl">
                            <p className="text-white text-lg font-semibold mb-4">
                                Tests 50x faster with Pivot
                            </p>
                            <div className="text-white text-sm font-medium">
                                DOORDASH
                            </div>
                        </div>

                        {/* Middle Box - Ramp */}
                        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 mb-4 max-w-sm w-full shadow-xl lg:ml-32">
                            <p className="text-white text-lg font-semibold mb-4">
                                Saved $8M and increased efficiency by 20%
                            </p>
                            <div className="text-white text-sm font-medium">
                                ramp
                            </div>
                        </div>

                        {/* Bottom Box - General Stats */}
                        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 max-w-sm w-full shadow-xl">
                            <p className="text-white text-base leading-relaxed">
                                Over 3,000 companies from startups to the Fortune 500 use Pivot to test their ideas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
