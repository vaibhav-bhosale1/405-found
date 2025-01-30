"use client"
import React, { useState } from 'react';

const FlatmateFinder = () => {
  // State for user profile
  const [profile, setProfile] = useState({
    name: '',
    budget: '',
    location: '',
    preferences: '',
  });

  // State for search query
  const [searchQuery, setSearchQuery] = useState({
    budget: '',
    location: '',
  });

  // State for search results
  const [searchResults, setSearchResults] = useState([]);

  // Mock data for flatmates
  const mockFlatmateData = [
    {
      name: 'Alice',
      budget: 500,
      location: 'Downtown',
      preferences: 'Non-smoker, clean',
    },
    {
      name: 'Bob',
      budget: 600,
      location: 'Uptown',
      preferences: 'Pet-friendly, near campus',
    },
    {
      name: 'Charlie',
      budget: 550,
      location: 'Midtown',
      preferences: 'Quiet, prefers private room',
    },
  ];

  // Handle changes to the profile inputs
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle changes to the search query inputs
  const handleSearchChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  // Perform the search based on the query
  const handleSearch = () => {
    const results = mockFlatmateData.filter((flatmate) => {
      return (
        flatmate.budget <= searchQuery.budget &&
        flatmate.location.toLowerCase().includes(searchQuery.location.toLowerCase())
      );
    });
    setSearchResults(results);
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6">Flatmate Finder</h2>

      {/* Profile section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Create Profile</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={profile.name}
          onChange={handleProfileChange}
          className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="budget"
          placeholder="Budget"
          value={profile.budget}
          onChange={handleProfileChange}
          className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={profile.location}
          onChange={handleProfileChange}
          className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="preferences"
          placeholder="Preferences"
          value={profile.preferences}
          onChange={handleProfileChange}
          className="w-full p-3 mb-6 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Search section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-600 mb-4">Search for Flatmates</h3>
        <input
          type="number"
          name="budget"
          placeholder="Max Budget"
          value={searchQuery.budget}
          onChange={handleSearchChange}
          className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={searchQuery.location}
          onChange={handleSearchChange}
          className="w-full p-3 mb-6 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="mt-8">
          {searchResults.map((result, index) => (
            <div key={index} className="bg-white p-5 mb-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold">{result.name}</p>
              <p className="text-gray-700">Budget: ${result.budget}</p>
              <p className="text-gray-700">Location: {result.location}</p>
              <p className="text-gray-700">Preferences: {result.preferences}</p>
              <button className="mt-4 py-2 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                Message
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlatmateFinder;
