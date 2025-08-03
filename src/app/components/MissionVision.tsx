import React from 'react';

export default function MissionVision() {
  return (
    <div className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 py-10">
      {/* Vision Card */}
      <div className="flex-1 bg-green-50 rounded-2xl shadow-md p-8 flex flex-col justify-center items-start min-w-[220px] max-w-xl mx-auto">
        <h3 className="text-2xl font-extrabold text-green-900 mb-3">Vision</h3>
        <p className="text-gray-700 text-lg leading-relaxed">Better lives for every agri citizen. We uplift every farmer, vendor, and buyer through opportunity and technology.</p>
      </div>
      {/* Mission Card */}
      <div className="flex-1 bg-green-50 rounded-2xl shadow-md p-8 flex flex-col justify-center items-start min-w-[220px] max-w-xl mx-auto">
        <h3 className="text-2xl font-extrabold text-green-900 mb-3">Mission</h3>
        <p className="text-gray-700 text-lg leading-relaxed">Build the most trusted, efficient, and inclusive agri trade network. We connect and empower agri citizens with a platform they can trust.</p>
      </div>
    </div>
  );
} 