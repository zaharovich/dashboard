import React from 'react';

interface PhoneFrameProps {
  label: string;
  children: React.ReactNode;
}

// iPhone 12 logical: 390 × 844
// Scale factor: 375 / 390 = 0.962
const W = 375;
const H = Math.round(W * (844 / 390)); // 812

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ label, children }) => {
  return (
    <div className="flex flex-col items-center gap-5 flex-shrink-0">
      <span className="text-white/40 text-[10px] font-medium tracking-widest uppercase">
        {label}
      </span>

      {/* Phone shell */}
      <div className="relative flex-shrink-0" style={{ width: W, height: H }}>

        {/* Outer frame — anodized aluminum look */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: 50,
            background: 'linear-gradient(145deg, #4a4a4c 0%, #1c1c1e 40%, #2a2a2c 70%, #3a3a3c 100%)',
            boxShadow: [
              '0 50px 100px rgba(0,0,0,0.75)',
              '0 20px 40px rgba(0,0,0,0.5)',
              'inset 0 0 0 1px rgba(255,255,255,0.12)',
              'inset 0 1px 3px rgba(255,255,255,0.18)',
            ].join(', '),
          }}
        />

        {/* Screen glass */}
        <div
          className="absolute flex flex-col overflow-hidden bg-white"
          style={{
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
            borderRadius: 42,
          }}
        >
          {/* Status bar */}
          <div
            className="flex-shrink-0 flex items-center bg-white"
            style={{
              height: 50,
              paddingLeft: 24,
              paddingRight: 18,
              paddingTop: 14,
            }}
          >
            <span style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>9:41</span>

            {/* Dynamic Island */}
            <div
              style={{
                position: 'absolute',
                top: 12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 110,
                height: 32,
                background: '#000',
                borderRadius: 22,
                zIndex: 10,
              }}
            />

            {/* Right status icons */}
            <div className="ml-auto flex items-center gap-1.5" style={{ paddingTop: 0 }}>
              <svg width="15" height="11" viewBox="0 0 17 12" fill="#111827">
                <rect x="0" y="8" width="3" height="4" rx="0.5"/>
                <rect x="4.5" y="5.5" width="3" height="6.5" rx="0.5"/>
                <rect x="9" y="3" width="3" height="9" rx="0.5"/>
                <rect x="13.5" y="0" width="3" height="12" rx="0.5"/>
              </svg>
              <svg width="15" height="11" viewBox="0 0 22 16" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round">
                <path d="M11 14h0"/>
                <path d="M7 10.5A6 6 0 0 1 15 10.5"/>
                <path d="M3.5 7A11 11 0 0 1 18.5 7"/>
              </svg>
              <div className="flex items-center gap-0.5">
                <div style={{ width: 24, height: 12, border: '1.5px solid #111827', borderRadius: 3.5, padding: 2 }}>
                  <div style={{ width: '78%', height: '100%', background: '#111827', borderRadius: 1.5 }} />
                </div>
                <div style={{ width: 2, height: 6, background: '#111827', borderRadius: '0 1px 1px 0', opacity: 0.6 }} />
              </div>
            </div>
          </div>

          {/* Screen content */}
          <div className="flex-1 relative overflow-hidden">
            {children}
          </div>

          {/* Home indicator */}
          <div
            className="flex-shrink-0 flex items-center justify-center bg-white"
            style={{ height: 26 }}
          >
            <div style={{ width: 120, height: 5, background: '#000', borderRadius: 3, opacity: 0.12 }} />
          </div>
        </div>

        {/* Physical buttons — left side */}
        <div style={{ position: 'absolute', left: -4, top: 100, width: 4, height: 32, background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -4, top: 150, width: 4, height: 60, background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />
        <div style={{ position: 'absolute', left: -4, top: 222, width: 4, height: 60, background: '#3a3a3c', borderRadius: '2px 0 0 2px' }} />

        {/* Power button — right side */}
        <div style={{ position: 'absolute', right: -4, top: 160, width: 4, height: 80, background: '#3a3a3c', borderRadius: '0 2px 2px 0' }} />
      </div>
    </div>
  );
};
