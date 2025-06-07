import React from 'react';

const OfflinePage = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>🚫 You're Offline</h1>
      <p>Please check your internet connection.</p>
      <button
        onClick={handleReload}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        🔄 Reload Page
      </button>
    </div>
  );
};

export default OfflinePage;
