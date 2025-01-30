"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";

const FlatmateFinder = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading state with a timeout (you can remove this after integrating with actual data fetching logic)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating 2 seconds loading
  }, []);

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="p-6 bg-gray-200 animate-pulse rounded-2xl text-center cursor-pointer shadow-xl">
      <div className="h-8 w-3/4 bg-gray-300 mb-4 rounded-lg"></div>
      <div className="h-6 w-2/3 bg-gray-300 mb-4 rounded-lg"></div>
      <div className="h-10 w-1/2 bg-gray-300 mb-4 rounded-lg mx-auto"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4A154B] to-[#F5F5F5] p-8 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-white mb-8 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Find or Offer a Flatmate!
      </motion.h2>

      {/* Selection Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Skeleton Loader or Actual Content */}
        {loading ? (
          <>
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        ) : (
          <>
            {/* Finding Flatmates Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl text-center cursor-pointer hover:shadow-2xl transition-all border border-gray-300"
            >
              <h2 className="text-2xl font-semibold text-[#4A154B]">Finding Flatmates</h2>
              <p className="text-gray-700 mt-2">Looking for a flatmate? Find a compatible match here.</p>
              <Link href={'/dashboard/flatmates/findingflatmate'}>
                <Button className='mt-4'>Click here</Button>
              </Link>
            </motion.div>

            {/* Need Flatmates Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl text-center cursor-pointer hover:shadow-2xl transition-all border border-gray-300"
            >
              <h2 className="text-2xl font-semibold text-[#4A154B]">Need Flat</h2>
              <p className="text-gray-700 mt-2">Have a place and need flatmates? Connect with others here.</p>
              <Link href={'/dashboard/flatmates/findingflat'}>
                <Button className='mt-4'>Click here</Button>
              </Link>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default FlatmateFinder;
