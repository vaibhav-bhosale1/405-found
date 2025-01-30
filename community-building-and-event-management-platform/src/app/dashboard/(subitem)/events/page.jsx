"use client";
import Link from "next/link";
import { useState } from "react";

const Events = () => {
  const events = [
    {
      id: 1,
      name: "Tech Conference 2025",
      date: "March 20, 2025",
      location: "Los Angeles, CA",
      description: "Join industry leaders for a day of tech talks and networking.",
    },
    {
      id: 2,
      name: "AI Workshop",
      date: "April 10, 2025",
      location: "Online",
      description: "Learn about the latest advancements in AI and machine learning.",
    },
    {
      id: 3,
      name: "Hackathon Prep Session",
      date: "February 28, 2025",
      location: "San Francisco, CA",
      description: "Prepare for upcoming hackathons with industry experts and mentors.",
    },
  ];

  const [rsvpStatus, setRsvpStatus] = useState({});

  const handleRsvp = (eventId) => {
    setRsvpStatus((prevStatus) => ({
      ...prevStatus,
      [eventId]: true,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#4A154B] to-[#F5F5F5] p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-[#4A154B] mb-8 text-center">Upcoming Events</h1>
      <p className="text-lg text-gray-800 mb-10 text-center max-w-2xl">
        Discover and RSVP for upcoming events to enhance your skills and meet like-minded individuals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {events.map((event) => (
          <div
            key={event.id}
            className="p-6 bg-[#FAF3F0] shadow-xl rounded-2xl text-center hover:shadow-2xl transition-all border border-gray-300 hover:bg-[#E0B0FF]"
          >
            <h2 className="text-2xl font-semibold mb-2 text-[#4A154B]">{event.name}</h2>
            <p className="text-gray-700">{event.date} | {event.location}</p>
            <p className="text-gray-600 mt-2">{event.description}</p>
            <div className="mt-4 flex justify-center gap-4">
              {rsvpStatus[event.id] ? (
                <button
                  disabled
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow-md cursor-not-allowed"
                >
                  RSVP'd
                </button>
              ) : (
                <button
                  onClick={() => handleRsvp(event.id)}
                  className="bg-[#4A154B] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#320A35] transition-all"
                >
                  RSVP Now
                </button>
              )}
              <Link href={`/events/${event.id}`} passHref>
                <button className="bg-[#FFB6C1] text-[#4A154B] px-4 py-2 rounded-lg shadow-md hover:bg-[#FF8095] transition-all">
                  More Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
