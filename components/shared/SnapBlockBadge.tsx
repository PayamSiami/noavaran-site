'use client';

export function SnapBlockBadge() {
    return (
        <div
            id="snapblock-badge"
            style={{
                position: 'fixed',
                bottom: '16px',
                right: '16px',
                zIndex: 9999,
                background: '#ffffff',
                borderRadius: '8px',
                padding: '6px 12px',
                fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
                fontSize: '12px',
                color: '#333',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
            }}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="https://raw.githubusercontent.com/SnapBlock/SnapBlock-assets/main/snapblock-logo.png"
                alt="SnapBlock"
                style={{ width: '16px', height: '16px', objectFit: 'contain', flexShrink: 0 }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            {' '}Built with{' '}
            <a
                href="https://snapblock.ai"
                target="_blank"
                rel="noopener"
                style={{ color: '#6366f1', fontWeight: 600, textDecoration: 'none' }}
            >
                SnapBlock
            </a>
        </div>
    );
}
