import toTitlecase from "../../lib/toTitleCase";
import { hotels } from "../../lib/data";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      const stars = req.query.stars;
      const destinations = Object.keys(hotels);
      const ratedHotels = [];

      destinations.forEach((destination) => {
        hotels[destination].forEach((hotel) => {
          if (hotel.stars == stars) {
            ratedHotels.push({ ...hotel, destination: toTitlecase(destination) });
          }
        });
      });

      return res.status(200).json({ hotels: ratedHotels });
    default:
      return res.status(400).json({ message: `No ${req.method} route exists` });
  }
}
