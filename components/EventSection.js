"use client"
import React from 'react'
import { useState } from 'react'



const eventsSet1 = [
    {
      id: 1,
      text: "Alumni Talkshow details",
      imgSrc: '/Alumni.jpg',
    },
    {
      id: 2,
      text: 'Invitee details',
      imgSrc: '/Invited.jpg',
    },
    {
      id: 3,
      text: 'Placement talks details',
      imgSrc: '/placement.jpg',
    },
  ];

  const eventsSet2 = [
    {
      id: 4,
      text: 'PCB Workshop details',
      imgSrc: '/PCB.jpg',
    },
    {
      id: 5,
      text: 'Freshers orientation',
      imgSrc: '/Exordium.jpg',
    },
    {
      id: 6,
      text: 'Tech Talks',
      imgSrc: '/tech.jpg',
    },
  ];
export const EventSection = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const events = showMore ? eventsSet2 : eventsSet1;
  return (
    <>
    <div className="flex-col md:flex-row items-center justify-center bg-black text-white p-6">
     <div className="flex bg-black text-white p-6">
      <div className="flex items-center justify-center text-lg">
        <p>{activeEvent ? activeEvent.text : 'Hover over the events to see details'}</p>
      </div>
      <div className="flex gap-4">
        {events.map((event) => (
          <div
          key={event.id}
            className={`w-48 cursor-pointer transform transition-opacity duration-300 ${
              activeEvent && activeEvent.id === event.id ? 'opacity-100' : 'opacity-50'
            }`}
            onMouseEnter={() => setActiveEvent(event)}
            onMouseLeave={() => setActiveEvent(null)}
          >
            <img
              src={event.imgSrc}
              alt={`Event ${event.id}`}
              className="w-full rounded-lg"
              />
          </div>
        ))}
      </div>
      
    </div>
    <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show Previous' : 'Know More'}
      </button>
    </div>
        </>
  
  )
}
