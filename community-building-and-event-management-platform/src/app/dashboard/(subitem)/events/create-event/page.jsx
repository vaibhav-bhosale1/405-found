'use client';
import { useState } from 'react';

export default function CreateEvent() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: {
      address: '',
      city: '',
      country: ''
    },
    category: '',
    organizer: {
      name: '',
      email: ''
    }
  });

  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state to handle loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when form is submitted

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error creating event');
      }

      setMessage('Event created successfully!');
      setFormData({
        title: '',
        description: '',
        date: '',
        location: { address: '', city: '', country: '' },
        category: '',
        organizer: { name: '', email: '' }
      });

    } catch (error) {
      setMessage(error.message);
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Set loading to false after form submission is complete
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gradient-to-r from-blue-50 via-indigo-100 to-indigo-200 shadow-lg rounded-xl mt-10 relative">
      
      {/* Full-screen loader */}
      {isLoading && (
        <div className="absolute inset-0 bg-[#030303] bg-opacity-50 flex justify-center items-center z-50">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
            <div className="text-white text-lg font-semibold">Submitting...</div>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center tracking-tight">Create a New Event</h1>
      
      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md shadow-md">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 hover:border-blue-500 transition duration-200"
          />
        </div>

        <div>
          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 hover:border-blue-500 transition duration-200"
          />
        </div>

        <div>
          <input
            type="datetime-local"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 hover:border-blue-500 transition duration-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            name="location.address"
            placeholder="Address"
            value={formData.location.address}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 hover:border-blue-500 transition duration-200"
          />
          <input
            type="text"
            name="location.city"
            placeholder="City"
            value={formData.location.city}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 hover:border-blue-500 transition duration-200"
          />
          <input
            type="text"
            name="location.country"
            placeholder="Country"
            value={formData.location.country}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 hover:border-blue-500 transition duration-200"
          />
        </div>

        <div>
          <input
            type="text"
            name="category"
            placeholder="Event Category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 hover:border-blue-500 transition duration-200"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="organizer.name"
            placeholder="Organizer Name"
            value={formData.organizer.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 hover:border-blue-500 transition duration-200"
          />
          <input
            type="email"
            name="organizer.email"
            placeholder="Organizer Email"
            value={formData.organizer.email}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500 hover:border-blue-500 transition duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}
