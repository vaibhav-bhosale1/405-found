# Community Building and Event Management Platform

## Overview
The **Community Building and Event Management Platform** is a web-based application designed to help college students connect, collaborate, and engage with their peers. This platform enables students to find hackathon teammates, discover flatmates, and participate in campus events efficiently. The system fosters community interaction through seamless group formation, event organization, and real-time communication.

## Features
### Community Platform
- **Group Discovery & Formation**
  - Explore, create, and join groups for hackathons, shared interests, or finding flatmates.
- **Event Management**
  - Organize and participate in college events.
  - Features include RSVPs, reminders, and real-time updates.
- **Communication Tools**
  - Post announcements and engage with group members via chat or forums.
  
### Event Organizer Tools
- **Logistics Management**
  - Tools to streamline event organization.
- **Attendance Tracking**
  - Manage participant lists and track attendance.
- **Feedback Collection**
  - Gather feedback for continuous event improvement.

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT-based authentication
- **Real-time Communication**: WebSockets for chat and notifications
- **AI Enhancements**: AI-driven recommendations for group and event suggestions

## Installation & Setup
```sh
# Clone the repository
git clone https://github.com/your-repo/community-platform.git
cd community-platform

# Install dependencies
npm install

# Configure environment variables
# Create a .env file and add necessary credentials (MongoDB URI, JWT secret, etc.)

# Start the development server
npm run dev
