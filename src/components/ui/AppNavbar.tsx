import React from 'react';
import { Bell } from 'lucide-react';

interface AppNavbarProps {
  showBadge?: boolean;
}

export const AppNavbar: React.FC<AppNavbarProps> = ({ showBadge = false }) => {
  return (
    <div
      className="flex items-center justify-between bg-white flex-shrink-0"
      style={{ paddingLeft: 20, paddingRight: 16, paddingTop: 10, paddingBottom: 10 }}
    >
      <h1 style={{ fontSize: 20, fontWeight: 800, color: '#1e2d5a', letterSpacing: -0.5, margin: 0, lineHeight: 1 }}>
        My Calendar
      </h1>

      <div className="flex items-center" style={{ gap: 10 }}>
        {/* Bell */}
        <button
          className="relative flex items-center justify-center bg-gray-100 rounded-full"
          style={{ width: 34, height: 34 }}
        >
          <Bell size={16} color="#374151" strokeWidth={1.8} />
          {showBadge && (
            <span
              className="absolute flex items-center justify-center bg-red-500 text-white font-bold rounded-full border-2 border-white"
              style={{ top: -3, right: -3, width: 15, height: 15, fontSize: 7 }}
            >
              3
            </span>
          )}
        </button>

        {/* Avatar */}
        <div
          className="rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600"
          style={{ width: 34, height: 34, border: '2px solid #e5e7eb' }}
        >
          <span style={{ color: 'white', fontSize: 11, fontWeight: 700 }}>SV</span>
        </div>
      </div>
    </div>
  );
};
