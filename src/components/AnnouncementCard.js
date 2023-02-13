import React from 'react';

const AnnouncementCard = (props) => {
  return (
    <div className='announcements-card'>
      <div className='announcements-card-header'>
        <h3 className='announcements-card-title'>{props.title}</h3>
        <p className='announcements-card-date'>{props.date}</p>
      </div>
      <p className='announcements-card-description'>{props.description}</p>
    </div>
  );
};

export default AnnouncementCard;