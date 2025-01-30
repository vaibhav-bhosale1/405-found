"use client";
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const SearchEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const fetchEvents = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/search-events?q=${searchTerm}`);
      if (!response.ok) throw new Error("Failed to fetch events");

      const data = await response.json();
      setEvents(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchEvents();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Function to handle opening the modal with event details
  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // RSVP handler (you can modify this based on your logic)
  const handleRSVP = () => {
    alert("RSVP successful!");
    closeModal(); // Close modal after RSVP
  };

  return (
    <div className="min-h-screen  p-6 flex flex-col items-center font-inter">
      <h2 className="text-4xl font-semibold text-white mb-6 tracking-wide">Search Events</h2>
      <div className="relative w-full max-w-2xl mb-6">
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white bg-white font-medium text-gray-700"
        />
      </div>
      {loading && <p className="text-center text-white mt-4 animate-pulse">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}
      <div className="mt-6 grid gap-6 w-full max-w-2xl">
        {!loading && events.length === 0 && searchTerm && (
          <p className="text-center text-white">No events found</p>
        )}
        {events.map((event) => (
          <motion.div
            key={event._id}
            className="border p-5 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => openModal(event)} // Open modal when clicking an event
          >
            <h3 className="font-semibold text-2xl text-[#4A154B]">{event.title}</h3>
            <p className="text-sm text-gray-600">{new Date(event.date).toLocaleString()}</p>
            <p className="mt-2 text-gray-700">{event.description}</p>
            <div className="mt-2 text-sm text-gray-500">
              {event.location.city}, {event.location.country}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for event details and RSVP */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
       <motion.div
  className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl transform transition-all duration-300 border border-gray-100"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
>
  {/* Header Section */}
  <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h2>

  {/* Date Section */}
  <div className="flex items-center text-lg text-gray-600 mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
    <span>{new Date(selectedEvent.date).toLocaleString()}</span>
  </div>

  {/* Description Section */}
  <p className="text-base text-gray-700 leading-relaxed mb-8">{selectedEvent.description}</p>

  {/* Location Section */}
  <div className="flex items-center text-sm text-gray-600 mb-8">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
    <span>
      {selectedEvent.location.city}, {selectedEvent.location.country}
    </span>
  </div>

  {/* Buttons Section */}
  <div className="flex justify-center gap-6">
    <button
      onClick={handleRSVP}
      className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition ease-in-out duration-300 text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
    >
      RSVP
    </button>
    <button
      onClick={closeModal}
      className="bg-gray-500 text-white px-8 py-3 rounded-full hover:bg-gray-600 transition ease-in-out duration-300 text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105"
    >
      Close
    </button>
  </div>
</motion.div>

        </div>
      )}
    </div>
  );
};

export default SearchEvents;
