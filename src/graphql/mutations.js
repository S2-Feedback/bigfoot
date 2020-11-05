/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      addressId
      name
      address {
        id
        street
        city
        state
        zipCode
        isfavorite
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      addressId
      name
      address {
        id
        street
        city
        state
        zipCode
        isfavorite
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      addressId
      name
      address {
        id
        street
        city
        state
        zipCode
        isfavorite
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
      isfavorite
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
      isfavorite
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
      isfavorite
      isActive
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
      organizationid
      addressId
      description
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
      organizationid
      addressId
      description
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
      organizationid
      addressId
      description
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
        isfavorite
        isActive
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
        isfavorite
        isActive
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
        isfavorite
        isActive
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStaffAssignment = /* GraphQL */ `
  mutation CreateStaffAssignment(
    $input: CreateStaffAssignmentInput!
    $condition: ModelStaffAssignmentConditionInput
  ) {
    createStaffAssignment(input: $input, condition: $condition) {
      id
      patientId
      staffId
      createdAt
      updatedAt
    }
  }
`;
export const updateStaffAssignment = /* GraphQL */ `
  mutation UpdateStaffAssignment(
    $input: UpdateStaffAssignmentInput!
    $condition: ModelStaffAssignmentConditionInput
  ) {
    updateStaffAssignment(input: $input, condition: $condition) {
      id
      patientId
      staffId
      createdAt
      updatedAt
    }
  }
`;
export const deleteStaffAssignment = /* GraphQL */ `
  mutation DeleteStaffAssignment(
    $input: DeleteStaffAssignmentInput!
    $condition: ModelStaffAssignmentConditionInput
  ) {
    deleteStaffAssignment(input: $input, condition: $condition) {
      id
      patientId
      staffId
      createdAt
      updatedAt
    }
  }
`;
export const createStaff = /* GraphQL */ `
  mutation CreateStaff(
    $input: CreateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    createStaff(input: $input, condition: $condition) {
      id
      userId
      locationId
      createdAt
      updatedAt
    }
  }
`;
export const updateStaff = /* GraphQL */ `
  mutation UpdateStaff(
    $input: UpdateStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    updateStaff(input: $input, condition: $condition) {
      id
      userId
      locationId
      createdAt
      updatedAt
    }
  }
`;
export const deleteStaff = /* GraphQL */ `
  mutation DeleteStaff(
    $input: DeleteStaffInput!
    $condition: ModelStaffConditionInput
  ) {
    deleteStaff(input: $input, condition: $condition) {
      id
      userId
      locationId
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
