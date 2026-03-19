import React from 'react';
import { Sparkles } from 'lucide-react';

interface AppNavbarProps {
  showBadge?: boolean;
  aiMode?: boolean;
}

export const AppNavbar: React.FC<AppNavbarProps> = ({ aiMode = true }) => {
  return (
    <div
      className="flex items-center justify-between bg-white flex-shrink-0"
      style={{ paddingLeft: 20, paddingRight: 16, paddingTop: 10, paddingBottom: 10 }}
    >
      <h1 style={{ fontSize: 20, fontWeight: 800, color: '#1e2d5a', letterSpacing: -0.5, margin: 0, lineHeight: 1 }}>
        My Calendar
      </h1>

      <div className="flex items-center gap-3">
        <button
          className="flex items-center gap-1 rounded-full border"
          style={{
            fontSize: 9,
            fontWeight: 700,
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 5,
            paddingBottom: 5,
            color: aiMode ? '#6D28D9' : '#6b7280',
            background: aiMode ? 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)' : '#f9fafb',
            borderColor: aiMode ? 'rgba(139,92,246,0.4)' : '#e5e7eb',
            borderWidth: 1.5,
          }}
        >
          <Sparkles size={11} color={aiMode ? '#8B5CF6' : '#9ca3af'} strokeWidth={2} />
          AI Mode
        </button>

        <div
          className="rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-600"
          style={{ width: 34, height: 34, border: '2px solid #e5e7eb' }}
        >
          <span style={{ color: 'white', fontSize: 11, fontWeight: 700 }}>JS</span>
        </div>
      </div>
    </div>
  );
};
