import BreadcrumbHero from '@/components/BreadcrumbHero';
import ContactSection from '@/components/ContactSection';
import LocationSearch from '@/components/LocationSearch';
import Logos from '@/components/Logos';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import VideoBanner from '@/components/VideoBanner';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F3F4F6]">
            <BreadcrumbHero
                heading="About Us"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us' }
                ]}
                bgImage="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop"
            />
            <WhyChooseUs />
            <Logos />
            <VideoBanner />
            <LocationSearch />
            <ContactSection />
            <TestimonialCarousel />
        </div>
    );
}