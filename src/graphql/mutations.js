/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
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
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
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
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
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
