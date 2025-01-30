"use client"
import React, { useState, useEffect } from 'react';

const mockHackathons = [
  {
    id: 1,
    title: "AI Innovation Hackathon",
    location: "San Francisco, CA",
    submission_period_dates: "March 15-17, 2025",
    url: "#",
    prize_amount: "$10,000",
    description: "Build the next generation of AI applications"
  },
  {
    id: 2,
    title: "Global Climate Tech Challenge",
    location: "Online",
    submission_period_dates: "April 1-3, 2025",
    url: "#",
    prize_amount: "$15,000",
    description: "Solving climate challenges with technology"
  },
  {
    id: 3,
    title: "Web3 DeFi Hackathon",
    location: "London, UK",
    submission_period_dates: "April 20-22, 2025",
    url: "#",
    prize_amount: "$12,000",
    description: "Creating the future of decentralized finance"
  }
];

const HackathonList = () => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setHackathons(mockHackathons);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch hackathons");
        setLoading(false);
      }
    };

    fetchHackathons();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-700"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-24 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Upcoming Hackathons
        </h2>

        {hackathons.length === 0 ? (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
            <div className="text-center text-gray-500">No upcoming hackathons found.</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.map((hackathon) => (
              <div 
                key={hackathon.id}
                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{hackathon.title}</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-medium">Location:</span> {hackathon.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Date:</span> {hackathon.submission_period_dates}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Prize Pool:</span> {hackathon.prize_amount}
                  </p>
                  <p className="text-gray-700 mt-2">{hackathon.description}</p>
                  <button 
                    className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 w-full"
                    onClick={() => window.open(hackathon.url, '_blank')}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HackathonList;