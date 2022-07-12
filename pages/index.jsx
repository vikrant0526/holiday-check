import axios from "axios";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function Home() {
  const [rating, setRating] = useState(0);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    if (rating) {
      axios
        .get("/api/hotels", { params: { stars: rating } })
        .then((res) => setHotels(res.data.hotels))
        .catch((error) => console.log(error));
    }
  }, [rating]);

  return (
    <div className="bg-main flex flex-col flex-1 h-screen justify-center items-center p-4">
      <div className="flex">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <BsStarFill
              key={i}
              className="text-white text-4xl m-2"
              onClick={() => setRating(i + 1)}
            />
          ) : (
            <BsStar key={i} className="text-white text-4xl m-2" onClick={() => setRating(i + 1)} />
          )
        )}
      </div>
      <div className="flex w-full justify-center">
        {hotels.map((hotel, i) => (
          <div key={i} className="bg-white rounded-md h-20 w-1/4 m-1 p-1">
            <h3 className="text-[#0057A5] text-4xl text-center">{hotel.name}</h3>
            <h3 className="text-[#0057A5] text-2xl text-center">{hotel.destination}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
