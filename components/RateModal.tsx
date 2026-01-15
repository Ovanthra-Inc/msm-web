"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface RateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RateModal({ isOpen, onClose }: RateModalProps) {
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState<number>(0);
    const [comments, setComments] = useState("");
    const [hoveredRating, setHoveredRating] = useState<number>(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    // Email validation regex
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        // Client-side validation
        if (!email.trim()) {
            setError("Email is required");
            setIsSubmitting(false);
            return;
        }

        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            setIsSubmitting(false);
            return;
        }

        if (rating < 1 || rating > 5) {
            setError("Please select a rating between 1 and 5 stars");
            setIsSubmitting(false);
            return;
        }

        if (comments.length > 1000) {
            setError("Comments cannot exceed 1000 characters");
            setIsSubmitting(false);
            return;
        }

        try {
            // Get API URL with fallback
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

            if (!apiUrl) {
                throw new Error("API configuration error. Please contact support.");
            }

            const response = await fetch(`${apiUrl}/api/ratings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.trim().toLowerCase(),
                    rating,
                    comments: comments.trim(),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to submit rating");
            }

            // Success
            alert("Thank you for your feedback!");
            setEmail("");
            setRating(0);
            setComments("");
            onClose();
        } catch (err: any) {
            console.error("Error submitting rating:", err);

            // Provide user-friendly error messages
            if (err.message.includes("fetch")) {
                setError("Unable to connect to server. Please check your connection and try again.");
            } else {
                setError(err.message || "Failed to submit rating. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 mt-10 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full max-w-md bg-surface-dark border border-white/10 rounded-2xl shadow-2xl pointer-events-auto overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
                                aria-label="Close modal"
                            >
                                <span className="material-icons-outlined text-gray-400 hover:text-white text-xl">
                                    close
                                </span>
                            </button>

                            {/* Header */}
                            <div className="px-8 pt-8 pb-6 border-b border-white/5">
                                <h2 className="font-display text-3xl text-white mb-2">
                                    Rate <span className="text-primary italic">Us</span>
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    We value your feedback. Please share your experience with us.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-8 space-y-6">
                                {/* Email Input */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 bg-background-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                {/* Star Rating */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-3">
                                        Your Rating
                                    </label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <label
                                                key={star}
                                                className="cursor-pointer"
                                                onMouseEnter={() => setHoveredRating(star)}
                                                onMouseLeave={() => setHoveredRating(0)}
                                            >
                                                <input
                                                    type="radio"
                                                    name="rating"
                                                    value={star}
                                                    checked={rating === star}
                                                    onChange={() => setRating(star)}
                                                    required
                                                    className="sr-only"
                                                />
                                                <span
                                                    className={`material-icons-outlined text-4xl transition-all duration-200 ${star <= (hoveredRating || rating)
                                                        ? "text-primary"
                                                        : "text-gray-600"
                                                        } ${star <= hoveredRating ? "scale-110" : "scale-100"
                                                        }`}
                                                >
                                                    {star <= (hoveredRating || rating) ? "star" : "star_border"}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Comments */}
                                <div>
                                    <label
                                        htmlFor="comments"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        Comments (Optional)
                                    </label>
                                    <textarea
                                        id="comments"
                                        value={comments}
                                        onChange={(e) => setComments(e.target.value)}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-background-dark border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Share your thoughts..."
                                    />
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                                        <p className="text-red-400 text-sm">{error}</p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="material-icons-outlined text-xl animate-spin">refresh</span>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-icons-outlined text-xl">send</span>
                                            Submit Feedback
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}
