"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Quiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        eventType: "",
        eventDate: "",
        guestCount: "",
        budget: "",
        name: "",
        email: "",
        phone: "",
        details: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const totalSteps = 4;

    // Email validation
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Step validation
    const validateStep = (): boolean => {
        setError("");

        switch (currentStep) {
            case 0:
                if (!formData.eventType) {
                    setError("Please select an event type");
                    return false;
                }
                break;
            case 1:
                // Optional fields, no validation needed
                break;
            case 2:
                if (!formData.name.trim()) {
                    setError("Name is required");
                    return false;
                }
                if (!formData.email.trim()) {
                    setError("Email is required");
                    return false;
                }
                if (!validateEmail(formData.email)) {
                    setError("Please enter a valid email address");
                    return false;
                }
                break;
            case 3:
                // Review step		
                if (formData.details.length > 2000) {
                    setError("Details cannot exceed 2000 characters");
                    return false;
                }
                break;
        }
        return true;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError(""); // Clear error on input change
    };

    const handleTypeSelect = (type: string) => {
        setFormData((prev) => ({ ...prev, eventType: type }));
        setError(""); // Clear error on selection
    };

    const handleNext = async () => {
        // Validate current step before proceeding
        if (!validateStep()) {
            return;
        }

        if (currentStep < totalSteps - 1) {
            setCurrentStep((prev) => prev + 1);
        } else {
            // Final submission to backend
            setIsSubmitting(true);
            setError("");

            try {
                // Get API URL with fallback
                const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

                if (!apiUrl) {
                    throw new Error("API configuration error. Please contact support.");
                }

                // Prepare clean data
                const cleanData = {
                    eventType: formData.eventType.trim(),
                    eventDate: formData.eventDate.trim(),
                    guestCount: formData.guestCount.trim(),
                    budget: formData.budget.trim(),
                    name: formData.name.trim(),
                    email: formData.email.trim().toLowerCase(),
                    phone: formData.phone.trim(),
                    details: formData.details.trim(),
                };

                const response = await fetch(`${apiUrl}/api/quiz`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(cleanData),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Failed to submit quiz");
                }

                // Success
                alert("Thank you! We will be in touch shortly.");
                setCurrentStep(0);
                setFormData({
                    eventType: "",
                    eventDate: "",
                    guestCount: "",
                    budget: "",
                    name: "",
                    email: "",
                    phone: "",
                    details: "",
                });
            } catch (err: any) {
                console.error("Error submitting quiz:", err);

                // Provide user-friendly error messages
                if (err.message.includes("fetch")) {
                    setError("Unable to connect to server. Please check your connection and try again.");
                } else {
                    setError(err.message || "Failed to submit. Please try again.");
                }
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <>
                        <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                            What type of event do you have in mind?
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {[
                                "Birthday party",
                                "Product launch",
                                "Corporate event",
                                "Private celebration",
                                "Business Conference",
                                "Gala Dinner",
                            ].map((type) => (
                                <label key={type} className="group cursor-pointer relative">
                                    <input
                                        className="peer sr-only"
                                        name="eventType"
                                        type="radio"
                                        value={type}
                                        checked={formData.eventType === type}
                                        onChange={() => handleTypeSelect(type)}
                                    />
                                    <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 transition-all flex items-center justify-between">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-primary peer-checked:text-primary">
                                            {type}
                                        </span>
                                        <div className="w-4 h-4 rounded-full border border-gray-400 peer-checked:border-primary peer-checked:bg-primary"></div>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </>
                );
            case 1:
                return (
                    <>
                        <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                            Tell us a bit more about the details.
                        </h4>
                        <div className="space-y-4 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Tentative Date
                                </label>
                                <input
                                    type="date"
                                    name="eventDate"
                                    value={formData.eventDate}
                                    onChange={handleInputChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Estimated Guest Count
                                </label>
                                <input
                                    type="number"
                                    name="guestCount"
                                    placeholder="e.g. 150"
                                    value={formData.guestCount}
                                    onChange={handleInputChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Budget (Optional)
                                </label>
                                <input
                                    type="text"
                                    name="budget"
                                    placeholder="e.g. $10,000 - $20,000"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                            How can we reach you?
                        </h4>
                        <div className="space-y-4 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                            Review & Submit
                        </h4>
                        <div className="space-y-4 mb-8 text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/5 p-6 rounded-xl">
                            <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                                <span className="font-medium">Type:</span>
                                <span>{formData.eventType || "Not specified"}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                                <span className="font-medium">Date:</span>
                                <span>{formData.eventDate || "Not specified"}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                                <span className="font-medium">Guests:</span>
                                <span>{formData.guestCount || "Not specified"}</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-200 dark:border-white/10 pb-2">
                                <span className="font-medium">Name:</span>
                                <span>{formData.name || "Not specified"}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Email:</span>
                                <span>{formData.email || "Not specified"}</span>
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <section
            className="py-24 bg-background dark:bg-background-dark transition-colors relative overflow-hidden"
            id="contact"
        >
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 space-y-6">
                        <motion.h3
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-display text-3xl md:text-4xl text-foreground font-semibold"
                        >
                            Let's curate your <br /> <span className="text-primary italic">perfect moment.</span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm"
                        >
                            Fill out this short quiz if you already know the event you'd like to
                            organize! This will help us understand your needs better and offer
                            the most suitable solution.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hidden lg:block pt-8"
                        >
                            <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                <span className="w-8 h-[1px] bg-gray-300 dark:bg-gray-700"></span>
                                <span>Takes less than 2 minutes</span>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-surface dark:bg-surface-dark rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-white/5 relative z-10 transition-all min-h-[500px] flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Step {currentStep + 1} / {totalSteps}
                                    </span>
                                    <div className="w-32 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                                            transition={{ duration: 0.5 }}
                                            className="h-full bg-primary rounded-full"
                                        ></motion.div>
                                    </div>
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {renderStep()}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                            {/* Error Message */}
                            {error && (
                                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                    <p className="text-red-400 text-sm">{error}</p>
                                </div>
                            )}
                            <div className="flex justify-between items-center mt-6">
                                <button
                                    onClick={handleBack}
                                    disabled={currentStep === 0 || isSubmitting}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all ${currentStep === 0 || isSubmitting
                                        ? "text-gray-400 cursor-not-allowed"
                                        : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                        }`}
                                >
                                    Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={isSubmitting}
                                    className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="material-icons-outlined animate-spin">refresh</span>
                                            Submitting...
                                        </>
                                    ) : currentStep === totalSteps - 1 ? (
                                        <>
                                            <span className="material-icons-outlined">check</span>
                                            Submit
                                        </>
                                    ) : (
                                        <>
                                            Next
                                            <span className="material-icons-outlined">arrow_forward</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
