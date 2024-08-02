// NotificationCard.tsx
import React from 'react';

interface NotificationCardProps {
  title: string;
  message: string;
  timestamp: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ title, message, timestamp }) => {
  return (
    <div className="border rounded-md p-4 mb-4 shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{message}</p>
      <span className="text-xs text-gray-500">{timestamp}</span>
    </div>
  );
};

export default NotificationCard;
