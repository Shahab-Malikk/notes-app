// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Hotel, Ngo, NgoHotel, Volunteer, VolunteerNgo, Food, Category, ReservationRequest, Notification, Person, Note } = initSchema(schema);

export {
  Users,
  Hotel,
  Ngo,
  NgoHotel,
  Volunteer,
  VolunteerNgo,
  Food,
  Category,
  ReservationRequest,
  Notification,
  Person,
  Note
};