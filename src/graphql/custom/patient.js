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
