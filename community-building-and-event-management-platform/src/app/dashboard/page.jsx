"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Full Page Loader Component
const FullPageLoader = () => (
  <div className="absolute inset-0 flex justify-center items-center bg-[#030303] bg-opacity-80 z-50">
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="w-20 h-20 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      <div className="text-white text-lg font-semibold">Loading...</div>
    </div>
  </div>
);

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading state (you can remove this when fetching real data)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating 2 seconds loading
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030303]">
      {/* Show full-page loader if loading */}
      {loading && <FullPageLoader />}

      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Animated Shapes */}
        <motion.div
          initial={{ opacity: 0, y: -150, rotate: -15 }}
          animate={{ opacity: 1, y: 0, rotate: 12 }}
          transition={{
            duration: 2.4,
            delay: 0.3,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
          }}
          className="absolute left-[-10%] top-[15%] md:left-[-5%] md:top-[20%] w-[600px] h-[140px] rounded-full bg-gradient-to-r from-indigo-500/[0.15] blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
        />
        <motion.div
          initial={{ opacity: 0, y: -150, rotate: 12 }}
          animate={{ opacity: 1, y: 0, rotate: -15 }}
          transition={{
            duration: 2.4,
            delay: 0.5,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
          }}
          className="absolute right-[-5%] top-[70%] md:right-[0%] md:top-[75%] w-[500px] h-[120px] rounded-full bg-gradient-to-r from-rose-500/[0.15] blur-[2px] border-2 border-white/[0.15] shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
        />
        {/* Additional shapes */}
      </div>

      {/* Title */}
      <div className="relative z-10 container mx-auto px-7 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: (i) => ({
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  delay: 0.5 + i * 0.2,
                  ease: [0.25, 0.4, 0.25, 1],
                },
              }),
            }}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Dashboard
          </motion.div>
        </div>
      </div>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl relative z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Loading Spinner or Actual Content */}
        {!loading && (
          <>
            {/* Hackathon Section */}
            <Link href="/dashboard/hackathon" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="p-8 bg-[#E8F0F2] shadow-xl rounded-2xl text-center cursor-pointer hover:scale-105 transform hover:shadow-2xl transition-all border border-gray-300"
              >
                <h2 className="text-2xl font-semibold mb-3 text-[#030303]">Hackathon Competition</h2>
                <p className="text-sm text-[#030303] opacity-80 mb-4">Join the ultimate coding challenge and showcase your skills. Collaborate with teams and innovate!</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-2 bg-[#A7D8F2] text-[#030303] rounded-lg shadow-md"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </Link>

            {/* Flatmate Finder Section */}
            <Link href="/dashboard/flatmates" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="p-8 bg-[#F0E6F6] shadow-xl rounded-2xl text-center cursor-pointer hover:scale-105 transform hover:shadow-2xl transition-all border border-gray-300"
              >
                <h2 className="text-2xl font-semibold mb-3 text-[#030303]">Flatmate Finder</h2>
                <p className="text-sm text-[#030303] opacity-80 mb-4">Looking for the perfect flatmate? Find someone who shares your lifestyle and preferences.</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-2 bg-[#D4B9F4] text-[#030303] rounded-lg shadow-md"
                >
                  Find Now
                </motion.button>
              </motion.div>
            </Link>

            {/* Events Management Section */}
            <Link href="/dashboard/events" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="p-8 bg-[#FFF2D8] shadow-xl rounded-2xl text-center cursor-pointer hover:scale-105 transform hover:shadow-2xl transition-all border border-gray-300"
              >
                <h2 className="text-2xl font-semibold mb-3 text-[#030303]">Events</h2>
                <p className="text-sm text-[#030303] opacity-80 mb-4">Stay updated on all campus events. RSVP, get reminders, and be part of exciting activities!</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-2 bg-[#FFDBA8] text-[#030303] rounded-lg shadow-md"
                >
                  View Events
                </motion.button>
              </motion.div>
            </Link>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
