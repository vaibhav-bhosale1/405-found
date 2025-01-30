// src/app/api/events/route.js
import { NextResponse } from 'next/server';
import connectDB from '../../../lib/mongodb';
import Event from '../../../models/Event';

export async function POST(request) {
  try {
    // Ensure connection is established first
    await connectDB();
    
    const data = await request.json();
    console.log("Received data:", data);
    
    // Create new event after connection is established
    const event = await Event.create({
      title: data.title,
      description: data.description,
      date: data.date,
      location: {
        address: data.location.address,
        city: data.location.city,
        country: data.location.country
      },
      category: data.category,
      organizer: {
        name: data.organizer.name,
        email: data.organizer.email
      }
    });

    return NextResponse.json({ 
      message: "Event created successfully", 
      event 
    }, { status: 201 });

  } catch (error) {
    console.error("Error creating event:", error);
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 });
  }
}