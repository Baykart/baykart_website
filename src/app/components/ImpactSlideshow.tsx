import React, { useState, useEffect, useRef } from 'react';

// Simple SVG icons for each stat
const icons = {
  farm: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#F3EDE7"/><path d="M10 28v-4a2 2 0 012-2h16a2 2 0 012 2v4" stroke="#7A5230" strokeWidth="2"/><rect x="14" y="18" width="12" height="6" rx="2" fill="#41A451"/><rect x="17" y="14" width="6" height="4" rx="1" fill="#7A5230"/></svg>
  ),
  food: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#F3EDE7"/><ellipse cx="20" cy="25" rx="10" ry="5" fill="#41A451"/><ellipse cx="20" cy="23" rx="7" ry="3" fill="#7A5230"/></svg>
  ),
  money: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#F3EDE7"/><rect x="12" y="16" width="16" height="8" rx="2" fill="#7A5230"/><text x="20" y="23" textAnchor="middle" fontSize="1.2rem" fontWeight="bold" fill="#fff">$</text></svg>
  ),
  women: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#F3EDE7"/><circle cx="20" cy="17" r="6" stroke="#41A451" strokeWidth="2"/><line x1="20" y1="23" x2="20" y2="30" stroke="#41A451" strokeWidth="2"/><line x1="17" y1="27" x2="23" y2="27" stroke="#41A451" strokeWidth="2"/></svg>
  ),
};

const slides = [
  {
    icon: icons.farm,
    donut: (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="60" fill="none" stroke="#E5E7EB" strokeWidth="18" />
        <circle cx="70" cy="70" r="60" fill="none" stroke="#7A5230" strokeWidth="18" strokeDasharray="376.99" strokeDashoffset="75.4" strokeLinecap="round" transform="rotate(-90 70 70)" />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="2.2rem" fontWeight="bold" fill="#7A5230">80%</text>
      </svg>
    ),
    headline: '80% of African farms are smallholdings',
    caption: 'Most African farms are run by smallholder families.'
  },
  {
    icon: icons.food,
    donut: (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="60" fill="none" stroke="#E5E7EB" strokeWidth="18" />
        <circle cx="70" cy="70" r="60" fill="none" stroke="#41A451" strokeWidth="18" strokeDasharray="376.99" strokeDashoffset="37.7" strokeLinecap="round" transform="rotate(-90 70 70)" />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="2.2rem" fontWeight="bold" fill="#41A451">90%</text>
      </svg>
    ),
    headline: 'Up to 90% of food is produced by smallholders',
    caption: 'In some countries, smallholders produce nearly all food.'
  },
  {
    icon: icons.money,
    donut: (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="60" fill="none" stroke="#E5E7EB" strokeWidth="18" />
        <circle cx="70" cy="70" r="60" fill="none" stroke="#7A5230" strokeWidth="18" strokeDasharray="376.99" strokeDashoffset="339.3" strokeLinecap="round" transform="rotate(-90 70 70)" />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="2.2rem" fontWeight="bold" fill="#7A5230">10%</text>
      </svg>
    ),
    headline: 'Only 10% of Gambian farmers have access to formal credit',
    caption: 'Access to finance is a key barrier to growth.'
  },
  {
    icon: icons.women,
    donut: (
      <svg width="140" height="140" viewBox="0 0 140 140">
        <circle cx="70" cy="70" r="60" fill="none" stroke="#E5E7EB" strokeWidth="18" />
        <circle cx="70" cy="70" r="60" fill="none" stroke="#41A451" strokeWidth="18" strokeDasharray="376.99" strokeDashoffset="188.5" strokeLinecap="round" transform="rotate(-90 70 70)" />
        <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="2.2rem" fontWeight="bold" fill="#41A451">50%+</text>
      </svg>
    ),
    headline: 'Women make up over 50% of agri labor in The Gambia',
    caption: 'Women are the backbone of Gambian agriculture.'
  },
];

export default function ImpactSlideshow() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-xl border border-gray-200 p-10 min-h-[420px] max-w-lg w-full">
        <div className="mb-2">{slides[current].icon}</div>
        <div className="mb-6">{slides[current].donut}</div>
        <div className="font-extrabold text-2xl text-[#7A5230] text-center mb-3 leading-tight">{slides[current].headline}</div>
        <div className="text-gray-700 text-center text-lg font-medium">{slides[current].caption}</div>
      </div>
      <div className="flex gap-3 mt-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${idx === current ? 'bg-[#41A451] border-[#41A451] scale-110' : 'bg-gray-200 border-gray-300'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 