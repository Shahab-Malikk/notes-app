/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: String!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: String
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getHotel = /* GraphQL */ `
  query GetHotel($id: String!) {
    getHotel(id: $id) {
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
export const listHotels = /* GraphQL */ `
  query ListHotels(
    $id: String
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHotels(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncHotels = /* GraphQL */ `
  query SyncHotels(
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHotels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getNgo = /* GraphQL */ `
  query GetNgo($id: String!) {
    getNgo(id: $id) {
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
export const listNgos = /* GraphQL */ `
  query ListNgos(
    $id: String
    $filter: ModelNgoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNgos(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncNgos = /* GraphQL */ `
  query SyncNgos(
    $filter: ModelNgoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNgos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getNgoHotel = /* GraphQL */ `
  query GetNgoHotel($id: String!) {
    getNgoHotel(id: $id) {
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
export const listNgoHotels = /* GraphQL */ `
  query ListNgoHotels(
    $id: String
    $filter: ModelNgoHotelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNgoHotels(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        hotelID
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
        ngoID
        ngo {
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
  }
`;
export const syncNgoHotels = /* GraphQL */ `
  query SyncNgoHotels(
    $filter: ModelNgoHotelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNgoHotels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        hotelID
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
        ngoID
        ngo {
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
  }
`;
export const getVolunteer = /* GraphQL */ `
  query GetVolunteer($id: String!) {
    getVolunteer(id: $id) {
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
export const listVolunteers = /* GraphQL */ `
  query ListVolunteers(
    $id: String
    $filter: ModelVolunteerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVolunteers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncVolunteers = /* GraphQL */ `
  query SyncVolunteers(
    $filter: ModelVolunteerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVolunteers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getVolunteerNgo = /* GraphQL */ `
  query GetVolunteerNgo($id: String!) {
    getVolunteerNgo(id: $id) {
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
export const listVolunteerNgos = /* GraphQL */ `
  query ListVolunteerNgos(
    $id: String
    $filter: ModelVolunteerNgoFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listVolunteerNgos(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        volunteerID
        volunteer {
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
        ngoID
        ngo {
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
  }
`;
export const syncVolunteerNgos = /* GraphQL */ `
  query SyncVolunteerNgos(
    $filter: ModelVolunteerNgoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVolunteerNgos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        volunteerID
        volunteer {
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
        ngoID
        ngo {
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
  }
`;
export const getFood = /* GraphQL */ `
  query GetFood($id: String!) {
    getFood(id: $id) {
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
export const listFoods = /* GraphQL */ `
  query ListFoods(
    $id: String
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFoods(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncFoods = /* GraphQL */ `
  query SyncFoods(
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFoods(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: String!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $id: String
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCategories(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getReservationRequest = /* GraphQL */ `
  query GetReservationRequest($id: String!) {
    getReservationRequest(id: $id) {
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
export const listReservationRequests = /* GraphQL */ `
  query ListReservationRequests(
    $id: String
    $filter: ModelReservationRequestFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReservationRequests(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
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
        ngoId
        ngo {
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
        foodId
        food {
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
        status
        ngoAssociation {
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
  }
`;
export const syncReservationRequests = /* GraphQL */ `
  query SyncReservationRequests(
    $filter: ModelReservationRequestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReservationRequests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
        ngoId
        ngo {
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
        foodId
        food {
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
        status
        ngoAssociation {
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
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: String!) {
    getNotification(id: $id) {
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
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $id: String
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listNotifications(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
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
        ngoId
        ngo {
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
        volunteerId
        volunteer {
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
  }
`;
export const syncNotifications = /* GraphQL */ `
  query SyncNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
        ngoId
        ngo {
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
        volunteerId
        volunteer {
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
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: String!) {
    getPerson(id: $id) {
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
export const listPeople = /* GraphQL */ `
  query ListPeople(
    $id: String
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPeople(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        email
        phone
        notes {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPeople = /* GraphQL */ `
  query SyncPeople(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPeople(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        email
        phone
        notes {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNotes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const hotelsByUserId = /* GraphQL */ `
  query HotelsByUserId(
    $userId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    hotelsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const ngosByUserId = /* GraphQL */ `
  query NgosByUserId(
    $userId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNgoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ngosByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const ngoHotelsByHotelID = /* GraphQL */ `
  query NgoHotelsByHotelID(
    $hotelID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNgoHotelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ngoHotelsByHotelID(
      hotelID: $hotelID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hotelID
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
        ngoID
        ngo {
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
  }
`;
export const ngoHotelsByNgoID = /* GraphQL */ `
  query NgoHotelsByNgoID(
    $ngoID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNgoHotelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ngoHotelsByNgoID(
      ngoID: $ngoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        hotelID
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
        ngoID
        ngo {
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
  }
`;
export const volunteersByUserId = /* GraphQL */ `
  query VolunteersByUserId(
    $userId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelVolunteerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    volunteersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const volunteerNgosByVolunteerID = /* GraphQL */ `
  query VolunteerNgosByVolunteerID(
    $volunteerID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelVolunteerNgoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    volunteerNgosByVolunteerID(
      volunteerID: $volunteerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        volunteerID
        volunteer {
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
        ngoID
        ngo {
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
  }
`;
export const volunteerNgosByNgoID = /* GraphQL */ `
  query VolunteerNgosByNgoID(
    $ngoID: String!
    $sortDirection: ModelSortDirection
    $filter: ModelVolunteerNgoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    volunteerNgosByNgoID(
      ngoID: $ngoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        volunteerID
        volunteer {
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
        ngoID
        ngo {
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
  }
`;
export const foodsByHotelId = /* GraphQL */ `
  query FoodsByHotelId(
    $hotelId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    foodsByHotelId(
      hotelId: $hotelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const foodsByCategoryId = /* GraphQL */ `
  query FoodsByCategoryId(
    $categoryId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelFoodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    foodsByCategoryId(
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const reservationRequestsByHotelId = /* GraphQL */ `
  query ReservationRequestsByHotelId(
    $hotelId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelReservationRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reservationRequestsByHotelId(
      hotelId: $hotelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        ngoId
        ngo {
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
        foodId
        food {
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
        status
        ngoAssociation {
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
  }
`;
export const reservationRequestsByNgoId = /* GraphQL */ `
  query ReservationRequestsByNgoId(
    $ngoId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelReservationRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reservationRequestsByNgoId(
      ngoId: $ngoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        ngoId
        ngo {
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
        foodId
        food {
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
        status
        ngoAssociation {
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
  }
`;
export const reservationRequestsByFoodId = /* GraphQL */ `
  query ReservationRequestsByFoodId(
    $foodId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelReservationRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reservationRequestsByFoodId(
      foodId: $foodId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        ngoId
        ngo {
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
        foodId
        food {
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
        status
        ngoAssociation {
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
  }
`;
export const notificationsByHotelId = /* GraphQL */ `
  query NotificationsByHotelId(
    $hotelId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByHotelId(
      hotelId: $hotelId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        ngoId
        ngo {
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
        volunteerId
        volunteer {
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
  }
`;
export const notificationsByNgoId = /* GraphQL */ `
  query NotificationsByNgoId(
    $ngoId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByNgoId(
      ngoId: $ngoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        ngoId
        ngo {
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
        volunteerId
        volunteer {
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
  }
`;
export const notificationsByVolunteerId = /* GraphQL */ `
  query NotificationsByVolunteerId(
    $volunteerId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByVolunteerId(
      volunteerId: $volunteerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        ngoId
        ngo {
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
        volunteerId
        volunteer {
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
  }
`;
export const notesByPId = /* GraphQL */ `
  query NotesByPId(
    $pId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesByPId(
      pId: $pId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
