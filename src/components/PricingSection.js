"use client";

import { Check, ArrowRight } from 'lucide-react';

export default function PricingSection() {
    const pricingPlans = [
        {
            name: "Golden Package",
            price: "150",
            image: "/price1.png",
            features: [
                "Mistakes To Avoid",
                "Your Startup",
                "Knew About Fonts",
                "Winning Metric For Your Startup"
            ],
            isHighlighted: false
        },
        {
            name: "Normal Package",
            price: "170",
            image: "/price2.png",
            features: [
                "Mistakes To Avoid",
                "Your Startup",
                "Knew About Fonts",
                "Winning Metric For Your Startup"
            ],
            isHighlighted: true
        },
        {
            name: "Platinum Package",
            price: "110",
            image: "/price3.png",
            features: [
                "Mistakes To Avoid",
                "Your Startup",
                "Knew About Fonts",
                "Winning Metric For Your Startup"
            ],
            isHighlighted: false
        }
    ];

    return (
        <section className="w-full bg-[#F3F4F6] py-16 md:py-24">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium text-gray-900 leading-[1.2]">
                        Sky Rocket Business <br /> Your Billboard
                    </h2>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-[2rem] p-6 md:p-8 flex flex-col shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Card Image */}
                            <div className="w-full h-[180px] rounded-[1.2rem] overflow-hidden mb-8 shrink-0">
                                <img 
                                    src={plan.image} 
                                    alt={plan.name} 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Package Details */}
                            <h4 className="text-base font-bold text-gray-900 mb-2">
                                {plan.name}
                            </h4>
                            
                            <div className="flex items-end gap-1 mb-8">
                                <span className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                                    ${plan.price}
                                </span>
                                <span className="text-sm font-medium text-gray-500 mb-1.5">
                                    /Month
                                </span>
                            </div>

                            {/* Features List */}
                            <ul className="flex flex-col gap-3 mb-10 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <Check className="w-4 h-4 text-gray-300 shrink-0" strokeWidth={3} />
                                        <span className="text-sm font-medium text-gray-400">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Call to Action Button */}
                            <button 
                                className={`w-full py-3.5 px-6 rounded-full flex items-center justify-center gap-2 text-xs font-bold tracking-widest transition-colors ${
                                    plan.isHighlighted 
                                    ? 'bg-[#F2D65B] text-gray-900 hover:bg-[#E5C84F] border border-transparent' 
                                    : 'bg-white text-gray-900 border border-gray-300 hover:border-gray-900 hover:bg-gray-50'
                                }`}
                            >
                                GET NOW <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}