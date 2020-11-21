/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createPhysician = /* GraphQL */ `
  mutation CreatePhysician(
    $input: CreatePhysicianInput!
    $condition: ModelPhysicianConditionInput
  ) {
    createPhysician(input: $input, condition: $condition) {
      id
      organizationId
      name
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
      createdAt
      updatedAt
    }
  }
`;
export const updatePhysician = /* GraphQL */ `
  mutation UpdatePhysician(
    $input: UpdatePhysicianInput!
    $condition: ModelPhysicianConditionInput
  ) {
    updatePhysician(input: $input, condition: $condition) {
      id
      organizationId
      name
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
      createdAt
      updatedAt
    }
  }
`;
export const deletePhysician = /* GraphQL */ `
  mutation DeletePhysician(
    $input: DeletePhysicianInput!
    $condition: ModelPhysicianConditionInput
  ) {
    deletePhysician(input: $input, condition: $condition) {
      id
      organizationId
      name
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
      createdAt
      updatedAt
    }
  }
`;
export const createPatientReferral = /* GraphQL */ `
  mutation CreatePatientReferral(
    $input: CreatePatientReferralInput!
    $condition: ModelPatientReferralConditionInput
  ) {
    createPatientReferral(input: $input, condition: $condition) {
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
        locationId
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
export const updatePatientReferral = /* GraphQL */ `
  mutation UpdatePatientReferral(
    $input: UpdatePatientReferralInput!
    $condition: ModelPatientReferralConditionInput
  ) {
    updatePatientReferral(input: $input, condition: $condition) {
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
        locationId
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
export const deletePatientReferral = /* GraphQL */ `
  mutation DeletePatientReferral(
    $input: DeletePatientReferralInput!
    $condition: ModelPatientReferralConditionInput
  ) {
    deletePatientReferral(input: $input, condition: $condition) {
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
        locationId
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
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      userId
      luStatusId
      physicianId
      careManagerId
      psychiatristId
      locationId
      user {
        id
        cognitoId
        addressId
        locationId
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
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      userId
      luStatusId
      physicianId
      careManagerId
      psychiatristId
      locationId
      user {
        id
        cognitoId
        addressId
        locationId
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
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      userId
      luStatusId
      physicianId
      careManagerId
      psychiatristId
      locationId
      user {
        id
        cognitoId
        addressId
        locationId
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      cognitoId
      addressId
      locationId
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      cognitoId
      addressId
      locationId
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      cognitoId
      addressId
      locationId
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
export const createUserRole = /* GraphQL */ `
  mutation CreateUserRole(
    $input: CreateUserRoleInput!
    $condition: ModelUserRoleConditionInput
  ) {
    createUserRole(input: $input, condition: $condition) {
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
export const updateUserRole = /* GraphQL */ `
  mutation UpdateUserRole(
    $input: UpdateUserRoleInput!
    $condition: ModelUserRoleConditionInput
  ) {
    updateUserRole(input: $input, condition: $condition) {
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
export const deleteUserRole = /* GraphQL */ `
  mutation DeleteUserRole(
    $input: DeleteUserRoleInput!
    $condition: ModelUserRoleConditionInput
  ) {
    deleteUserRole(input: $input, condition: $condition) {
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
export const createAudit = /* GraphQL */ `
  mutation CreateAudit(
    $input: CreateAuditInput!
    $condition: ModelAuditConditionInput
  ) {
    createAudit(input: $input, condition: $condition) {
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
        locationId
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
export const updateAudit = /* GraphQL */ `
  mutation UpdateAudit(
    $input: UpdateAuditInput!
    $condition: ModelAuditConditionInput
  ) {
    updateAudit(input: $input, condition: $condition) {
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
        locationId
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
export const deleteAudit = /* GraphQL */ `
  mutation DeleteAudit(
    $input: DeleteAuditInput!
    $condition: ModelAuditConditionInput
  ) {
    deleteAudit(input: $input, condition: $condition) {
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
        locationId
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
export const createLookupCategory = /* GraphQL */ `
  mutation CreateLookupCategory(
    $input: CreateLookupCategoryInput!
    $condition: ModelLookupCategoryConditionInput
  ) {
    createLookupCategory(input: $input, condition: $condition) {
      id
      description
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const updateLookupCategory = /* GraphQL */ `
  mutation UpdateLookupCategory(
    $input: UpdateLookupCategoryInput!
    $condition: ModelLookupCategoryConditionInput
  ) {
    updateLookupCategory(input: $input, condition: $condition) {
      id
      description
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const deleteLookupCategory = /* GraphQL */ `
  mutation DeleteLookupCategory(
    $input: DeleteLookupCategoryInput!
    $condition: ModelLookupCategoryConditionInput
  ) {
    deleteLookupCategory(input: $input, condition: $condition) {
      id
      description
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const createLookup = /* GraphQL */ `
  mutation CreateLookup(
    $input: CreateLookupInput!
    $condition: ModelLookupConditionInput
  ) {
    createLookup(input: $input, condition: $condition) {
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
export const updateLookup = /* GraphQL */ `
  mutation UpdateLookup(
    $input: UpdateLookupInput!
    $condition: ModelLookupConditionInput
  ) {
    updateLookup(input: $input, condition: $condition) {
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
export const deleteLookup = /* GraphQL */ `
  mutation DeleteLookup(
    $input: DeleteLookupInput!
    $condition: ModelLookupConditionInput
  ) {
    deleteLookup(input: $input, condition: $condition) {
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
