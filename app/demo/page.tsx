"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";
import { sendDemoEmail } from "@/app/actions/email";
import { toast } from "sonner";

export default function DemoPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        location: "",
        reason: "",
        companySize: "",
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const result = await sendDemoEmail(formData);

            if (result.success) {
                toast.success("Demo request submitted successfully! Check your email for confirmation.");
                setFormData({
                    email: "",
                    location: "",
                    reason: "",
                    companySize: "",
                });
            } else {
                toast.error(result.error || "Failed to submit demo request. Please try again.");
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-white font-sans w-full">
            <div className="flex flex-col lg:flex-row w-full min-h-screen">
                {/* Left Column - Form Section */}
                <div className="w-full lg:w-[40%] bg-gray-50 px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 flex flex-col">
                    {/* Logo/Brand */}
                    <Link href="/" className="mb-8 lg:mb-12">
                        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "serif" }}>
                            Pivot
                        </h1>
                    </Link>

                    {/* Form Content */}
                    <div className="flex-1 flex flex-col max-w-lg">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                            Book a Pivot demo
                        </h2>
                        <p className="text-base text-gray-600 mb-8 sm:mb-10">
                            Start testing with Pivot today, simply enter in your details below
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                            {/* Work Email Field */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                                    Work Email *
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Your work email"
                                    className="w-full h-11"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            {/* Location Field */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="location" className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                                    Where are you located? *
                                </Label>
                                <Select
                                    required
                                    value={formData.location}
                                    onValueChange={(value) => setFormData({ ...formData, location: value })}
                                >
                                    <SelectTrigger id="location" className="w-full h-11">
                                        <SelectValue placeholder="Select your country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="us">United States</SelectItem>
                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                        <SelectItem value="ca">Canada</SelectItem>
                                        <SelectItem value="au">Australia</SelectItem>
                                        <SelectItem value="de">Germany</SelectItem>
                                        <SelectItem value="fr">France</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Reason Field */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="reason" className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                                    Reason for demo *
                                </Label>
                                <Select
                                    required
                                    value={formData.reason}
                                    onValueChange={(value) => setFormData({ ...formData, reason: value })}
                                >
                                    <SelectTrigger id="reason" className="w-full h-11">
                                        <SelectValue placeholder="Select reason" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="evaluate">Evaluating options</SelectItem>
                                        <SelectItem value="learn">Learn more about Pivot</SelectItem>
                                        <SelectItem value="specific">Specific use case</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Company Size Field */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="company-size" className="text-sm font-medium text-gray-900 uppercase tracking-wide">
                                    How many employees work at your company? *
                                </Label>
                                <Select
                                    required
                                    value={formData.companySize}
                                    onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                                >
                                    <SelectTrigger id="company-size" className="w-full h-11">
                                        <SelectValue placeholder="Select company size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1-10">1-10</SelectItem>
                                        <SelectItem value="11-50">11-50</SelectItem>
                                        <SelectItem value="51-200">51-200</SelectItem>
                                        <SelectItem value="201-500">201-500</SelectItem>
                                        <SelectItem value="501-1000">501-1000</SelectItem>
                                        <SelectItem value="1000+">1000+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Consent Text */}
                            <p className="text-sm text-gray-600 mt-2">
                                By submitting this form, you agree to our{" "}
                                <Link href="/privacy" className="underline hover:text-gray-900">
                                    privacy policy
                                </Link>{" "}
                                and consent to receiving marketing communications from Pivot.
                            </p>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 bg-gray-900 text-white hover:bg-gray-800 rounded-md text-base font-medium mt-auto disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Submitting..." : "Book a Demo"}
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Right Column - Hero Image with Overlays */}
                <div className="w-full lg:w-[60%] relative min-h-[500px] lg:min-h-screen">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/hero/hero-demo.png"
                            alt="Pivot landscape"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Overlay Testimonial Boxes */}
                    <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
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

