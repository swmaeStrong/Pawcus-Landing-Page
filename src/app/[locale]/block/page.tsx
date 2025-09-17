"use client";

import { useState, useEffect } from 'react';

export default function BlockedPage() {

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#5fa3d9] via-[#3f72af] to-[#7ab8e8] flex items-center justify-center p-4">
        <div className="text-center p-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-lg shadow-2xl">

          <h1 className="text-4xl font-bold text-white mb-4">Website Blocked</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            This website is on your blocked list.<br/>Stay focused and keep up the great work!
          </p>

          <div className="bg-white/10 p-6 rounded-xl mb-8 italic text-white/90">
          "Success comes from focus. Concentrate on this moment."
          </div>

          <div className="bg-white/10 p-6 rounded-xl text-left">
            <h3 className="text-lg font-semibold text-yellow-300 mb-4 flex items-center">
              <span className="mr-2">💡</span> Focus Tips
            </h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 font-bold">✓</span>
                <span>Take three deep breaths</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 font-bold">✓</span>
                <span>Review your current task</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 font-bold">✓</span>
                <span>Start with just 5 minutes of focus</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 font-bold">✓</span>
                <span>Put your phone away</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 font-bold">✓</span>
                <span>Clean your workspace</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}