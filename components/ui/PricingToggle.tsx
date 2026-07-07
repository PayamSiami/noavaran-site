"use client";

import * as React from "react";
import { useState } from "react";
import { Check } from 'lucide-react';
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface PricingPlan {
    name: string;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
    cta: string;
    popular?: boolean;
}

interface PricingToggleProps {
    plans: PricingPlan[];
    className?: string;
}

export default function PricingToggle({ plans, className }: PricingToggleProps) {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <div className={cn("", className)}>
            {/* Toggle */}
            <div className="flex justify-center mb-12">
                <div className="bg-muted p-1 rounded-full inline-flex">
                    <button
                        onClick={() => setIsYearly(false)}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all",
                            !isYearly
                                ? "bg-gray-900 text-white shadow-md dark:bg-white dark:text-gray-900"
                                : "text-gray-500 dark:text-gray-400"
                        )}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setIsYearly(true)}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all",
                            isYearly
                                ? "bg-gray-900 text-white shadow-md dark:bg-white dark:text-gray-900"
                                : "text-gray-500 dark:text-gray-400"
                        )}
                    >
                        Yearly <span className="text-xs opacity-75">Save 20%</span>
                    </button>
                </div>
            </div>

            {/* Plans Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => {
                    const isPopular = plan.popular || false;
                    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
                    const period = isYearly ? "year" : "month";

                    return (
                        <div
                            key={index}
                            className={cn(
                                "rounded-2xl p-8 transition-all duration-300",
                                isPopular
                                    ? "bg-gray-900 text-white scale-105 shadow-2xl ring-2 ring-gray-900"
                                    : "bg-white border border-gray-200 shadow-lg"
                            )}
                        >
                            {isPopular && (
                                <div className="text-xs font-semibold uppercase tracking-wide mb-4 text-gray-300">
                                    Most Popular
                                </div>
                            )}

                            <h3 className={cn(
                                "text-xl font-bold mb-2",
                                isPopular ? "text-white" : "text-gray-900"
                            )}>
                                {plan.name}
                            </h3>

                            <p className={cn(
                                "text-sm mb-6",
                                isPopular ? "text-gray-300" : "text-gray-600"
                            )}>
                                {plan.description}
                            </p>

                            <div className="mb-6">
                                <span className={cn(
                                    "text-4xl font-bold",
                                    isPopular ? "text-white" : "text-gray-900"
                                )}>
                                    ${price}
                                </span>
                                <span className={cn(
                                    "text-sm",
                                    isPopular ? "text-gray-400" : "text-gray-500"
                                )}>
                                    /{period}
                                </span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3">
                                        <Check className={cn(
                                            "w-5 h-5",
                                            isPopular ? "text-emerald-400" : "text-emerald-600"
                                        )} />
                                        <span className={cn(
                                            "text-sm",
                                            isPopular ? "text-gray-200" : "text-gray-700"
                                        )}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* ✅ Fixed Button Variants */}
                            <Button
                                variant={isPopular ? "gradient" : "outline"}
                                className={cn(
                                    "w-full",
                                    isPopular
                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500"
                                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                                )}
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}