import axios from "axios";
import { useEffect, useState } from "react";
import { FaCrown, FaPlay } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Slideshow() {
   const [data, setData] = useState([]);
   const [current, setCurrent] = useState(0);

   useEffect(() => {
      axios
         .get(`https://zee5-hi-fi.onrender.com/zeeSlide`)
         .then((res) => {
            setData(res.data);
         });
   }, []);

   const prevSlide = () => {
      setCurrent(current === 0 ? data.length - 1 : current - 1);
   };

   const nextSlide = () => {
      setCurrent(current === data.length - 1 ? 0 : current + 1);
   };

   useEffect(() => {
      setTimeout(() => {
         if (current === data.length - 1) setCurrent(0);
         else setCurrent(current + 1);
      }, 3000);
   }, [current, setCurrent, data]);

   return (
      <div className="slider">
         <IoIosArrowBack className="arrow left" onClick={prevSlide} />
         {data.map(
            (item, index) =>
               index === current && (
                  <div key={index}>
                     <img src={item.url} alt={item.title} />
                     <button className="slider-watch-btn">
                        <FaPlay /> WATCH
                     </button>
                     <button className="slider-buy-btn">
                        <FaCrown /> BUY PLAN
                     </button>
                     <span className="slider-item-title">{item.title}</span>
                  </div>
               )
         )}
         <IoIosArrowForward className="arrow right" onClick={nextSlide} />
      </div>
   );
}

export default Slideshow;
