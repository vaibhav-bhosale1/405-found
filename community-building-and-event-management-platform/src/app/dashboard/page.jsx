"use client";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#4A154B] to-[#F5F5F5] p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-[#4A154B] mb-8 text-center">Welcome to Your Community Hub</h1>
      <p className="text-lg text-gray-800 mb-10 text-center max-w-2xl">
        Connect with peers, find the perfect hackathon team, compatible flatmates, and exciting college events all in one place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Hackathon Competition Section */}
        <Link href="/dashboard/hackathon" passHref>
          <div 
            className="p-6 bg-[#FAF3F0] shadow-xl rounded-2xl text-center cursor-pointer hover:shadow-2xl transition-all border border-gray-300 hover:bg-[#E0B0FF]">
            <h2 className="text-xl font-semibold mb-2 text-[#4A154B]">Hackathon Competition</h2>
            <p className="text-gray-700">Find or create teams for exciting hackathons.</p>
          </div>
        </Link>

        {/* Flatmate Finder Section */}
        <Link href="/dashboard/flatmates" passHref>
          <div 
            className="p-6 bg-[#FAF3F0] shadow-xl rounded-2xl text-center cursor-pointer hover:shadow-2xl transition-all border border-gray-300 hover:bg-[#FFB6C1]">
            <h2 className="text-xl font-semibold mb-2 text-[#4A154B]">Flatmate Finder</h2>
            <p className="text-gray-700">Search for compatible flatmates based on interests.</p>
          </div>
        </Link>

        {/* Events Management Section */}
        <Link href="/events" passHref>
          <div 
            className="p-6 bg-[#FAF3F0] shadow-xl rounded-2xl text-center cursor-pointer hover:shadow-2xl transition-all border border-gray-300 hover:bg-[#87CEFA]">
            <h2 className="text-xl font-semibold mb-2 text-[#4A154B]">Events</h2>
            <p className="text-gray-700">Join and manage college events with RSVP & reminders.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
