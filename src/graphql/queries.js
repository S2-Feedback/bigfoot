/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
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
      careGiver_lastName
      careGiver_firstName
      careGiver_dob
      careGiver_street
      careGiver_city
      careGiver_state
      careGiver_status
      careGiver_email
      careGiver_phone
      careGiver_provider
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
        careGiver_lastName
        careGiver_firstName
        careGiver_dob
        careGiver_street
        careGiver_city
        careGiver_state
        careGiver_status
        careGiver_email
        careGiver_phone
        careGiver_provider
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
