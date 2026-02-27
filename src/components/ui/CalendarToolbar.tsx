import React from 'react';
import { Layers3 } from 'lucide-react';

type ViewMode = 'week' | 'month' | '6w';
type TeamMode = 'me' | 'team';

interface CalendarToolbarProps {
  view?: ViewMode;
  team?: TeamMode;
}

export const CalendarToolbar: React.FC<CalendarToolbarProps> = ({
  view = 'week',
  team = 'me',
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

      {/* Layers icon */}
      <button
        className="flex items-center justify-center bg-gray-100 rounded-full"
        style={{ width: 32, height: 32 }}
      >
        <Layers3 size={15} color="#6b7280" strokeWidth={1.8} />
      </button>
    </div>
  );
};
