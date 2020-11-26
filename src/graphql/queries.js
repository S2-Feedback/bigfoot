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
      addressId
      organizationName
      isActive
      organizationAddress {
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
        organizationName
        isActive
        organizationAddress {
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
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      organizationId
      addressId
      locationDescription
      costCenterCode
      isActive
      locationOrganization {
        id
        addressId
        organizationName
        isActive
        organizationAddress {
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
      locationAddress {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        organizationId
        addressId
        locationDescription
        costCenterCode
        isActive
        locationOrganization {
          id
          addressId
          organizationName
          isActive
          createdAt
          updatedAt
        }
        locationAddress {
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
export const getReferral = /* GraphQL */ `
  query GetReferral($id: ID!) {
    getReferral(id: $id) {
      id
      referralUserId
      referredByUserId
      referringLocationId
      referralTypeId
      referredDate
      sendToEmailAddress
      referralName
      referringLocation {
        id
        organizationId
        addressId
        locationDescription
        costCenterCode
        isActive
        locationOrganization {
          id
          addressId
          organizationName
          isActive
          createdAt
          updatedAt
        }
        locationAddress {
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
      referringUser {
        id
        cognitoId
        addressId
        userTypeId
        firstName
        lastName
        dob
        email
        phone
        isActive
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
      referralType {
        id
        lookupCategoryId
        lookupCode
        lookupDescription
        isActive
        lookupCategory {
          id
          lookupCategoryDescription
          isActive
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listReferrals = /* GraphQL */ `
  query ListReferrals(
    $filter: ModelReferralFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReferrals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        referralUserId
        referredByUserId
        referringLocationId
        referralTypeId
        referredDate
        sendToEmailAddress
        referralName
        referringLocation {
          id
          organizationId
          addressId
          locationDescription
          costCenterCode
          isActive
          createdAt
          updatedAt
        }
        referringUser {
          id
          cognitoId
          addressId
          userTypeId
          firstName
          lastName
          dob
          email
          phone
          isActive
          createdAt
          updatedAt
        }
        referralType {
          id
          lookupCategoryId
          lookupCode
          lookupDescription
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
export const getLookupCategory = /* GraphQL */ `
  query GetLookupCategory($id: ID!) {
    getLookupCategory(id: $id) {
      id
      lookupCategoryDescription
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const listLookupCategorys = /* GraphQL */ `
  query ListLookupCategorys(
    $filter: ModelLookupCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLookupCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lookupCategoryDescription
        isActive
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLookup = /* GraphQL */ `
  query GetLookup($id: ID!) {
    getLookup(id: $id) {
      id
      lookupCategoryId
      lookupCode
      lookupDescription
      isActive
      lookupCategory {
        id
        lookupCategoryDescription
        isActive
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLookups = /* GraphQL */ `
  query ListLookups(
    $filter: ModelLookupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLookups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lookupCategoryId
        lookupCode
        lookupDescription
        isActive
        lookupCategory {
          id
          lookupCategoryDescription
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
      userTypeId
      firstName
      lastName
      dob
      email
      phone
      isActive
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
        userTypeId
        firstName
        lastName
        dob
        email
        phone
        isActive
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
export const getUserRole = /* GraphQL */ `
  query GetUserRole($id: ID!) {
    getUserRole(id: $id) {
      id
      userId
      luUserRoleId
      userRole {
        id
        lookupCategoryId
        lookupCode
        lookupDescription
        isActive
        lookupCategory {
          id
          lookupCategoryDescription
          isActive
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserRoles = /* GraphQL */ `
  query ListUserRoles(
    $filter: ModelUserRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        luUserRoleId
        userRole {
          id
          lookupCategoryId
          lookupCode
          lookupDescription
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
export const getAudit = /* GraphQL */ `
  query GetAudit($id: ID!) {
    getAudit(id: $id) {
      id
      luEventId
      initiatingUserId
      eventDate
      eventType {
        id
        lookupCategoryId
        lookupCode
        lookupDescription
        isActive
        lookupCategory {
          id
          lookupCategoryDescription
          isActive
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      initiatingUser {
        id
        cognitoId
        addressId
        userTypeId
        firstName
        lastName
        dob
        email
        phone
        isActive
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
      createdAt
      updatedAt
    }
  }
`;
export const listAudits = /* GraphQL */ `
  query ListAudits(
    $filter: ModelAuditFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAudits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        luEventId
        initiatingUserId
        eventDate
        eventType {
          id
          lookupCategoryId
          lookupCode
          lookupDescription
          isActive
          createdAt
          updatedAt
        }
        initiatingUser {
          id
          cognitoId
          addressId
          userTypeId
          firstName
          lastName
          dob
          email
          phone
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
export const getPatientChart = /* GraphQL */ `
  query GetPatientChart($id: ID!) {
    getPatientChart(id: $id) {
      id
      patientId
      visitDate
      patient {
        id
        patientUserId
        luStatusId
        locationId
        user {
          id
          cognitoId
          addressId
          userTypeId
          firstName
          lastName
          dob
          email
          phone
          isActive
          createdAt
          updatedAt
        }
        status {
          id
          lookupCategoryId
          lookupCode
          lookupDescription
          isActive
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      assignments {
        items {
          id
          patientId
          patientChartId
          assignedUserId
          isActive
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPatientCharts = /* GraphQL */ `
  query ListPatientCharts(
    $filter: ModelPatientChartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientCharts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        patientId
        visitDate
        patient {
          id
          patientUserId
          luStatusId
          locationId
          createdAt
          updatedAt
        }
        assignments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPatientAssignment = /* GraphQL */ `
  query GetPatientAssignment($id: ID!) {
    getPatientAssignment(id: $id) {
      id
      patientId
      patientChartId
      assignedUserId
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const listPatientAssignments = /* GraphQL */ `
  query ListPatientAssignments(
    $filter: ModelPatientAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatientAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        patientId
        patientChartId
        assignedUserId
        isActive
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
      patientUserId
      luStatusId
      locationId
      user {
        id
        cognitoId
        addressId
        userTypeId
        firstName
        lastName
        dob
        email
        phone
        isActive
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
      status {
        id
        lookupCategoryId
        lookupCode
        lookupDescription
        isActive
        lookupCategory {
          id
          lookupCategoryDescription
          isActive
          createdAt
          updatedAt
        }
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
        patientUserId
        luStatusId
        locationId
        user {
          id
          cognitoId
          addressId
          userTypeId
          firstName
          lastName
          dob
          email
          phone
          isActive
          createdAt
          updatedAt
        }
        status {
          id
          lookupCategoryId
          lookupCode
          lookupDescription
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
