// src/components/dashboard/Calendar.jsx
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Calendar = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();
  const events = [
    { date: 15, company: 'Google', type: 'drive' },
    { date: 18, company: 'Microsoft', type: 'interviews' },
    { date: 20, company: 'Amazon', type: 'results' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">April 2024</h3>
        <div className="flex space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
        {Array.from({ length: 31 }, (_, i) => {
          const date = i + 1;
          const event = events.find(e => e.date === date);
          return (
            <div
              key={date}
              className={`text-center p-2 rounded-lg cursor-pointer hover:bg-gray-50
                ${event ? 'bg-blue-50 text-blue-600' : ''}
                ${date === currentDate.getDate() ? 'border-2 border-blue-600' : ''}`}
            >
              <span className="text-sm">{date}</span>
              {event && (
                <div className="w-1 h-1 bg-blue-600 rounded-full mx-auto mt-1" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 space-y-2">
        {events.map((event, idx) => (
          <div key={idx} className={`flex items-center p-2 ${
            event.type === 'drive' ? 'bg-blue-50' : 
            event.type === 'interviews' ? 'bg-green-50' : 'bg-yellow-50'
          } rounded`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              event.type === 'drive' ? 'bg-blue-600' :
              event.type === 'interviews' ? 'bg-green-600' : 'bg-yellow-600'
            }`} />
            <span className="text-sm">{event.company} - {event.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;