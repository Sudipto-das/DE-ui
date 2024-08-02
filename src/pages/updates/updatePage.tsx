// UpdatePage.tsx
import React from 'react';
import NotificationList from '../../components/updates/notificationList';


const UpdatePage: React.FC = () => {
  // Example data - replace this with your actual notification data
  const notifications = [
    {
      id: '1',
      title: 'New Comment',
      message: 'You have a new comment on your post.',
      timestamp: '2024-08-02T10:30:00Z',
    },
    {
      id: '2',
      title: 'Update Available',
      message: 'A new update is available for your application.',
      timestamp: '2024-08-01T14:00:00Z',
    },
  ];

  return (
    <div className="border rounded-md h-[calc(100vh-8rem)]">
      <NotificationList notifications={notifications} />
    </div>
  );
};

export default UpdatePage;
