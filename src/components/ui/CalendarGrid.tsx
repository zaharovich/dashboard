import React from 'react';
import { Sparkles } from 'lucide-react';
import { EventPill } from './EventPill';

/** Days of the current month that AI suggests (e.g. for scheduling) — highlighted like Google calendar */
const AI_SUGGESTED_DAYS = new Set([19, 22, 25]);

interface CalendarGridProps {
  selectedDay?: number | null;
  highlightToday?: boolean;
  compact?: boolean;
  /** When true, grid fills available height and week rows expand equally */
  fillHeight?: boolean;
  /** Days to highlight as AI-suggested (default: demo set). Pass [] to hide. */
  aiSuggestedDays?: number[];
  /** Called when user taps an AI-suggested day to see AI suggestions */
  onAiDayClick?: (day: number) => void;
}

const DAYS_HEADER = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

type EventType = 'work' | 'ot' | 'pto' | 'sick' | 'callout' | 'calloff' | 'personal' | 'open' | 'ai' | 'training' | 'certexpiring' | 'conflict' | 'teams';

const CALENDAR_DATA: Record<number, Array<{ type: EventType; label: string }>> = {
  2:  [{ type: 'work',         label: 'Binns 7a' }, { type: 'work',        label: 'Brady 7a' }],
  3:  [{ type: 'work',         label: 'Binns 7a' }, { type: 'ot',          label: 'Brady OT' }],
  4:  [{ type: 'work',         label: 'Binns 7a' }, { type: 'certexpiring',label: 'BLS Exp.' }, { type: 'teams', label: 'Standup' }],
  9:  [{ type: 'work',         label: 'Binns 7a' }, { type: 'personal',    label: 'Dr Appt' }, { type: 'teams', label: 'Team Sync' }],
  10: [{ type: 'pto',          label: 'PTO' }],
  11: [{ type: 'training',     label: 'Training' }],
  13: [{ type: 'conflict',     label: 'Conflict!' }, { type: 'work',       label: 'Binns 7a' }],
  16: [{ type: 'work',         label: 'Binns 7a' }, { type: 'work',        label: 'Brady 7a' }],
  17: [{ type: 'sick',         label: 'Sick' }],
  18: [{ type: 'teams',        label: 'Huddle' }],
  23: [{ type: 'work',         label: 'Binns 7a' }],
  24: [{ type: 'calloff',      label: 'Call off' }],
  26: [{ type: 'certexpiring', label: 'ACLS Exp.' }],
  30: [{ type: 'work',         label: 'Binns 7a' }],
};

const WEEKS = [
  [31, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 1, 2, 3, 4],
];

const PREV_MONTH = new Set([31]);
const NEXT_MONTH = new Set([1, 2, 3, 4]);

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  selectedDay = null,
  highlightToday = true,
  compact = false,
  fillHeight = false,
  aiSuggestedDays,
  onAiDayClick,
}) => {
  const today = 18;
  const aiDays = aiSuggestedDays !== undefined ? new Set(aiSuggestedDays) : AI_SUGGESTED_DAYS;
  // In compact mode show only the week containing the selected day (or today)
  const pivotDay = selectedDay ?? today;
  const weeks = compact
    ? WEEKS.filter((w) => w.includes(pivotDay))
    : WEEKS;

  const rootStyle: React.CSSProperties = fillHeight && !compact
    ? { padding: '4px 8px 0', height: '100%', minHeight: 0, display: 'flex', flexDirection: 'column' }
    : { padding: compact ? '4px 8px 6px' : '4px 8px 0' };

  const weeksStyle: React.CSSProperties = fillHeight && !compact
    ? { flex: 1, display: 'flex', flexDirection: 'column', gap: 2, minHeight: 0 }
    : { display: 'flex', flexDirection: 'column', gap: compact ? 1 : 2 };

  const weekRowStyle: React.CSSProperties = fillHeight && !compact
    ? { flex: 1, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1, minHeight: 0 }
    : { display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1 };

  const cellMinHeight = compact ? 32 : fillHeight ? undefined : 44;

  return (
    <div style={rootStyle}>
      {/* Month header */}
      <div className="flex items-center justify-between flex-shrink-0" style={{ marginBottom: 4 }}>
        <button style={{ fontSize: 12, color: '#9ca3af', padding: '0 4px' }}>‹</button>
        <span style={{ fontSize: compact ? 11 : 12, fontWeight: 600, color: '#374151' }}>
          September 2026
        </span>
        <button style={{ fontSize: 12, color: '#9ca3af', padding: '0 4px' }}>›</button>
      </div>

      {/* Days header */}
      <div className="grid grid-cols-7 flex-shrink-0" style={{ marginBottom: 3 }}>
        {DAYS_HEADER.map((d, i) => (
          <div
            key={i}
            className="text-center"
            style={{ fontSize: 9, fontWeight: 600, color: '#9ca3af', paddingTop: 2, paddingBottom: 2 }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Weeks */}
      <div style={weeksStyle}>
        {weeks.map((week, wi) => (
          <div key={wi} style={weekRowStyle}>
            {week.map((day, di) => {
              const isOtherMonth =
                (PREV_MONTH.has(day) && wi === 0) ||
                (NEXT_MONTH.has(day) && (compact ? false : wi === 4));
              const isToday = day === today && !isOtherMonth && highlightToday;
              const isSelected = day === selectedDay && !isOtherMonth;
              const isAiSuggested = !isOtherMonth && aiDays.has(day);
              const events = (!isOtherMonth && CALENDAR_DATA[day]) || [];

              const cellContent = (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, minHeight: 0 }}>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 600,
                        width: 16,
                        height: 16,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 8,
                        flexShrink: 0,
                        marginBottom: isAiSuggested && !compact ? 4 : 2,
                        background: isToday ? '#3B5BDB' : 'transparent',
                        color: isToday ? 'white' : isOtherMonth ? '#d1d5db' : '#374151',
                      }}
                    >
                      {day}
                    </span>
                    {isAiSuggested && !compact ? (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                        <Sparkles size={20} color="#8B5CF6" strokeWidth={2} style={{ flexShrink: 0 }} />
                      </div>
                    ) : !compact ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1, minHeight: 0, overflow: 'hidden', width: '100%' }}>
                        {events.slice(0, 2).map((ev, ei) => (
                          <EventPill key={ei} type={ev.type} label={ev.label} compact />
                        ))}
                        {events.length > 2 && (
                          <span style={{ fontSize: 7, color: '#9ca3af' }}>+{events.length - 2}</span>
                        )}
                      </div>
                    ) : null}
                  </div>
                  {compact && events.length > 0 && !isAiSuggested && (
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: 2,
                        background: '#3B5BDB',
                        margin: '0 auto',
                      }}
                    />
                  )}
                </>
              );

              const cellStyle: React.CSSProperties = {
                minHeight: cellMinHeight,
                borderRadius: 4,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                background: isSelected
                  ? '#eff3ff'
                  : isToday
                  ? '#eff3ff'
                  : isAiSuggested
                  ? 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)'
                  : 'transparent',
                outline: isSelected
                  ? '1.5px solid #3B5BDB'
                  : isAiSuggested
                  ? '1.5px dotted #8B5CF6'
                  : 'none',
                boxShadow: isAiSuggested ? 'inset 0 0 0 1px rgba(139,92,246,0.25)' : undefined,
              };

              if (isAiSuggested && onAiDayClick && !compact) {
                return (
                  <button
                    key={di}
                    type="button"
                    onClick={() => onAiDayClick(day)}
                    style={{ ...cellStyle, cursor: 'pointer', border: 'none', textAlign: 'center' }}
                  >
                    {cellContent}
                  </button>
                );
              }

              return (
                <div key={di} style={cellStyle}>
                  {cellContent}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
