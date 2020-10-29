/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
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
  }
`;
export const listPatients = /* GraphQL */ `
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
