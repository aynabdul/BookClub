import React from 'react';
import AnnouncementCard from '../AnnouncementCard';
import './Announcements.css';

const Announcements = () => {
  const announcements = [
    {
      title: 'Upcoming Event',
      date: 'Date: March 10, 2023',
      description: 'Join us for our upcoming event on March 10, 2023. It will be an exciting experience and we hope to see you there!',
    },
    {
      title: 'Another Event',
      date: 'Date: March 15, 2023',
      description: 'Join us for another exciting event on March 15, 2023!',
    },
    {
      title: 'Another Event',
      date: 'Date: March 15, 2023',
      description: 'Join us for another exciting event on March 15, 2023!',
    },
  ];

  return (
    <div className='header'>
    <div className='announcements-container'>
      <h1 className='announcements-header'>ANNOUNCEMENTS</h1>
      <div className='announcements-card-container'>
        {announcements.map((announcement, index) => (
          <AnnouncementCard
            key={index}
            title={announcement.title}
            date={announcement.date}
            description={announcement.description}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Announcements;
