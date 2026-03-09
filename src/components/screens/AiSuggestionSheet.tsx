import React from 'react';
import { Sparkles, Check, X } from 'lucide-react';

interface AiSuggestionSheetProps {
  day: number;
  monthLabel?: string;
  onClose: () => void;
}

/** Demo suggestions for a given day — in real app would come from API */
const DEMO_SUGGESTIONS: Record<number, string[]> = {
  19: [
    'Pick up shift 7:00 AM – 7:00 PM · Floor 2',
    'Fits your availability and preferred unit',
    'Incentive +$25/hr for this shift',
  ],
  22: [
    'Swap suggested: move Sep 22 to Sep 24',
    'Better balance with your current week',
    'No conflict with Team Sync on 23rd',
  ],
  25: [
    'Open shift 7:00 PM – 7:00 AM · Floor 2',
    'Night shift · matches your past picks',
    'Would complete your weekend coverage',
  ],
};

const defaultSuggestions = [
  'View open shifts for this day',
  'AI can suggest swaps and pick-ups',
  'Tap "Use suggestion" to apply',
];

export const AiSuggestionSheet: React.FC<AiSuggestionSheetProps> = ({
  day,
  monthLabel = 'September 2026',
  onClose,
}) => {
  const lines = DEMO_SUGGESTIONS[day] ?? defaultSuggestions;

  return (
    <div
      className="absolute inset-0 bg-white"
      style={{ zIndex: 30, display: 'flex', flexDirection: 'column' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between flex-shrink-0"
        style={{
          padding: '14px 16px',
          borderBottom: '1px solid #f1f1f4',
          background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
        }}
      >
        <div className="flex items-center gap-2">
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 12,
              background: 'rgba(139,92,246,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Sparkles size={18} color="#8B5CF6" strokeWidth={2} />
          </div>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, color: '#8B5CF6' }}>AI SUGGESTS</p>
            <p style={{ fontSize: 16, fontWeight: 800, color: '#1e2d5a' }}>
              {monthLabel} · Day {day}
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex items-center justify-center rounded-full bg-white border border-gray-200"
          style={{ width: 36, height: 36 }}
        >
          <X size={18} color="#6b7280" strokeWidth={2} />
        </button>
      </div>

      {/* Suggestions list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: '#9ca3af', marginBottom: 12 }}>
          What AI recommends for this day
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {lines.map((text, i) => (
            <li
              key={i}
              className="flex items-start gap-3"
              style={{
                padding: '12px 14px',
                background: '#f9fafb',
                borderRadius: 12,
                border: '1px solid #f1f1f4',
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  background: '#ede9fe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Check size={10} color="#8B5CF6" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: 12, color: '#374151', lineHeight: 1.4 }}>{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div style={{ padding: '14px 16px', borderTop: '1px solid #f1f1f4', flexShrink: 0 }}>
        <button
          className="w-full rounded-xl font-bold text-white flex items-center justify-center gap-2"
          style={{
            paddingTop: 12,
            paddingBottom: 12,
            fontSize: 13,
            background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
            boxShadow: '0 2px 8px rgba(139,92,246,0.35)',
          }}
        >
          <Sparkles size={16} strokeWidth={2} />
          Use suggestion
        </button>
        <button
          onClick={onClose}
          className="w-full rounded-xl font-semibold mt-2"
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            fontSize: 12,
            background: '#f3f4f6',
            color: '#374151',
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
