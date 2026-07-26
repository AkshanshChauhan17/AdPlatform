"use client";

export default function LatestGallery() {
    return (
        <section className="w-full bg-[#F3F4F6] py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-gray-700 uppercase mb-4">
                        Latest Gallery
                    </h3>
                    <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-[1.2]">
                        Captivate Your Audience The <br className="hidden md:block" />
                        With Billboard Magic
                    </h2>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                    
                    {/* Top Row: 3 Images */}
                    <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
                        <img 
                            src="/gally1.png" 
                            alt="Gallery Image 1" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                    <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
                        <img 
                            src="/gally2.png" 
                            alt="Gallery Image 2" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                    <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
                        <img 
                            src="/gally3.png" 
                            alt="Gallery Image 3" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </div>

                    {/* Bottom Row: 2 Images (Left spans 2 columns) */}
                    <div className="md:col-span-2 relative w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] group">
                        <img 
                            src="/gally4.png" 
                            alt="Large Digital Billboard" 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        
                        {/* Yellow Overlay Card */}
                        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-[#F2D65B] rounded-[1rem] p-6 md:px-8 md:py-6 shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-sm font-semibold text-gray-900">Transform Billboard</span>
                                <span className="w-10 h-[1px] bg-gray-900"></span>
                            </div>
                            <h4 className="text-lg md:text-xl font-bold text-gray-900">
                                Outdoor The Most Advertising
                            </h4>
                        </div>
                    </div>
                    
                    {/* Bottom Right Image */}
                    <div className="md:col-span-1 w-full h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
                        <img 
                            src="/gally5.png" 
                            alt="Gallery Image 5" 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}