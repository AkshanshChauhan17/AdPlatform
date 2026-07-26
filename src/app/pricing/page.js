import BreadcrumbHero from '@/components/BreadcrumbHero';
import PricingSection from '@/components/PricingSection';

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6]">
            
            {/* The Top Hero Banner */}
            <BreadcrumbHero 
                heading="Our Pricing Plans"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Pricing' }
                ]}
                bgImage="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop"
            />

            {/* The Pricing Component */}
            <div className="pt-8">
                <PricingSection />
            </div>
            
        </div>
    );
}