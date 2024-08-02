// NotificationList.tsx
import React from 'react';
import NotificationCard from './notificationCard';


interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
}

interface NotificationListProps {
  notifications: Notification[];
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications }) => {
  return (
    <div className="p-4">
      {notifications.length === 0 ? (
        <div className="flex justify-center items-center h-full">
          <p>No notifications here ....</p>
        </div>
      ) : (
        notifications.map(notification => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            message={notification.message}
            timestamp={notification.timestamp}
          />
        ))
      )}
    </div>
  );
};

export default NotificationList;
