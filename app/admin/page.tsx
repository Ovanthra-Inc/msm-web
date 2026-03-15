"use client";

import { useState, useEffect, useCallback } from "react";
import { fetchWithTimeout } from "@/lib/api";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
interface Quiz {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  eventType: string;
  eventDate?: string;
  guestCount?: string;
  budget?: string;
  details?: string;
  createdAt: string;
}

interface Rating {
  _id: string;
  email: string;
  rating: number;
  comments?: string;
  createdAt: string;
}

type View = "quiz" | "ratings";

// --- Helpers ---
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function StarDisplay({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          className={`w-4 h-4 ${s <= rating ? "text-amber-400" : "text-white/15"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1.5 text-sm font-semibold text-white/70">{rating}/5</span>
    </div>
  );
}

// --- Main Component ---
export default function AdminPage() {
  const [activeView, setActiveView] = useState<View>("quiz");
  const [quizData, setQuizData] = useState<Quiz[]>([]);
  const [ratingData, setRatingData] = useState<Rating[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [selectedRating, setSelectedRating] = useState<Rating | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://msm-server.vercel.app";

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const [quizRes, ratingsRes] = await Promise.all([
        fetchWithTimeout(`${API_URL}/api/quiz`, { timeoutMs: 15000 }),
        fetchWithTimeout(`${API_URL}/api/ratings`, { timeoutMs: 15000 }),
      ]);
      // The API might return { data: [...] } or just [...]
      setQuizData(quizRes?.data ?? quizRes ?? []);
      setRatingData(ratingsRes?.data ?? ratingsRes ?? []);
    } catch (err: any) {
      setError(err.message || "Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const avgRating =
    ratingData.length > 0
      ? (ratingData.reduce((sum, r) => sum + r.rating, 0) / ratingData.length).toFixed(1)
      : "—";

  const navItems: { id: View; label: string; icon: string; count: number }[] = [
    { id: "quiz", label: "Event Queries", icon: "event_note", count: quizData.length },
    { id: "ratings", label: "Ratings", icon: "star", count: ratingData.length },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-white/8 flex flex-col">
        {/* Brand */}
        <div className="px-6 py-6 border-b border-white/8">
          <div className="flex items-center gap-3">
            <img
              src="/assets/golden-logo-removebg-v2.png"
              alt="MSM Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                Admin
              </p>
              <p className="text-xs text-white/30 mt-0.5">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          <p className="text-[10px] font-bold tracking-widest text-white/25 uppercase px-3 mb-3">
            Data Views
          </p>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 cursor-pointer group ${
                activeView === item.id
                  ? "bg-primary/15 text-primary"
                  : "text-white/50 hover:bg-white/5 hover:text-white/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="material-icons-outlined text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                  activeView === item.id
                    ? "bg-primary/20 text-primary"
                    : "bg-white/8 text-white/40"
                }`}
              >
                {item.count}
              </span>
            </button>
          ))}
        </nav>

        {/* Refresh Button */}
        <div className="px-3 py-4 border-t border-white/8">
          <button
            onClick={fetchData}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/50 hover:text-white/80 text-sm font-medium transition-all disabled:opacity-40 cursor-pointer"
          >
            <span className={`material-icons-outlined text-base ${loading ? "animate-spin" : ""}`}>
              refresh
            </span>
            {loading ? "Refreshing…" : "Refresh Data"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="shrink-0 h-16 border-b border-white/8 flex items-center justify-between px-8">
          <div>
            <h1 className="text-base font-semibold text-white">
              {activeView === "quiz" ? "Event Queries" : "Ratings & Feedback"}
            </h1>
            <p className="text-xs text-white/30 mt-0.5">
              {activeView === "quiz"
                ? `${quizData.length} submission${quizData.length !== 1 ? "s" : ""} received`
                : `${ratingData.length} rating${ratingData.length !== 1 ? "s" : ""} — avg ${avgRating} ★`}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/25">
            <span className="material-icons-outlined text-sm">schedule</span>
            Last updated: {new Date().toLocaleTimeString("en-IN")}
          </div>
        </header>

        {/* Body */}
        <main className="flex-1 overflow-auto p-8">
          {/* Error State */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
            >
              <span className="material-icons-outlined text-base mt-0.5 shrink-0">error_outline</span>
              <div>
                <p className="text-sm font-semibold">Failed to load data</p>
                <p className="text-xs mt-0.5 text-red-400/70">{error}</p>
              </div>
              <button
                onClick={fetchData}
                className="ml-auto shrink-0 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors cursor-pointer"
              >
                Retry
              </button>
            </motion.div>
          )}

          {/* Loading Skeleton */}
          {loading && (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-16 rounded-xl bg-white/4 animate-pulse"
                  style={{ animationDelay: `${i * 0.07}s` }}
                />
              ))}
            </div>
          )}

          {/* Quiz Table */}
          {!loading && activeView === "quiz" && (
            <AnimatePresence mode="wait">
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {quizData.length === 0 ? (
                  <EmptyState label="No event queries yet." icon="event_note" />
                ) : (
                  <div className="border border-white/8 rounded-2xl overflow-hidden">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white/4 text-white/40 text-xs uppercase tracking-wider">
                          <th className="text-left px-5 py-3.5 font-semibold">Name</th>
                          <th className="text-left px-5 py-3.5 font-semibold">Email</th>
                          <th className="text-left px-5 py-3.5 font-semibold">Event Type</th>
                          <th className="text-left px-5 py-3.5 font-semibold">Date</th>
                          <th className="text-left px-5 py-3.5 font-semibold">Guests</th>
                          <th className="text-left px-5 py-3.5 font-semibold">Submitted</th>
                          <th className="px-5 py-3.5" />
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {quizData.map((q, i) => (
                          <motion.tr
                            key={q._id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.04 }}
                            className="group hover:bg-white/3 transition-colors"
                          >
                            <td className="px-5 py-4 font-medium text-white">{q.name}</td>
                            <td className="px-5 py-4 text-white/50">{q.email}</td>
                            <td className="px-5 py-4">
                              <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                                {q.eventType}
                              </span>
                            </td>
                            <td className="px-5 py-4 text-white/50">{q.eventDate || "—"}</td>
                            <td className="px-5 py-4 text-white/50">{q.guestCount || "—"}</td>
                            <td className="px-5 py-4 text-white/40 text-xs">{formatDate(q.createdAt)}</td>
                            <td className="px-5 py-4">
                              <button
                                onClick={() => setSelectedQuiz(q)}
                                className="opacity-0 group-hover:opacity-100 text-xs font-semibold text-primary hover:text-primary/80 transition-all cursor-pointer"
                              >
                                View
                              </button>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Ratings Cards */}
          {!loading && activeView === "ratings" && (
            <AnimatePresence mode="wait">
              <motion.div
                key="ratings"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                {/* Avg Rating Banner */}
                {ratingData.length > 0 && (
                  <div className="mb-6 flex items-center gap-6 p-5 rounded-2xl bg-gradient-to-r from-primary/10 to-amber-600/5 border border-primary/15">
                    <div className="text-5xl font-bold text-primary font-display">
                      {avgRating}
                    </div>
                    <div>
                      <StarDisplay rating={Math.round(parseFloat(avgRating))} />
                      <p className="text-xs text-white/35 mt-1.5">
                        Based on {ratingData.length} review{ratingData.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                    {/* Distribution */}
                    <div className="ml-auto space-y-1.5 hidden md:block">
                      {[5, 4, 3, 2, 1].map((star) => {
                        const count = ratingData.filter((r) => Math.round(r.rating) === star).length;
                        const pct = ratingData.length > 0 ? (count / ratingData.length) * 100 : 0;
                        return (
                          <div key={star} className="flex items-center gap-2 text-xs text-white/40">
                            <span>{star}★</span>
                            <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
                              <div
                                className="h-full bg-amber-400 rounded-full transition-all duration-500"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span>{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {ratingData.length === 0 ? (
                  <EmptyState label="No ratings yet." icon="star" />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {ratingData.map((r, i) => (
                      <motion.div
                        key={r._id}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        onClick={() => setSelectedRating(r)}
                        className="p-5 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 hover:border-primary/20 transition-all cursor-pointer group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary uppercase">
                            {r.email[0]}
                          </div>
                          <StarDisplay rating={r.rating} />
                        </div>
                        <p className="text-sm font-medium text-white/80 truncate">{r.email}</p>
                        {r.comments && (
                          <p className="text-xs text-white/40 mt-2 line-clamp-2 leading-relaxed">
                            "{r.comments}"
                          </p>
                        )}
                        <p className="text-[10px] text-white/25 mt-3">
                          {formatDate(r.createdAt)}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </main>
      </div>

      {/* Quiz Detail Drawer */}
      <AnimatePresence>
        {selectedQuiz && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedQuiz(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-[#111] border-l border-white/10 z-50 flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8 sticky top-0 bg-[#111]">
                <h2 className="font-display text-lg text-white">Query Details</h2>
                <button
                  onClick={() => setSelectedQuiz(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-icons-outlined text-base text-white/60">close</span>
                </button>
              </div>
              <div className="p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center text-lg font-bold text-primary uppercase">
                    {selectedQuiz.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{selectedQuiz.name}</p>
                    <p className="text-sm text-white/40">{selectedQuiz.email}</p>
                  </div>
                </div>
                <DrawerField label="Phone" value={selectedQuiz.phone} />
                <DrawerField label="Event Type">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                    {selectedQuiz.eventType}
                  </span>
                </DrawerField>
                <DrawerField label="Event Date" value={selectedQuiz.eventDate} />
                <DrawerField label="Guest Count" value={selectedQuiz.guestCount} />
                <DrawerField label="Budget" value={selectedQuiz.budget} />
                {selectedQuiz.details && (
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-2 font-semibold">Details</p>
                    <p className="text-sm text-white/60 leading-relaxed bg-white/4 rounded-xl p-4 border border-white/6">
                      {selectedQuiz.details}
                    </p>
                  </div>
                )}
                <DrawerField label="Submitted" value={formatDate(selectedQuiz.createdAt)} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Rating Detail Drawer */}
      <AnimatePresence>
        {selectedRating && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRating(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-[#111] border-l border-white/10 z-50 flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/8 sticky top-0 bg-[#111]">
                <h2 className="font-display text-lg text-white">Rating Details</h2>
                <button
                  onClick={() => setSelectedRating(null)}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <span className="material-icons-outlined text-base text-white/60">close</span>
                </button>
              </div>
              <div className="p-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-500/15 flex items-center justify-center text-lg font-bold text-amber-400 uppercase">
                    {selectedRating.email[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{selectedRating.email}</p>
                    <p className="text-sm text-white/40">{formatDate(selectedRating.createdAt)}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider mb-2 font-semibold">Rating</p>
                  <StarDisplay rating={selectedRating.rating} />
                </div>
                {selectedRating.comments && (
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-wider mb-2 font-semibold">Feedback</p>
                    <p className="text-sm text-white/60 leading-relaxed bg-white/4 rounded-xl p-4 border border-white/6">
                      "{selectedRating.comments}"
                    </p>
                  </div>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Sub-Components ---
function EmptyState({ label, icon }: { label: string; icon: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-white/20">
      <span className="material-icons-outlined text-5xl mb-3">{icon}</span>
      <p className="text-sm">{label}</p>
    </div>
  );
}

function DrawerField({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  if (!value && !children) return null;
  return (
    <div>
      <p className="text-xs text-white/30 uppercase tracking-wider mb-1.5 font-semibold">{label}</p>
      {children ?? <p className="text-sm text-white/70">{value}</p>}
    </div>
  );
}
