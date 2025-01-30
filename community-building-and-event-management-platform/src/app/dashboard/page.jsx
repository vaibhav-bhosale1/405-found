"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="p-6 bg-gray-200 animate-pulse rounded-2xl text-center cursor-pointer shadow-xl">
    <div className="h-8 w-3/4 bg-gray-300 mb-4 rounded-lg mx-auto"></div>
    <div className="h-6 w-2/3 bg-gray-300 mb-4 rounded-lg mx-auto"></div>
    <div className="h-10 w-1/2 bg-gray-300 mb-4 rounded-lg mx-auto"></div>
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#4A154B] to-[#F5F5F5] p-6">
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-white mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Your Community Hub
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-lg text-gray-800 mb-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Connect with peers, find the perfect hackathon team, compatible flatmates, and exciting college events all in one place.
      </motion.p>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Skeleton Loader or Actual Content */}
        {loading ? (
          <>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        ) : (
          <>
            {/* Hackathon Section */}
            <Link href="/dashboard/hackathon" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-[#FAF3F0] shadow-xl rounded-2xl text-center cursor-pointer hover:shadow-2xl transition-all border border-gray-300 hover:bg-[#E0B0FF]"
              >
                <h2 className="text-xl font-semibold mb-2 text-[#4A154B]">Hackathon Competition</h2>
                <p className="text-gray-700">Find or create teams for exciting hackathons.</p>
              </motion.div>
            </Link>

            {/* Flatmate Finder Section */}
            <Link href="/dashboard/flatmates" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-[#FAF3F0] shadow-xl rounded-2xl text-center cursor-pointer hover:shadow-2xl transition-all border border-gray-300 hover:bg-[#FFB6C1]"
              >
                <h2 className="text-xl font-semibold mb-2 text-[#4A154B]">Flatmate Finder</h2>
                <p className="text-gray-700">Search for compatible flatmates based on interests.</p>
              </motion.div>
            </Link>

            {/* Events Management Section */}
            <Link href="/dashboard/events" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-6 bg-[#FAF3F0] shadow-xl rounded-2xl text-center cursor-pointer hover:shadow-2xl transition-all border border-gray-300 hover:bg-[#87CEFA]"
              >
                <h2 className="text-xl font-semibold mb-2 text-[#4A154B]">Events</h2>
                <p className="text-gray-700">Join and manage college events with RSVP & reminders.</p>
              </motion.div>
            </Link>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Dashboard;
