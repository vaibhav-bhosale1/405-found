"use client";
import Link from "next/link";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">Events</h1>
      <p className="text-lg text-white mb-10 text-center max-w-2xl">
        Explore ongoing events or create a new one to connect with like-minded individuals.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <Link href="/dashboard/events/search-event" passHref>
          <div className="cursor-pointer p-6 bg-[#FAF3F0] shadow-xl rounded-2xl text-center hover:shadow-2xl transition-all border border-gray-300 hover:bg-[#E0B0FF]">
            <h2 className="text-2xl font-semibold mb-2 text-[#4A154B]">Search Ongoing Events</h2>
            <p className="text-gray-700">Find and join events that match your interests.</p>
          </div>
        </Link>
        <Link href="/dashboard/events/create-event" passHref>
          <div className="cursor-pointer p-6 bg-[#FAF3F0] shadow-xl rounded-2xl text-center hover:shadow-2xl transition-all border border-gray-300 hover:bg-[#E0B0FF]">
            <h2 className="text-2xl font-semibold mb-2 text-[#4A154B]">Create an Event</h2>
            <p className="text-gray-700">Organize and host an event to engage with others.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Events;
