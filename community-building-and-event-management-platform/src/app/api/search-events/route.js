// pages/api/search-events.js
import { NextResponse } from "next/server";
import connectDB from '../../../lib/mongodb';
import Event from '../../../models/Event';

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q") || "";

    const events = await Event.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
        { "location.city": { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
      ],
    }).sort({ date: -1 });

    return NextResponse.json(events, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { q } = req.query;

  try {
    await connectDB();
    const events = await Event.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { 'location.city': { $regex: q, $options: 'i' } },
        { category: { $regex: q, $options: 'i' } }
      ]
    }).sort({ date: -1 });

    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}