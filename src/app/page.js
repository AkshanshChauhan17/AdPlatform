import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import FeaturesSection from '@/components/FeaturesSection';
import HeroSection from '@/components/HeroSection';
import LatestGallery from '@/components/LatestGallery';
import LocationSearch from '@/components/LocationSearch';
import Logos from '@/components/Logos';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import VideoBanner from '@/components/VideoBanner';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#F3F4F6]">
            <HeroSection />
            <FeaturesSection />
            <VideoBanner />
            <WhyChooseUs />
            <Logos />
            <LocationSearch />
            <LatestGallery />
            <TestimonialCarousel />
            <ContactSection />
            <BlogSection />
        </main>
    );
}