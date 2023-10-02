import React, { useEffect, useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import {
  Ngo,
  Hotel,
  NgoHotel,
  ReservationRequest,
  Notification,
} from "../models";

function NgoC() {
  const [allHotels, setHotels] = useState([]);
  const [ngo, setNgo] = useState([]);
  const [foodListing, setFoodListing] = useState([]);
  const [reservationRequests, setReservationRequests] = useState([]);
  async function getNgo() {
    try {
      const currentUser = await Auth.currentUserInfo();
      console.log(currentUser);
      const ngoId = "6f2cafda-355b-4874-b4f2-aa424d221a38";
      const ngos = await DataStore.query(Ngo, ngoId);
      console.log(ngos);
      console.log(ngos.hotels);
      const hotelsArr = await ngos.hotels.toArray();
      console.log(hotelsArr);

      let hotels = [];
      for (const hotel of hotelsArr) {
        hotels.push(await hotel.hotel);
      }
      console.log(hotels);
      const hotelFood = await hotels[0].food.toArray();
      console.log(hotelFood);
      setFoodListing(hotelFood);

      setNgo(ngos);
    } catch (error) {
      console.error("Error fetching ngos", error);
    }
  }

  const getAllHotels = async () => {
    try {
      const userId = "d97e6181-56e0-4658-950a-a29c5ef6c978";
      const hotels = await DataStore.query(Hotel);
      console.log(hotels);
      setHotels(hotels);
    } catch (error) {
      console.error("Error fetching hotels", error);
    }
  };

  const createNotification = async (hotelId, ngoId) => {
    try {
      const data = {
        hotelId: hotelId,
        ngoId: ngoId,
        status: "notAcknowledged",
        content: `NGO ${ngoId} has requested food from hotel ${hotelId}`,
      };
      await DataStore.save(new Notification(data));
    } catch (error) {
      console.error("Error creating notification", error);
    }
  };

  useEffect(() => {
    DataStore.observe(ReservationRequest).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
      getAcceptedReservations();
    });
    getNgo();
    getAllHotels();
    getAcceptedReservations();
  }, []);

  const createNgo = async () => {
    try {
      const currentUser = await Auth.currentUserInfo();
      console.log(currentUser);
      const userId = currentUser.id;
      const data = {
        name: "Ehsaas",
        userId: userId,
      };
      await DataStore.save(new Ngo(data));
    } catch (error) {
      console.error("Error creating ngo", error);
    }
  };

  const connectHotel = async (hotelId) => {
    try {
      console.log("Hotel ID " + hotelId);
      console.log("NGO ID " + ngo.id);
      const data = {
        hotelID: hotelId,
        ngoID: ngo.id,
      };
      await DataStore.save(new NgoHotel(data));
      getNgo();
    } catch (error) {
      console.error("Error connecting hotel", error);
    }
  };

  const reserveFood = async () => {
    try {
      const data = {
        hotelId: allHotels[0].id,
        ngoId: ngo.id,
        foodId: foodListing[0].id,
        status: "requested",
      };
      console.log(data);
      await DataStore.save(new ReservationRequest(data));
      createNotification(allHotels[0].id, ngo.id);
    } catch (error) {
      console.error("Error reserving food", error);
    }
  };

  const getAcceptedReservations = async () => {
    try {
      const reservationRequests = await DataStore.query(ReservationRequest);
      console.log(reservationRequests);
      console.log(await reservationRequests[0].ngo);
      console.log(await reservationRequests[0].food);

      let reservationRequestsArr = [];

      for (const request of reservationRequests) {
        if (request.status === "Accepted")
          reservationRequestsArr.push({
            ngo: await request.ngo,
            food: await request.food,
            status: request.status,
            id: request.id,
          });
      }

      setReservationRequests(reservationRequestsArr);
    } catch (error) {
      console.error("Error fetching reservation requests", error);
    }
  };

  return (
    <div>
      <h1>NGO's Action</h1>
      <div>
        <div>
          <button onClick={createNgo}>Create NGO</button>
          <h1>NGOs</h1>
          <h2>Available Hotels</h2>
        </div>
        <ul>
          {allHotels.map((hotel) => (
            <li style={{ display: "flex" }} key={hotel.id}>
              <h3>{hotel.name}</h3>
              <p>{hotel.id}</p>
              <button
                onClick={() => {
                  connectHotel(hotel.id);
                }}
              >
                {" "}
                Connect{" "}
              </button>
            </li>
          ))}
        </ul>

        <h2>Food Listings</h2>
        <ul>
          {foodListing.map((food) => (
            <li key={food.id} style={{ display: "flex" }}>
              {food.name}
              <button onClick={reserveFood}>Reserve Food</button>
            </li>
          ))}
        </ul>
        <h2>Notifications</h2>
        <ul></ul>
        <h2>Accepted Reservation Requests</h2>
        <ul>
          {reservationRequests.map((request) => (
            <li key={request.id}>
              <p>
                {" "}
                {request.ngo.name} - {request.food.name} - {request.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NgoC;
