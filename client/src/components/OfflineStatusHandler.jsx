import React from "react";
import useOnlineStatus from "../useOnlineStatus";

const OfflineStatusHandler = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 999999,
      backgroundColor: "#ef4444",
      color: "white",
      textAlign: "center",
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: "600",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontFamily: "system-ui, -apple-system, sans-serif"
    }}>
      <span>⚠️</span>
      <span>You are currently offline. Changes may not be saved.</span>
    </div>
  );
};

export default OfflineStatusHandler;
