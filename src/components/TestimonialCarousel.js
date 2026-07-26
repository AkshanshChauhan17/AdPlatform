"use client";

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    // 1 Original + 4 Demo Testimonials
    const testimonials = [
        {
            id: 1,
            name: "Sakib Hasan",
            role: "Developer",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
            text: "This Category Dantal His Category Danta Their Product Exceeded Expectationsa A Quality A Attention To Moutstandin An And It Has Essential Most Design Man Billboard Advertising Is A Power Marketing Tool That He BusinesBillboard Advertising Is A Powerful Marketing Tool Business Visibility And Reach Their Target Audienceses Gain"
        },
        {
            id: 2,
            name: "Sarah Jenkins",
            role: "Marketing Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
            text: "Working with this billboard platform has completely transformed how we reach our local audience. The interface is seamless, and the visibility we've gained has resulted in a 40% increase in foot traffic to our retail locations. Highly recommended for any growing business!"
        },
        {
            id: 3,
            name: "Marcus Chen",
            role: "Brand Manager",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
            text: "The sheer scale of the outdoor advertising network provided here is unmatched. We were able to launch a multi-city campaign in a matter of days rather than weeks. The reporting tools also give us great insights into the estimated reach of our creative assets."
        },
        {
            id: 4,
            name: "Elena Rodriguez",
            role: "Startup Founder",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
            text: "As a startup, every marketing dollar counts. This marketplace allowed us to find affordable, high-impact billboard spaces that perfectly aligned with our target demographic. The customer support team was also incredibly helpful in guiding our first outdoor campaign."
        },
        {
            id: 5,
            name: "David Kim",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
            text: "I am amazed by the quality of the digital boards available. Our creative team loved seeing our high-resolution video ads displayed flawlessly in prime locations. The scheduling flexibility made it easy to run day-parted campaigns tailored to commute times."
        }
    ];

    // Auto-scroll logic (changes every 5 seconds)
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer); // Cleanup on unmount
    }, [testimonials.length]);

    return (
        <section className="w-full bg-[#F4F5F7] pt-16 md:pt-24 flex flex-col relative overflow-hidden">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20">
                
                {/* Testimonial Card */}
                <div className="bg-[#FAFAFA] border border-gray-300 rounded-[1.5rem] p-8 md:p-12 shadow-sm relative min-h-[350px] flex flex-col justify-between transition-opacity duration-500">
                    
                    {/* Active Testimonial Content (Fades in/out on change) */}
                    <div 
                        key={activeIndex} 
                        className="animate-in fade-in duration-700 flex flex-col h-full"
                    >
                        {/* Header: User Info & Quote Icon */}
                        <div className="flex justify-between items-start mb-8">
                            <div className="flex items-center gap-4">
                                <img 
                                    src={testimonials[activeIndex].image} 
                                    alt={testimonials[activeIndex].name} 
                                    className="w-16 h-16 rounded-full object-cover border-2 border-[#F2D65B]/40"
                                />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">
                                        {testimonials[activeIndex].name}
                                    </h4>
                                    <p className="text-sm text-gray-400 font-medium">
                                        {testimonials[activeIndex].role}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Outline Quote Icon */}
                            <Quote className="w-12 h-12 text-gray-200 rotate-180" strokeWidth={1} />
                        </div>

                        {/* Body: Testimonial Text */}
                        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 flex-grow">
                            {testimonials[activeIndex].text}
                        </p>
                    </div>

                    {/* Footer: Dot Indicators */}
                    <div className="flex items-center gap-2 mt-auto">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`rounded-full transition-all duration-300 ${
                                    activeIndex === index 
                                    ? 'w-2.5 h-2.5 bg-black' 
                                    : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}