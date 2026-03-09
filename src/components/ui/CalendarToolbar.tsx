import React from 'react';
import { Layers3, Sparkles } from 'lucide-react';

type ViewMode = 'week' | 'month' | '6w';
type TeamMode = 'me' | 'team';

interface CalendarToolbarProps {
  view?: ViewMode;
  team?: TeamMode;
  /** When true, AI-suggested days are highlighted on the calendar */
  aiMode?: boolean;
}

export const CalendarToolbar: React.FC<CalendarToolbarProps> = ({
  view = 'week',
  team = 'me',
  aiMode = true,
}) => {
  return (
    <div
      className="flex items-center justify-between bg-white border-b flex-shrink-0"
      style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 6, paddingBottom: 8, borderColor: '#f1f1f4' }}
    >
      {/* Me / Team toggle */}
      <div style={{ background: '#f1f3f9', borderRadius: 10, padding: 3, display: 'flex', gap: 2 }}>
        {(['me', 'team'] as TeamMode[]).map((t) => (
          <button
            key={t}
            style={{
              paddingLeft: 12, paddingRight: 12, paddingTop: 5, paddingBottom: 5,
              borderRadius: 8, fontSize: 11, fontWeight: 700,
              background: team === t ? '#fff' : 'transparent',
              color: team === t ? '#1e2d5a' : '#9ca3af',
              boxShadow: team === t ? '0 1px 3px rgba(0,0,0,0.10)' : 'none',
            }}
          >
            {t === 'me' ? 'Me' : 'Team'}
          </button>
        ))}
      </div>

      {/* View selector */}
      <div style={{ background: '#f1f3f9', borderRadius: 10, padding: 3, display: 'flex', gap: 2 }}>
        {([['week', 'Week'], ['month', 'Month'], ['6w', '6W']] as [ViewMode, string][]).map(([v, label]) => (
          <button
            key={v}
            style={{
              paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5,
              borderRadius: 8, fontSize: 11, fontWeight: 700,
              background: view === v ? '#3B5BDB' : 'transparent',
              color: view === v ? '#fff' : '#9ca3af',
              boxShadow: view === v ? '0 1px 4px rgba(59,91,219,0.35)' : 'none',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* AI Mode + Layers */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <button
          className="flex items-center gap-1.5 rounded-full border px-2.5 py-1.5"
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: aiMode ? '#6D28D9' : '#6b7280',
            background: aiMode ? 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)' : '#f9fafb',
            borderColor: aiMode ? 'rgba(139,92,246,0.4)' : '#e5e7eb',
            borderWidth: 1.5,
          }}
        >
          <Sparkles size={12} color={aiMode ? '#8B5CF6' : '#9ca3af'} strokeWidth={2} />
          AI Mode
        </button>
        <button
          className="flex items-center justify-center bg-gray-100 rounded-full"
          style={{ width: 32, height: 32 }}
        >
          <Layers3 size={15} color="#6b7280" strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
};
