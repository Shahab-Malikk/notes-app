import React, { useEffect, useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import {
  Hotel,
  Ngo,
  Category,
  Food,
  ReservationRequest,
  Notification,
} from "../models";
function HotelC() {
  const [hotel, setHotel] = useState([]);
  const [ngos, setNgos] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [reservationRequests, setReservationRequests] = useState([]);
  const [notifications, setNotifications] = useState([]);

  async function getHotel() {
    try {
      const currentUser = await Auth.currentUserInfo();
      console.log(currentUser);
      const userId = "d97e6181-56e0-4658-950a-a29c5ef6c978";
      const hotels = await DataStore.query(Hotel);
      console.log(hotels);
      setHotel(hotels);
      const ngosList = hotels[0].ngos;
      console.log(ngosList);
      const ngosArray = await ngosList.toArray();

      let ngoArr = [];
      for (const ngo of ngosArray) {
        ngoArr.push(await ngo.ngo);
      }
      setNgos(ngoArr);
      console.log(ngos);
    } catch (error) {
      console.error("Error fetching hotels", error);
    }
  }

  const getFoodCategories = async () => {
    try {
      const foodCategories = await DataStore.query(Category);
      console.log(foodCategories);
      setFoodCategories(foodCategories);
    } catch (error) {
      console.error("Error fetching food categories", error);
    }
  };
  useEffect(() => {
    getHotel();
    getFoodCategories();
    getReservationRequests();
    getNotifications();
  }, [hotel.length]);

  useEffect(() => {
    DataStore.observe(Notification).subscribe((msg) => {
      console.log(msg.model, msg.opType, msg.element);
      getHotel();
      getNotifications();
    });
  }, []);

  const getReservationRequests = async () => {
    try {
      const reservationRequests = await DataStore.query(ReservationRequest);
      console.log(reservationRequests);
      console.log(await reservationRequests[0].ngo);
      console.log(await reservationRequests[0].food);

      let reservationRequestsArr = [];
      for (const request of reservationRequests) {
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

  const createHotel = async () => {
    try {
      const currentUser = await Auth.currentUserInfo();
      console.log(currentUser);
      const userId = currentUser.id;
      const data = {
        name: "Hanif Wedding Palace",
        userId: userId,
      };
      await DataStore.save(new Hotel(data));
    } catch (error) {
      console.error("Error creating hotel", error);
    }
  };

  const addFood = async () => {
    try {
      const data = {
        hotelId: hotel[0].id,
        name: "Chicken Korma",
        categoryId: foodCategories[0].id,
      };
      console.log(data);
      await DataStore.save(new Food(data));
    } catch (error) {
      console.error("Error adding food", error);
    }
  };

  const addCategory = async () => {
    try {
      const data = {
        id: "Korma",
        name: "Chicken Korma",
      };
      await DataStore.save(new Category(data));
      getFoodCategories();
    } catch (error) {
      console.error("Error creating category", error);
    }
  };
  const acceptReuest = async (requestId) => {
    try {
      const reservationRequest = await DataStore.query(
        ReservationRequest,
        requestId
      );
      console.log(reservationRequest);
      await DataStore.save(
        ReservationRequest.copyOf(reservationRequest, (updated) => {
          updated.status = "Accepted";
        })
      );
      getReservationRequests();
    } catch (error) {
      console.error("Error accepting request", error);
    }
  };

  const getNotifications = async () => {
    if (hotel.length === 0) return;
    try {
      const notifications = await hotel[0].notifications.values;
      console.log(notifications);
      setNotifications(notifications);
    } catch (error) {
      console.error("Error fetching notifications", error);
    }
  };
  return (
    <>
      <h1>Hotel's Action</h1>
      {/* <h2>{hotel[0].name}</h2> */}
      <div>
        <div>
          <button onClick={createHotel}>Create Hotel</button>
          <h1>Connected Ngos</h1>
          <ul>
            {ngos.map((ngo) => (
              <li key={ngo.id}>{ngo.name}</li>
            ))}
          </ul>
          <div>Available Categories</div>
          <div>
            <button onClick={addCategory}>Add Category</button>
            <h2>Foods</h2>
            <button onClick={addFood}>Add Food</button>
          </div>
          <h2>Reservation Requests</h2>
          <ul>
            {reservationRequests.map((request) => (
              <li key={request.id}>
                <p>
                  {" "}
                  {request.ngo.name} - {request.food.name} - {request.status}
                </p>
                <button
                  onClick={() => {
                    acceptReuest(request.id);
                  }}
                >
                  Accept
                </button>
                <button>Reject</button>
              </li>
            ))}
          </ul>

          <h2>Notifications</h2>
          {
            <ul>
              {notifications.map((notification) => (
                <li key={notification.id}>
                  <p>{notification.content}</p>
                </li>
              ))}
            </ul>
          }
          <ul></ul>
        </div>
      </div>
    </>
  );
}

export default HotelC;
