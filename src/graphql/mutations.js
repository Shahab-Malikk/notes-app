/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createHotel = /* GraphQL */ `
  mutation CreateHotel(
    $input: CreateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    createHotel(input: $input, condition: $condition) {
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
export const updateHotel = /* GraphQL */ `
  mutation UpdateHotel(
    $input: UpdateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    updateHotel(input: $input, condition: $condition) {
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
export const deleteHotel = /* GraphQL */ `
  mutation DeleteHotel(
    $input: DeleteHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    deleteHotel(input: $input, condition: $condition) {
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
export const createNgo = /* GraphQL */ `
  mutation CreateNgo(
    $input: CreateNgoInput!
    $condition: ModelNgoConditionInput
  ) {
    createNgo(input: $input, condition: $condition) {
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
export const updateNgo = /* GraphQL */ `
  mutation UpdateNgo(
    $input: UpdateNgoInput!
    $condition: ModelNgoConditionInput
  ) {
    updateNgo(input: $input, condition: $condition) {
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
export const deleteNgo = /* GraphQL */ `
  mutation DeleteNgo(
    $input: DeleteNgoInput!
    $condition: ModelNgoConditionInput
  ) {
    deleteNgo(input: $input, condition: $condition) {
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
export const createNgoHotel = /* GraphQL */ `
  mutation CreateNgoHotel(
    $input: CreateNgoHotelInput!
    $condition: ModelNgoHotelConditionInput
  ) {
    createNgoHotel(input: $input, condition: $condition) {
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
export const updateNgoHotel = /* GraphQL */ `
  mutation UpdateNgoHotel(
    $input: UpdateNgoHotelInput!
    $condition: ModelNgoHotelConditionInput
  ) {
    updateNgoHotel(input: $input, condition: $condition) {
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
export const deleteNgoHotel = /* GraphQL */ `
  mutation DeleteNgoHotel(
    $input: DeleteNgoHotelInput!
    $condition: ModelNgoHotelConditionInput
  ) {
    deleteNgoHotel(input: $input, condition: $condition) {
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
export const createVolunteer = /* GraphQL */ `
  mutation CreateVolunteer(
    $input: CreateVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    createVolunteer(input: $input, condition: $condition) {
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
export const updateVolunteer = /* GraphQL */ `
  mutation UpdateVolunteer(
    $input: UpdateVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    updateVolunteer(input: $input, condition: $condition) {
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
export const deleteVolunteer = /* GraphQL */ `
  mutation DeleteVolunteer(
    $input: DeleteVolunteerInput!
    $condition: ModelVolunteerConditionInput
  ) {
    deleteVolunteer(input: $input, condition: $condition) {
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
export const createVolunteerNgo = /* GraphQL */ `
  mutation CreateVolunteerNgo(
    $input: CreateVolunteerNgoInput!
    $condition: ModelVolunteerNgoConditionInput
  ) {
    createVolunteerNgo(input: $input, condition: $condition) {
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
export const updateVolunteerNgo = /* GraphQL */ `
  mutation UpdateVolunteerNgo(
    $input: UpdateVolunteerNgoInput!
    $condition: ModelVolunteerNgoConditionInput
  ) {
    updateVolunteerNgo(input: $input, condition: $condition) {
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
export const deleteVolunteerNgo = /* GraphQL */ `
  mutation DeleteVolunteerNgo(
    $input: DeleteVolunteerNgoInput!
    $condition: ModelVolunteerNgoConditionInput
  ) {
    deleteVolunteerNgo(input: $input, condition: $condition) {
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
export const createFood = /* GraphQL */ `
  mutation CreateFood(
    $input: CreateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    createFood(input: $input, condition: $condition) {
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
export const updateFood = /* GraphQL */ `
  mutation UpdateFood(
    $input: UpdateFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    updateFood(input: $input, condition: $condition) {
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
export const deleteFood = /* GraphQL */ `
  mutation DeleteFood(
    $input: DeleteFoodInput!
    $condition: ModelFoodConditionInput
  ) {
    deleteFood(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createReservationRequest = /* GraphQL */ `
  mutation CreateReservationRequest(
    $input: CreateReservationRequestInput!
    $condition: ModelReservationRequestConditionInput
  ) {
    createReservationRequest(input: $input, condition: $condition) {
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
export const updateReservationRequest = /* GraphQL */ `
  mutation UpdateReservationRequest(
    $input: UpdateReservationRequestInput!
    $condition: ModelReservationRequestConditionInput
  ) {
    updateReservationRequest(input: $input, condition: $condition) {
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
export const deleteReservationRequest = /* GraphQL */ `
  mutation DeleteReservationRequest(
    $input: DeleteReservationRequestInput!
    $condition: ModelReservationRequestConditionInput
  ) {
    deleteReservationRequest(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
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
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
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
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
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
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
