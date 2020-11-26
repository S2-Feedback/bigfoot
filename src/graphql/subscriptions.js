/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateReferral = /* GraphQL */ `
  subscription OnCreateReferral {
    onCreateReferral {
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
export const onUpdateReferral = /* GraphQL */ `
  subscription OnUpdateReferral {
    onUpdateReferral {
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
export const onDeleteReferral = /* GraphQL */ `
  subscription OnDeleteReferral {
    onDeleteReferral {
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
export const onCreateLookupCategory = /* GraphQL */ `
  subscription OnCreateLookupCategory {
    onCreateLookupCategory {
      id
      lookupCategoryDescription
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLookupCategory = /* GraphQL */ `
  subscription OnUpdateLookupCategory {
    onUpdateLookupCategory {
      id
      lookupCategoryDescription
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLookupCategory = /* GraphQL */ `
  subscription OnDeleteLookupCategory {
    onDeleteLookupCategory {
      id
      lookupCategoryDescription
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLookup = /* GraphQL */ `
  subscription OnCreateLookup {
    onCreateLookup {
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
export const onUpdateLookup = /* GraphQL */ `
  subscription OnUpdateLookup {
    onUpdateLookup {
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
export const onDeleteLookup = /* GraphQL */ `
  subscription OnDeleteLookup {
    onDeleteLookup {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateUserRole = /* GraphQL */ `
  subscription OnCreateUserRole {
    onCreateUserRole {
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
export const onUpdateUserRole = /* GraphQL */ `
  subscription OnUpdateUserRole {
    onUpdateUserRole {
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
export const onDeleteUserRole = /* GraphQL */ `
  subscription OnDeleteUserRole {
    onDeleteUserRole {
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
export const onCreateAudit = /* GraphQL */ `
  subscription OnCreateAudit {
    onCreateAudit {
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
export const onUpdateAudit = /* GraphQL */ `
  subscription OnUpdateAudit {
    onUpdateAudit {
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
export const onDeleteAudit = /* GraphQL */ `
  subscription OnDeleteAudit {
    onDeleteAudit {
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
export const onCreatePatientChart = /* GraphQL */ `
  subscription OnCreatePatientChart {
    onCreatePatientChart {
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
export const onUpdatePatientChart = /* GraphQL */ `
  subscription OnUpdatePatientChart {
    onUpdatePatientChart {
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
export const onDeletePatientChart = /* GraphQL */ `
  subscription OnDeletePatientChart {
    onDeletePatientChart {
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
export const onCreatePatientAssignment = /* GraphQL */ `
  subscription OnCreatePatientAssignment {
    onCreatePatientAssignment {
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
export const onUpdatePatientAssignment = /* GraphQL */ `
  subscription OnUpdatePatientAssignment {
    onUpdatePatientAssignment {
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
export const onDeletePatientAssignment = /* GraphQL */ `
  subscription OnDeletePatientAssignment {
    onDeletePatientAssignment {
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
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
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
