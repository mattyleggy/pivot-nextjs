import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CtaSection } from "@/components/cta-section";
import { ProblemSolutionSection } from "@/components/problem-solution-section";
import { FeaturesSection } from "@/components/features-section";
import { ExperimentSection } from "@/components/experiment-section";
import { AnalyticsSection } from "@/components/analytics-section";
import { AiReportingSection } from "@/components/ai-reporting-section";
import { PricingSection } from "@/components/pricing-section";
import { WhoPivotIsForSection } from "@/components/who-pivot-is-for-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-white font-sans max-w-[1920px] mx-auto w-full">
            <Navbar />
            <HeroSection />
            <CtaSection />
            <ProblemSolutionSection />
            <FeaturesSection />            
            <ExperimentSection />            
            <AnalyticsSection />
            <AiReportingSection />
            <PricingSection />
            <WhoPivotIsForSection />
            <FaqSection />
            <Footer />
        </div>
    );
}
