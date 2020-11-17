export const listAllPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          cognitoId
          addressId
          firstName
          lastName
          dob
          email
          phone
          type
          isActive
          createdAt
          updatedAt
        }
        address {
          id
          street
          city
          state
          zipCode
          isActive
          createdAt
          updatedAt
        }        
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const listUsersByCognitoId = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoId
        addressId
        firstName
        lastName
        dob
        email
        phone
        type
        isActive
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
