import React from 'react';

interface AppNavbarProps {
  showBadge?: boolean;
}

export const AppNavbar: React.FC<AppNavbarProps> = () => {
  return (
    <div
      className="flex items-center justify-between bg-white flex-shrink-0"
      style={{ paddingLeft: 20, paddingRight: 16, paddingTop: 10, paddingBottom: 10 }}
    >
      <h1 style={{ fontSize: 20, fontWeight: 800, color: '#1e2d5a', letterSpacing: -0.5, margin: 0, lineHeight: 1 }}>
        My Calendar
      </h1>

      <div
        className="rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600"
        style={{ width: 34, height: 34, border: '2px solid #e5e7eb' }}
      >
        <span style={{ color: 'white', fontSize: 11, fontWeight: 700 }}>JS</span>
      </div>
    </div>
  );
};
