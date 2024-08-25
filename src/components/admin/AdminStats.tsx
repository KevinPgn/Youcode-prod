import React from 'react';
import { BtnCourses } from './BtnCourses';

// TODO: Get stats from database

export const AdminStats = () => {
  return (
    <div className="p-6 max-w-[800px] mx-auto space-y-6 mb-10">
        <div className='flex items-center justify-between'>
            <h1 className='text-white text-2xl border-b pb-2 border-gray-800 font-semibold'>Courses</h1>
            <BtnCourses />
        </div>
      <div className="bg-[#1C1917] border border-gray-800 rounded-lg p-5">
        <h2 className="text-white text-sm font-semibold mb-4">Quick stats</h2>
        <ul className="space-y-2 text-gray-300">
          <li className="flex text-sm text-gray-400 items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            0 users
          </li>
          <li className="flex text-sm text-gray-400 items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            0 lessons
          </li>
          <li className="flex text-sm text-gray-400 items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            0 courses
          </li>
        </ul>
      </div>
      
      <div className="bg-[#1C1917] rounded-lg p-4">
        <h2 className="text-white text-sm font-semibold mb-4">Users course activity</h2>
        <div className="h-48 bg-[#25211f] rounded-lg">
          {/* Ici, vous devrez intégrer un composant de graphique */}
          {/* Par exemple, vous pourriez utiliser recharts ou chart.js */}
        </div>
      </div>
    </div>
  );
};