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
      name
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization {
    onUpdateOrganization {
      id
      addressId
      name
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization {
    onDeleteOrganization {
      id
      addressId
      name
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      organizationId
      addressId
      description
      costCenterCode
      isActive
      organization {
        id
        addressId
        name
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      organizationId
      addressId
      description
      costCenterCode
      isActive
      organization {
        id
        addressId
        name
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      organizationId
      addressId
      description
      costCenterCode
      isActive
      organization {
        id
        addressId
        name
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
export const onCreatePatientReferral = /* GraphQL */ `
  subscription OnCreatePatientReferral {
    onCreatePatientReferral {
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
        firstName
        lastName
        dob
        email
        phone
        type
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
export const onUpdatePatientReferral = /* GraphQL */ `
  subscription OnUpdatePatientReferral {
    onUpdatePatientReferral {
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
        firstName
        lastName
        dob
        email
        phone
        type
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
export const onDeletePatientReferral = /* GraphQL */ `
  subscription OnDeletePatientReferral {
    onDeletePatientReferral {
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
        firstName
        lastName
        dob
        email
        phone
        type
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
        status {
          id
          categoryId
          code
          description
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
        status {
          id
          categoryId
          code
          description
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
        status {
          id
          categoryId
          code
          description
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
        firstName
        lastName
        dob
        email
        phone
        type
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
        categoryId
        code
        description
        isActive
        LookupCategory {
          id
          description
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
        firstName
        lastName
        dob
        email
        phone
        type
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
        categoryId
        code
        description
        isActive
        LookupCategory {
          id
          description
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
        firstName
        lastName
        dob
        email
        phone
        type
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
        categoryId
        code
        description
        isActive
        LookupCategory {
          id
          description
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
export const onCreateStaffLocationAssignment = /* GraphQL */ `
  subscription OnCreateStaffLocationAssignment {
    onCreateStaffLocationAssignment {
      id
      staffMemberId
      locationId
      isPermanent
      startDate
      startTime
      endDate
      endTime
      staffMember {
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
      location {
        id
        organizationId
        addressId
        description
        costCenterCode
        isActive
        organization {
          id
          addressId
          name
          isActive
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStaffLocationAssignment = /* GraphQL */ `
  subscription OnUpdateStaffLocationAssignment {
    onUpdateStaffLocationAssignment {
      id
      staffMemberId
      locationId
      isPermanent
      startDate
      startTime
      endDate
      endTime
      staffMember {
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
      location {
        id
        organizationId
        addressId
        description
        costCenterCode
        isActive
        organization {
          id
          addressId
          name
          isActive
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStaffLocationAssignment = /* GraphQL */ `
  subscription OnDeleteStaffLocationAssignment {
    onDeleteStaffLocationAssignment {
      id
      staffMemberId
      locationId
      isPermanent
      startDate
      startTime
      endDate
      endTime
      staffMember {
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
      location {
        id
        organizationId
        addressId
        description
        costCenterCode
        isActive
        organization {
          id
          addressId
          name
          isActive
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
      firstName
      lastName
      dob
      email
      phone
      type
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
      firstName
      lastName
      dob
      email
      phone
      type
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
      firstName
      lastName
      dob
      email
      phone
      type
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
      luRoleId
      role {
        id
        categoryId
        code
        description
        isActive
        LookupCategory {
          id
          description
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
      luRoleId
      role {
        id
        categoryId
        code
        description
        isActive
        LookupCategory {
          id
          description
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
      luRoleId
      role {
        id
        categoryId
        code
        description
        isActive
        LookupCategory {
          id
          description
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
      event {
        id
        categoryId
        code
        description
        isActive
        LookupCategory {
          id
          description
          isActive
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      initiatedBy {
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
      event {
        id
        categoryId
        code
        description
        isActive
        LookupCategory {
          id
          description
          isActive
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      initiatedBy {
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
      event {
        id
        categoryId
        code
        description
        isActive
        LookupCategory {
          id
          description
          isActive
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      initiatedBy {
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
export const onCreateLookupCategory = /* GraphQL */ `
  subscription OnCreateLookupCategory {
    onCreateLookupCategory {
      id
      description
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
      description
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
      description
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
      categoryId
      code
      description
      isActive
      LookupCategory {
        id
        description
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
      categoryId
      code
      description
      isActive
      LookupCategory {
        id
        description
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
      categoryId
      code
      description
      isActive
      LookupCategory {
        id
        description
        isActive
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
