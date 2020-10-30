export const listAllPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lastName
        firstName
        dob
        street
        city
        state
        status
        email
        phone
        provider
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelStaffConditionInput
  ) {
    createStaff(input: $input, condition: $condition) {
      id
      clinicId
      userId
      current
    }
  }
`;