"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Skeleton loader component for form and search sections
const SkeletonLoader = ({ className }) => (
  <div className={`h-12 bg-gray-300 rounded-lg ${className} animate-pulse`}></div>
);

const FlatmateFinder = () => {
  const [profile, setProfile] = useState({
    name: "",
    budget: "",
    location: "",
    preferences: "",
  });

  const [searchQuery, setSearchQuery] = useState({
    budget: "",
    location: "",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to simulate data fetching

  const mockFlatmateData = [
    {
      name: "Alice",
      budget: 500,
      location: "Downtown",
      preferences: "Non-smoker, clean",
    },
    {
      name: "Bob",
      budget: 600,
      location: "Uptown",
      preferences: "Pet-friendly, near campus",
    },
    {
      name: "Charlie",
      budget: 550,
      location: "Midtown",
      preferences: "Quiet, prefers private room",
    },
  ];

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSearchChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const results = mockFlatmateData.filter(
      (flatmate) =>
        flatmate.budget <= searchQuery.budget &&
        flatmate.location.toLowerCase().includes(searchQuery.location.toLowerCase())
    );
    setSearchResults(results);
    setLoading(false); // Set loading to false after results are fetched
  };

  // Simulate loading data for 2 seconds before displaying content
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulated loading for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4A154B] to-[#F5F5F5] p-8 flex flex-col items-center">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-white mb-6 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Find Your Perfect Flatmate
      </motion.h2>

      {/* Profile Section */}
      <motion.div
        className="w-full max-w-3xl bg-white bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-xl p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Create Your Profile</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {loading ? (
            <>
              <SkeletonLoader />
              <SkeletonLoader />
            </>
          ) : (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="number"
                name="budget"
                placeholder="Budget"
                value={profile.budget}
                onChange={handleProfileChange}
                className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </>
          )}
        </div>
        {loading ? (
          <SkeletonLoader className="mt-4" />
        ) : (
          <input
            type="text"
            name="location"
            placeholder="Preferred Location"
            value={profile.location}
            onChange={handleProfileChange}
            className="w-full p-3 mt-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        )}
        {loading ? (
          <SkeletonLoader className="mt-4" />
        ) : (
          <textarea
            name="preferences"
            placeholder="Preferences (e.g., Non-smoker, Pet-friendly)"
            value={profile.preferences}
            onChange={handleProfileChange}
            className="w-full p-3 mt-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        )}
      </motion.div>

      {/* Search Section */}
      <motion.div
        className="w-full max-w-3xl bg-white bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-xl p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Search for Flatmates</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {loading ? (
            <>
              <SkeletonLoader />
              <SkeletonLoader />
            </>
          ) : (
            <>
              <input
                type="number"
                name="budget"
                placeholder="Max Budget"
                value={searchQuery.budget}
                onChange={handleSearchChange}
                className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="location"
                placeholder="Preferred Location"
                value={searchQuery.location}
                onChange={handleSearchChange}
                className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </>
          )}
        </div>
        <button
          onClick={handleSearch}
          className="w-full mt-4 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300 shadow-lg"
        >
          Search Flatmates
        </button>
      </motion.div>

      {/* Display Search Results */}
      {loading ? (
        <div className="w-full max-w-3xl">
          <SkeletonLoader className="mb-6" />
          <SkeletonLoader className="mb-6" />
          <SkeletonLoader className="mb-6" />
        </div>
      ) : (
        searchResults.length > 0 && (
          <motion.div
            className="w-full max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4 text-center">Matching Flatmates</h3>
            {searchResults.map((result, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-80 backdrop-blur-lg p-5 mb-6 rounded-xl shadow-xl flex justify-between items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <p className="text-xl font-semibold text-gray-800">{result.name}</p>
                  <p className="text-gray-600">Budget: ${result.budget}</p>
                  <p className="text-gray-600">Location: {result.location}</p>
                  <p className="text-gray-600">Preferences: {result.preferences}</p>
                </div>
                <button className="py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-md">
                  Message
                </button>
              </motion.div>
            ))}
          </motion.div>
        )
      )}
    </div>
  );
};

export default FlatmateFinder;
