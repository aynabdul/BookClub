import React from 'react';
import EventCard from '../EventCard';
import './Events.css';

export default function Events() {
  return (
    <>
    <div className='bg-img'>     
      <div className='events'>
      <div className='card_container'>
      <h1 className='main-header'>Events</h1>
          <div className='card_wrapper'>
            <EventCard
              title='Book Fair'
              date='January 1, 2022'
              src={[  '/images/event1.jpg',  '/images/event2.jpg']}
              description='"A Book Fair is an event where publishers, booksellers, 
              and literary enthusiasts come together to showcase a vast collection of books, magazines, 
              and other reading materials. The fair provides a platform for book lovers to discover new titles, 
              meet their favorite authors, and indulge in their love for reading. The event is usually held in a large 
              exhibition hall, with rows of stalls and displays featuring books from various genres, such as fiction, non-fiction, 
              mystery, romance, and more.'
            />
            <EventCard
              title='Read Fest'
              date='February 2, 2022'
              src= {['/images/event2.jpg',  '/images/event3.jpg']}
              description='A Study Circle is a group of individuals who come together to discuss and learn about a 
              particular subject or book. The purpose of the circle is to share knowledge, opinions, and ideas about 
              the chosen topic. Participants are encouraged to engage in open and respectful dialogue, and to challenge each others perspectives. 
              The book description event focuses on a particular book, and the members of the study circle come together to analyze and 
              discuss its themes, characters, and style.'
            />
            <EventCard
              title='Study Cricle'
              date='March 3, 2022'
              src={['/images/event3.jpg',  '/images/event1.jpg']}
              description='A Read Fest is a celebration of all things reading and literature. 
              The event brings together book lovers, authors, publishers, and 
              literary enthusiasts to share their love of books and reading. At the Read Fest, 
              attendees can expect to find a variety of activities, such as book signings, readings, 
              and discussions with authors, as well as book sales, exhibits, and displays. The event 
              provides an opportunity for readers to discover new titles,
               meet their favorite authors, and connect with others who share their love of reading.'
            />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
// how to position the contents inside a div as desired through css?