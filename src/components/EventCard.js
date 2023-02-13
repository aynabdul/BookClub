import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const EventCard = (props) => {
  return (<>
    <div className="event-card">
      <header className="event-header">
        <h3 className="event-title">{props.title}</h3>
        <p className="event-date">{props.date}</p>
      </header>
      <div className="event-pic-text-wrap">
        <figure className="card_pic-wrap">
          <Carousel showThumbs={false}>
            {props.src.map((image) => (
              <div>
                <img className="event_image" src={image} />
              </div>
            ))}
          </Carousel>
        </figure>
        <div className="event-info">
          <p className="event-description">{props.description}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default EventCard;



// import React from "react";
// import Slider from 'react-slick';

// const EventCard = (props) => {
//     const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <div className="event-card">
//     <header className="event-header">
//       <h3 className="event-title">{props.title}</h3>
//       <p className="event-date">{props.date}</p>
//     </header>
//     <div className="event-pic-text-wrap">

//        <figure className="card_pic-wrap">
//            <Slider {...settings}>
//              {props.src.map((image) => (
//                <img src={image} />
//              ))}
//            </Slider>
//        </figure>

//     <div className="event-info"> <p className="event-description">{props.description}</p></div>
//     </div>
//   </div>
//   );
// };

// export default EventCard;

    {/* <figure className="event_pic-wrap">
        <img
            className='event_image'
            alt={props.name}
            src={props.src}
        />
    </figure> */}
    {/* <figure className="card_pic-wrap">
        <AwesomeSlider className="card_image" images={[props.src]} />
      </figure> */}


// import React from 'react';
// import Slider from 'react-slick';

// const EventCard = (props) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <div className="event-card">
//       <header className="event-header">
//         <h3 className="event-title">{props.title}</h3>
//         <p className="event-date">{props.date}</p>
//       </header>
//       <div className="event-pic-text-wrap">
        // <figure className="card_pic-wrap">
        //   <Slider {...settings}>
        //     {props.src.map((image) => (
        //       <img src={image} />
        //     ))}
        //   </Slider>
        // </figure>

//         <div className="event-info">
//           <p className="event-description">{props.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;
