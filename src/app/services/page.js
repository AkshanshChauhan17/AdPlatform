import BreadcrumbHero from '@/components/BreadcrumbHero';
import ServicesSection from '@/components/ServicesSection';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6]">
            {/* The Top Hero Banner */}
            <BreadcrumbHero 
                heading="Our Services"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services' }
                ]}
                bgImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=2070&auto=format&fit=crop"
            />

            {/* The 6-Card Grid Component */}
            <ServicesSection/>
        </div>
    );
}