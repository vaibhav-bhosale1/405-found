// app/api/hackathons/route.js
import { NextResponse } from 'next/server';
import cheerio from 'cheerio';

export async function GET() {
  try {
    const response = await fetch('https://devpost.com/hackathons', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    const html = await response.text();
    const $ = cheerio.load(html);
    const hackathons = [];

    $('.hackathon-tile').each((i, element) => {
      const title = $(element).find('.title').text().trim();
      const url = $(element).find('.title a').attr('href');
      const location = $(element).find('.location').text().trim() || 'Online';
      const dates = $(element).find('.submission-period').text().trim();
      
      hackathons.push({
        id: i + 1,
        title,
        url,
        location,
        submission_period_dates: dates
      });
    });

    return NextResponse.json(hackathons);
  } catch (error) {
    console.error('Error fetching hackathons:', error);
    return NextResponse.json({ error: 'Failed to fetch hackathons' }, { status: 500 });
  }
}