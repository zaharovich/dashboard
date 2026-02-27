import React from 'react';
import { BadgeCheck, AlertTriangle, XCircle, Plus, ChevronLeft, Bell } from 'lucide-react';
import { BottomTabBar } from '../ui/BottomTabBar';

type CertStatus = 'valid' | 'expiring' | 'expired';

const CERTS: { name: string; issuer: string; expires: string; status: CertStatus; daysLeft?: number }[] = [
  { name: 'RN License — California',    issuer: 'California BRN',         expires: 'Mar 15, 2026', status: 'valid' },
  { name: 'BLS Certification',          issuer: 'American Heart Assoc.',  expires: 'Oct 11, 2024', status: 'expiring', daysLeft: 14 },
  { name: 'ACLS Certification',         issuer: 'American Heart Assoc.',  expires: 'Jan 22, 2025', status: 'valid' },
  { name: 'Infection Control Training', issuer: 'Internal — HealthTech',  expires: 'Oct 31, 2024', status: 'expiring', daysLeft: 34 },
  { name: 'NIH Stroke Scale',           issuer: 'NIH',                    expires: 'Aug 01, 2024', status: 'expired' },
];

const STATUS_CONFIG: Record<CertStatus, { Icon: typeof BadgeCheck; color: string; bg: string; label: string }> = {
  valid:    { Icon: BadgeCheck,    color: '#12B76A', bg: '#f0fdf4', label: 'Valid' },
  expiring: { Icon: AlertTriangle, color: '#F59E0B', bg: '#fffbeb', label: 'Expiring' },
  expired:  { Icon: XCircle,       color: '#EF4444', bg: '#fef2f2', label: 'Expired' },
};

export const CredentialsScreen: React.FC = () => {
  const expiring = CERTS.filter((c) => c.status === 'expiring').length;
  const expired  = CERTS.filter((c) => c.status === 'expired').length;

  return (
    <div className="flex flex-col bg-gray-50" style={{ height: '100%' }}>

      {/* Header */}
      <div className="bg-white flex-shrink-0" style={{ borderBottom: '1px solid #f1f1f4', padding: '14px 20px 14px' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: 12 }}>
          <div className="flex items-center gap-2">
            <button style={{ color: '#9ca3af' }}>
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1e2d5a' }}>Credentials</h2>
          </div>
          <button className="flex items-center justify-center bg-brand-blue rounded-xl" style={{ width: 32, height: 32, background: '#3B5BDB' }}>
            <Plus size={16} color="white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Status summary */}
        <div className="flex gap-3">
          {[
            { count: CERTS.length, label: 'Total', color: '#374151', bg: '#f3f4f6' },
            { count: expiring,     label: 'Expiring', color: '#d97706', bg: '#fffbeb' },
            { count: expired,      label: 'Expired',  color: '#EF4444', bg: '#fef2f2' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex-1 text-center rounded-xl"
              style={{ padding: '8px 4px', background: s.bg }}
            >
              <p style={{ fontSize: 18, fontWeight: 800, color: s.color }}>{s.count}</p>
              <p style={{ fontSize: 9, color: s.color, opacity: 0.8 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cert list */}
      <div className="flex-1 overflow-y-auto" style={{ padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>

        {/* Warning banner */}
        {(expiring > 0 || expired > 0) && (
          <div style={{ padding: '10px 14px', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
            <AlertTriangle size={16} color="#EF4444" strokeWidth={2} />
            <p style={{ fontSize: 11, color: '#991b1b', fontWeight: 600 }}>
              {expired > 0 && `${expired} credential expired. `}
              {expiring > 0 && `${expiring} expiring soon — action required.`}
            </p>
          </div>
        )}

        {CERTS.map((cert) => {
          const cfg = STATUS_CONFIG[cert.status];
          return (
            <div
              key={cert.name}
              className="bg-white rounded-2xl"
              style={{ padding: '12px 14px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', border: cert.status === 'expired' ? '1.5px solid #fecaca' : '1px solid #f3f4f6' }}
            >
              <div className="flex items-start" style={{ gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 12, background: cfg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <cfg.Icon size={17} color={cfg.color} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>{cert.name}</p>
                    <span style={{ fontSize: 8, fontWeight: 700, padding: '2px 7px', borderRadius: 20, background: cfg.bg, color: cfg.color, flexShrink: 0 }}>
                      {cfg.label}
                    </span>
                  </div>
                  <p style={{ fontSize: 9, color: '#9ca3af', marginTop: 2 }}>{cert.issuer}</p>
                  <div className="flex items-center justify-between" style={{ marginTop: 6 }}>
                    <p style={{ fontSize: 10, color: cert.status === 'expired' ? '#EF4444' : cert.status === 'expiring' ? '#d97706' : '#6b7280', fontWeight: 600 }}>
                      Expires: {cert.expires}
                      {cert.daysLeft && ` · ${cert.daysLeft} days left`}
                    </p>
                    {cert.status !== 'valid' && (
                      <button style={{ fontSize: 9, fontWeight: 700, color: '#3B5BDB', background: '#eff3ff', padding: '3px 8px', borderRadius: 8 }}>
                        Renew
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Reminder toggle */}
              {cert.status === 'expiring' && (
                <div className="flex items-center justify-between" style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid #f3f4f6' }}>
                  <div className="flex items-center gap-1.5">
                    <Bell size={11} color="#9ca3af" strokeWidth={2} />
                    <span style={{ fontSize: 9, color: '#9ca3af' }}>Renewal reminder set</span>
                  </div>
                  <div style={{ width: 32, height: 18, borderRadius: 9, background: '#3B5BDB', padding: 2, display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ width: 14, height: 14, borderRadius: 7, background: 'white', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <BottomTabBar active="calendar" />
    </div>
  );
};
