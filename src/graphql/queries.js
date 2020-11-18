/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      street
      city
      state
      zipCode
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        street
        city
        state
        zipCode
        isActive
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      addressId
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        addressId
        isActive
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPhysician = /* GraphQL */ `
  query GetPhysician($id: ID!) {
    getPhysician(id: $id) {
      id
      organizationId
      name
      isActive
      organization {
        id
        name
        addressId
        isActive
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPhysicians = /* GraphQL */ `
  query ListPhysicians(
    $filter: ModelPhysicianFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhysicians(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        organizationId
        name
        isActive
        organization {
          id
          name
          addressId
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
export const getPatientReferral = /* GraphQL */ `
  query GetPatientReferral($id: ID!) {
    getPatientReferral(id: $id) {
      id
      patientId
      referredBy
      referredDate
      patientEmail
      patientName
      patientReferrer {
        id
        cognitoId
        addressId
        organizationId
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
      createdAt
      updatedAt
    }
  }
`;
export const listPatientReferrals = /* GraphQL */ `
  query ListPatientReferrals(
    $filter: ModelPatientReferralFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientReferrals(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patientId
        referredBy
        referredDate
        patientEmail
        patientName
        patientReferrer {
          id
          cognitoId
          addressId
          organizationId
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
      id
      patientId
      physicianId
      careManagerId
      psychiatristId
      patient {
        id
        cognitoId
        addressId
        organizationId
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
        patientId
        physicianId
        careManagerId
        psychiatristId
        patient {
          id
          cognitoId
          addressId
          organizationId
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognitoId
      addressId
      organizationId
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
  }
`;
export const listUsers = /* GraphQL */ `
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
        organizationId
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
