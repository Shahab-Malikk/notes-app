import { ModelInit, MutableModel, __modelMeta__, OptionallyManagedIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userRole: string;
  readonly email?: string | null;
  readonly hotels?: (Hotel | null)[] | null;
  readonly ngos?: (Ngo | null)[] | null;
  readonly volunteers?: (Volunteer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userRole: string;
  readonly email?: string | null;
  readonly hotels: AsyncCollection<Hotel>;
  readonly ngos: AsyncCollection<Ngo>;
  readonly volunteers: AsyncCollection<Volunteer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}

type EagerHotel = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Hotel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly userId?: string | null;
  readonly user?: Users | null;
  readonly ngos?: (NgoHotel | null)[] | null;
  readonly notifications?: (Notification | null)[] | null;
  readonly food?: (Food | null)[] | null;
  readonly reservationRequests?: (ReservationRequest | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHotel = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Hotel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly userId?: string | null;
  readonly user: AsyncItem<Users | undefined>;
  readonly ngos: AsyncCollection<NgoHotel>;
  readonly notifications: AsyncCollection<Notification>;
  readonly food: AsyncCollection<Food>;
  readonly reservationRequests: AsyncCollection<ReservationRequest>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hotel = LazyLoading extends LazyLoadingDisabled ? EagerHotel : LazyHotel

export declare const Hotel: (new (init: ModelInit<Hotel>) => Hotel) & {
  copyOf(source: Hotel, mutator: (draft: MutableModel<Hotel>) => MutableModel<Hotel> | void): Hotel;
}

type EagerNgo = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Ngo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly userId?: string | null;
  readonly user?: Users | null;
  readonly hotels?: (NgoHotel | null)[] | null;
  readonly notifications?: (Notification | null)[] | null;
  readonly volunteers?: (VolunteerNgo | null)[] | null;
  readonly reservationRequests?: (ReservationRequest | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNgo = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Ngo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly userId?: string | null;
  readonly user: AsyncItem<Users | undefined>;
  readonly hotels: AsyncCollection<NgoHotel>;
  readonly notifications: AsyncCollection<Notification>;
  readonly volunteers: AsyncCollection<VolunteerNgo>;
  readonly reservationRequests: AsyncCollection<ReservationRequest>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ngo = LazyLoading extends LazyLoadingDisabled ? EagerNgo : LazyNgo

export declare const Ngo: (new (init: ModelInit<Ngo>) => Ngo) & {
  copyOf(source: Ngo, mutator: (draft: MutableModel<Ngo>) => MutableModel<Ngo> | void): Ngo;
}

type EagerNgoHotel = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<NgoHotel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hotelID?: string | null;
  readonly hotel?: Hotel | null;
  readonly ngoID?: string | null;
  readonly ngo?: Ngo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNgoHotel = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<NgoHotel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hotelID?: string | null;
  readonly hotel: AsyncItem<Hotel | undefined>;
  readonly ngoID?: string | null;
  readonly ngo: AsyncItem<Ngo | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NgoHotel = LazyLoading extends LazyLoadingDisabled ? EagerNgoHotel : LazyNgoHotel

export declare const NgoHotel: (new (init: ModelInit<NgoHotel>) => NgoHotel) & {
  copyOf(source: NgoHotel, mutator: (draft: MutableModel<NgoHotel>) => MutableModel<NgoHotel> | void): NgoHotel;
}

type EagerVolunteer = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Volunteer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly userId?: string | null;
  readonly user?: Users | null;
  readonly ngos?: (VolunteerNgo | null)[] | null;
  readonly notifications?: (Notification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVolunteer = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Volunteer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email?: string | null;
  readonly userId?: string | null;
  readonly user: AsyncItem<Users | undefined>;
  readonly ngos: AsyncCollection<VolunteerNgo>;
  readonly notifications: AsyncCollection<Notification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Volunteer = LazyLoading extends LazyLoadingDisabled ? EagerVolunteer : LazyVolunteer

export declare const Volunteer: (new (init: ModelInit<Volunteer>) => Volunteer) & {
  copyOf(source: Volunteer, mutator: (draft: MutableModel<Volunteer>) => MutableModel<Volunteer> | void): Volunteer;
}

type EagerVolunteerNgo = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<VolunteerNgo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly volunteerID?: string | null;
  readonly volunteer?: Volunteer | null;
  readonly ngoID?: string | null;
  readonly ngo?: Ngo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVolunteerNgo = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<VolunteerNgo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly volunteerID?: string | null;
  readonly volunteer: AsyncItem<Volunteer | undefined>;
  readonly ngoID?: string | null;
  readonly ngo: AsyncItem<Ngo | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VolunteerNgo = LazyLoading extends LazyLoadingDisabled ? EagerVolunteerNgo : LazyVolunteerNgo

export declare const VolunteerNgo: (new (init: ModelInit<VolunteerNgo>) => VolunteerNgo) & {
  copyOf(source: VolunteerNgo, mutator: (draft: MutableModel<VolunteerNgo>) => MutableModel<VolunteerNgo> | void): VolunteerNgo;
}

type EagerFood = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Food, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly hotelId?: string | null;
  readonly hotel?: Hotel | null;
  readonly categoryId?: string | null;
  readonly category?: Category | null;
  readonly reservationRequests?: (ReservationRequest | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFood = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Food, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly hotelId?: string | null;
  readonly hotel: AsyncItem<Hotel | undefined>;
  readonly categoryId?: string | null;
  readonly category: AsyncItem<Category | undefined>;
  readonly reservationRequests: AsyncCollection<ReservationRequest>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Food = LazyLoading extends LazyLoadingDisabled ? EagerFood : LazyFood

export declare const Food: (new (init: ModelInit<Food>) => Food) & {
  copyOf(source: Food, mutator: (draft: MutableModel<Food>) => MutableModel<Food> | void): Food;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly foods?: (Food | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly foods: AsyncCollection<Food>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerReservationRequest = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<ReservationRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hotelId?: string | null;
  readonly hotel?: Hotel | null;
  readonly ngoId?: string | null;
  readonly ngo?: Ngo | null;
  readonly foodId?: string | null;
  readonly food?: Food | null;
  readonly status: string;
  readonly ngoAssociation?: Ngo | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReservationRequest = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<ReservationRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hotelId?: string | null;
  readonly hotel: AsyncItem<Hotel | undefined>;
  readonly ngoId?: string | null;
  readonly ngo: AsyncItem<Ngo | undefined>;
  readonly foodId?: string | null;
  readonly food: AsyncItem<Food | undefined>;
  readonly status: string;
  readonly ngoAssociation: AsyncItem<Ngo | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReservationRequest = LazyLoading extends LazyLoadingDisabled ? EagerReservationRequest : LazyReservationRequest

export declare const ReservationRequest: (new (init: ModelInit<ReservationRequest>) => ReservationRequest) & {
  copyOf(source: ReservationRequest, mutator: (draft: MutableModel<ReservationRequest>) => MutableModel<ReservationRequest> | void): ReservationRequest;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hotelId?: string | null;
  readonly hotel?: Hotel | null;
  readonly ngoId?: string | null;
  readonly ngo?: Ngo | null;
  readonly volunteerId?: string | null;
  readonly volunteer?: Volunteer | null;
  readonly status: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly hotelId?: string | null;
  readonly hotel: AsyncItem<Hotel | undefined>;
  readonly ngoId?: string | null;
  readonly ngo: AsyncItem<Ngo | undefined>;
  readonly volunteerId?: string | null;
  readonly volunteer: AsyncItem<Volunteer | undefined>;
  readonly status: string;
  readonly content: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerPerson = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly notes?: (Note | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPerson = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly notes: AsyncCollection<Note>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Person = LazyLoading extends LazyLoadingDisabled ? EagerPerson : LazyPerson

export declare const Person: (new (init: ModelInit<Person>) => Person) & {
  copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly pId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Note, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly pId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}