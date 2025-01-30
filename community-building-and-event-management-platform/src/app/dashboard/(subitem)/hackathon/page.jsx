"use client";
import Link from "next/link";

const Hackathons = () => {
  const hackathons = [
    {
      id: 1,
      name: "AI Innovation Challenge",
      date: "March 15, 2025",
      location: "Online",
      description: "Build AI-powered solutions to real-world problems.",
    },
    {
      id: 2,
      name: "Cybersecurity Hackfest",
      date: "April 5, 2025",
      location: "San Francisco, CA",
      description: "Test your hacking skills in this cybersecurity challenge!",
    },
    {
      id: 3,
      name: "Blockchain Revolution Hackathon",
      date: "May 10, 2025",
      location: "New York, NY",
      description: "Create decentralized applications and innovative blockchain solutions.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#4A154B] to-[#F5F5F5] p-6">
      <h1 className="text-3xl md:text-5xl font-bold text-[#4A154B] mb-8 text-center">Explore Hackathons</h1>
      <p className="text-lg text-gray-800 mb-10 text-center max-w-2xl">
        Apply individually or find team members with matching skills to participate in upcoming hackathons.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {hackathons.map((hackathon) => (
          <div 
            key={hackathon.id} 
            className="p-6 bg-[#FAF3F0] shadow-xl rounded-2xl text-center hover:shadow-2xl transition-all border border-gray-300 hover:bg-[#E0B0FF]">
            <h2 className="text-2xl font-semibold mb-2 text-[#4A154B]">{hackathon.name}</h2>
            <p className="text-gray-700">{hackathon.date} | {hackathon.location}</p>
            <p className="text-gray-600 mt-2">{hackathon.description}</p>
            <div className="mt-4 flex justify-center gap-4">
              <Link href={`/hackathons/apply/${hackathon.id}`} passHref>
                <button className="bg-[#4A154B] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#320A35] transition-all">
                  Apply Individually
                </button>
              </Link>
              <Link href={`/hackathons/team/${hackathon.id}`} passHref>
                <button className="bg-[#FFB6C1] text-[#4A154B] px-4 py-2 rounded-lg shadow-md hover:bg-[#FF8095] transition-all">
                  Find Team
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
