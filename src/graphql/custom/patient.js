export const listAllPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        patient_lastName
        patient_firstName
        patient_dob
        patient_street
        patient_city
        patient_state
        patient_status
        patient_email
        patient_phone
        patient_provider
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
