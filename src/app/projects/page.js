import ProjectGallery from '@/components/ProjectGallery';
import BreadcrumbHero from '@/components/BreadcrumbHero';

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6]">
            
            {/* The Top Hero Banner */}
            <BreadcrumbHero 
                heading="Our Projects"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Projects' }
                ]}
                // You can swap this URL with any other image you prefer
                bgImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            />

            {/* The project gallery component directly renders on the page */}
            <ProjectGallery />
            
        </div>
    );
}