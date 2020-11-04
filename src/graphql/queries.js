/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      addressId
      name
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
      locations {
        items {
          id
          organizationid
          addressId
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      status
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
        addressId
        name
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
        locations {
          nextToken
        }
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
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
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      organizationid
      addressId
      description
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        organizationid
        addressId
        description
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
      locationId
      userId
      user {
        id
        cognitoId
        addressId
        firstName
        lastName
        dob
        email
        phone
        status
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
        locationId
        userId
        user {
          id
          cognitoId
          addressId
          firstName
          lastName
          dob
          email
          phone
          status
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
export const getStaffAssignment = /* GraphQL */ `
  query GetStaffAssignment($id: ID!) {
    getStaffAssignment(id: $id) {
      id
      patientId
      staffId
      createdAt
      updatedAt
    }
  }
`;
export const listStaffAssignments = /* GraphQL */ `
  query ListStaffAssignments(
    $filter: ModelStaffAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patientId
        staffId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStaff = /* GraphQL */ `
  query GetStaff($id: ID!) {
    getStaff(id: $id) {
      id
      userId
      locationId
      createdAt
      updatedAt
    }
  }
`;
export const listStaffs = /* GraphQL */ `
  query ListStaffs(
    $filter: ModelStaffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        locationId
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
      firstName
      lastName
      dob
      email
      phone
      status
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
        firstName
        lastName
        dob
        email
        phone
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
