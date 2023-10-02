/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
      id
      userRole
      email
      hotels {
        items {
          id
          name
          email
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ngos {
        items {
          id
          name
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      volunteers {
        items {
          id
          name
          email
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
      id
      userRole
      email
      hotels {
        items {
          id
          name
          email
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ngos {
        items {
          id
          name
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      volunteers {
        items {
          id
          name
          email
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
      id
      userRole
      email
      hotels {
        items {
          id
          name
          email
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      ngos {
        items {
          id
          name
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      volunteers {
        items {
          id
          name
          email
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateHotel = /* GraphQL */ `
  subscription OnCreateHotel($filter: ModelSubscriptionHotelFilterInput) {
    onCreateHotel(filter: $filter) {
      id
      name
      email
      userId
      user {
        id
        userRole
        email
        hotels {
          nextToken
          startedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngos {
        items {
          id
          hotelID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          hotelId
          ngoId
          volunteerId
          status
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      food {
        items {
          id
          name
          hotelId
          categoryId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      reservationRequests {
        items {
          id
          hotelId
          ngoId
          foodId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateHotel = /* GraphQL */ `
  subscription OnUpdateHotel($filter: ModelSubscriptionHotelFilterInput) {
    onUpdateHotel(filter: $filter) {
      id
      name
      email
      userId
      user {
        id
        userRole
        email
        hotels {
          nextToken
          startedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngos {
        items {
          id
          hotelID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          hotelId
          ngoId
          volunteerId
          status
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      food {
        items {
          id
          name
          hotelId
          categoryId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      reservationRequests {
        items {
          id
          hotelId
          ngoId
          foodId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteHotel = /* GraphQL */ `
  subscription OnDeleteHotel($filter: ModelSubscriptionHotelFilterInput) {
    onDeleteHotel(filter: $filter) {
      id
      name
      email
      userId
      user {
        id
        userRole
        email
        hotels {
          nextToken
          startedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngos {
        items {
          id
          hotelID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          hotelId
          ngoId
          volunteerId
          status
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      food {
        items {
          id
          name
          hotelId
          categoryId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      reservationRequests {
        items {
          id
          hotelId
          ngoId
          foodId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateNgo = /* GraphQL */ `
  subscription OnCreateNgo($filter: ModelSubscriptionNgoFilterInput) {
    onCreateNgo(filter: $filter) {
      id
      name
      userId
      user {
        id
        userRole
        email
        hotels {
          nextToken
          startedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      hotels {
        items {
          id
          hotelID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          hotelId
          ngoId
          volunteerId
          status
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      volunteers {
        items {
          id
          volunteerID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      reservationRequests {
        items {
          id
          hotelId
          ngoId
          foodId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateNgo = /* GraphQL */ `
  subscription OnUpdateNgo($filter: ModelSubscriptionNgoFilterInput) {
    onUpdateNgo(filter: $filter) {
      id
      name
      userId
      user {
        id
        userRole
        email
        hotels {
          nextToken
          startedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      hotels {
        items {
          id
          hotelID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          hotelId
          ngoId
          volunteerId
          status
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      volunteers {
        items {
          id
          volunteerID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      reservationRequests {
        items {
          id
          hotelId
          ngoId
          foodId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteNgo = /* GraphQL */ `
  subscription OnDeleteNgo($filter: ModelSubscriptionNgoFilterInput) {
    onDeleteNgo(filter: $filter) {
      id
      name
      userId
      user {
        id
        userRole
        email
        hotels {
          nextToken
          startedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      hotels {
        items {
          id
          hotelID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          hotelId
          ngoId
          volunteerId
          status
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      volunteers {
        items {
          id
          volunteerID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      reservationRequests {
        items {
          id
          hotelId
          ngoId
          foodId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateNgoHotel = /* GraphQL */ `
  subscription OnCreateNgoHotel($filter: ModelSubscriptionNgoHotelFilterInput) {
    onCreateNgoHotel(filter: $filter) {
      id
      hotelID
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoID
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateNgoHotel = /* GraphQL */ `
  subscription OnUpdateNgoHotel($filter: ModelSubscriptionNgoHotelFilterInput) {
    onUpdateNgoHotel(filter: $filter) {
      id
      hotelID
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoID
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteNgoHotel = /* GraphQL */ `
  subscription OnDeleteNgoHotel($filter: ModelSubscriptionNgoHotelFilterInput) {
    onDeleteNgoHotel(filter: $filter) {
      id
      hotelID
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoID
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateVolunteer = /* GraphQL */ `
  subscription OnCreateVolunteer(
    $filter: ModelSubscriptionVolunteerFilterInput
  ) {
    onCreateVolunteer(filter: $filter) {
      id
      name
      email
      userId
      user {
        id
        userRole
        email
        hotels {
          nextToken
          startedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngos {
        items {
          id
          volunteerID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          hotelId
          ngoId
          volunteerId
          status
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateVolunteer = /* GraphQL */ `
  subscription OnUpdateVolunteer(
    $filter: ModelSubscriptionVolunteerFilterInput
  ) {
    onUpdateVolunteer(filter: $filter) {
      id
      name
      email
      userId
      user {
        id
        userRole
        email
        hotels {
          nextToken
          startedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngos {
        items {
          id
          volunteerID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          hotelId
          ngoId
          volunteerId
          status
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteVolunteer = /* GraphQL */ `
  subscription OnDeleteVolunteer(
    $filter: ModelSubscriptionVolunteerFilterInput
  ) {
    onDeleteVolunteer(filter: $filter) {
      id
      name
      email
      userId
      user {
        id
        userRole
        email
        hotels {
          nextToken
          startedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngos {
        items {
          id
          volunteerID
          ngoID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      notifications {
        items {
          id
          hotelId
          ngoId
          volunteerId
          status
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateVolunteerNgo = /* GraphQL */ `
  subscription OnCreateVolunteerNgo(
    $filter: ModelSubscriptionVolunteerNgoFilterInput
  ) {
    onCreateVolunteerNgo(filter: $filter) {
      id
      volunteerID
      volunteer {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoID
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateVolunteerNgo = /* GraphQL */ `
  subscription OnUpdateVolunteerNgo(
    $filter: ModelSubscriptionVolunteerNgoFilterInput
  ) {
    onUpdateVolunteerNgo(filter: $filter) {
      id
      volunteerID
      volunteer {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoID
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteVolunteerNgo = /* GraphQL */ `
  subscription OnDeleteVolunteerNgo(
    $filter: ModelSubscriptionVolunteerNgoFilterInput
  ) {
    onDeleteVolunteerNgo(filter: $filter) {
      id
      volunteerID
      volunteer {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoID
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateFood = /* GraphQL */ `
  subscription OnCreateFood($filter: ModelSubscriptionFoodFilterInput) {
    onCreateFood(filter: $filter) {
      id
      name
      hotelId
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      categoryId
      category {
        id
        name
        foods {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      reservationRequests {
        items {
          id
          hotelId
          ngoId
          foodId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateFood = /* GraphQL */ `
  subscription OnUpdateFood($filter: ModelSubscriptionFoodFilterInput) {
    onUpdateFood(filter: $filter) {
      id
      name
      hotelId
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      categoryId
      category {
        id
        name
        foods {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      reservationRequests {
        items {
          id
          hotelId
          ngoId
          foodId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteFood = /* GraphQL */ `
  subscription OnDeleteFood($filter: ModelSubscriptionFoodFilterInput) {
    onDeleteFood(filter: $filter) {
      id
      name
      hotelId
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      categoryId
      category {
        id
        name
        foods {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      reservationRequests {
        items {
          id
          hotelId
          ngoId
          foodId
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      foods {
        items {
          id
          name
          hotelId
          categoryId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      foods {
        items {
          id
          name
          hotelId
          categoryId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      foods {
        items {
          id
          name
          hotelId
          categoryId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateReservationRequest = /* GraphQL */ `
  subscription OnCreateReservationRequest(
    $filter: ModelSubscriptionReservationRequestFilterInput
  ) {
    onCreateReservationRequest(filter: $filter) {
      id
      hotelId
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoId
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      foodId
      food {
        id
        name
        hotelId
        hotel {
          id
          name
          email
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        categoryId
        category {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      status
      ngoAssociation {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateReservationRequest = /* GraphQL */ `
  subscription OnUpdateReservationRequest(
    $filter: ModelSubscriptionReservationRequestFilterInput
  ) {
    onUpdateReservationRequest(filter: $filter) {
      id
      hotelId
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoId
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      foodId
      food {
        id
        name
        hotelId
        hotel {
          id
          name
          email
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        categoryId
        category {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      status
      ngoAssociation {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteReservationRequest = /* GraphQL */ `
  subscription OnDeleteReservationRequest(
    $filter: ModelSubscriptionReservationRequestFilterInput
  ) {
    onDeleteReservationRequest(filter: $filter) {
      id
      hotelId
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoId
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      foodId
      food {
        id
        name
        hotelId
        hotel {
          id
          name
          email
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        categoryId
        category {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      status
      ngoAssociation {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
      id
      hotelId
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoId
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      volunteerId
      volunteer {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      status
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
      id
      hotelId
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoId
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      volunteerId
      volunteer {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      status
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
      id
      hotelId
      hotel {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        food {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      ngoId
      ngo {
        id
        name
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        hotels {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        volunteers {
          nextToken
          startedAt
          __typename
        }
        reservationRequests {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      volunteerId
      volunteer {
        id
        name
        email
        userId
        user {
          id
          userRole
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        ngos {
          nextToken
          startedAt
          __typename
        }
        notifications {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      status
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson($filter: ModelSubscriptionPersonFilterInput) {
    onCreatePerson(filter: $filter) {
      id
      name
      email
      phone
      notes {
        items {
          id
          name
          description
          image
          pId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson($filter: ModelSubscriptionPersonFilterInput) {
    onUpdatePerson(filter: $filter) {
      id
      name
      email
      phone
      notes {
        items {
          id
          name
          description
          image
          pId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson($filter: ModelSubscriptionPersonFilterInput) {
    onDeletePerson(filter: $filter) {
      id
      name
      email
      phone
      notes {
        items {
          id
          name
          description
          image
          pId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      image
      pId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      image
      pId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      image
      pId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
