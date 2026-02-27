import React from 'react';

type ShiftType = 'work' | 'ot' | 'pto' | 'sick' | 'callout' | 'calloff' | 'personal' | 'open' | 'ai' | 'training' | 'certexpiring' | 'conflict';

interface EventPillProps {
  type: ShiftType;
  label: string;
  time?: string;
  compact?: boolean;
}

const TYPE_STYLES: Record<ShiftType, { bg: string; text: string }> = {
  work:        { bg: '#3B5BDB', text: '#fff' },
  ot:          { bg: '#7C3AED', text: '#fff' },
  pto:         { bg: '#059669', text: '#fff' },
  sick:        { bg: '#F59E0B', text: '#fff' },
  callout:     { bg: '#EF4444', text: '#fff' },
  calloff:     { bg: '#6B7280', text: '#fff' },
  personal:    { bg: '#06B6D4', text: '#fff' },
  open:        { bg: '#10B981', text: '#fff' },
  ai:          { bg: '#8B5CF6', text: '#fff' },
  training:    { bg: '#EA580C', text: '#fff' },
  certexpiring:{ bg: '#DC2626', text: '#fff' },
  conflict:    { bg: '#BE185D', text: '#fff' },
};

export const EventPill: React.FC<EventPillProps> = ({ type, label, time, compact = false }) => {
  const { bg, text } = TYPE_STYLES[type];

  if (compact) {
    return (
      <div style={{ background: bg, borderRadius: 3, padding: '1px 4px', width: '100%' }}>
        <p style={{ color: text, fontSize: 8, fontWeight: 600, lineHeight: 1.3, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
          {label}
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: bg, borderRadius: 5, padding: '3px 6px', width: '100%' }}>
      <p style={{ color: text, fontSize: 9, fontWeight: 700, lineHeight: 1.3, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
        {label}
      </p>
      {time && (
        <p style={{ color: text, fontSize: 8, opacity: 0.8, lineHeight: 1.3 }}>{time}</p>
      )}
    </div>
  );
};
