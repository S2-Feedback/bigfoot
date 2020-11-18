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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      name
      addressId
      isActive
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
      name
      addressId
      isActive
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
      name
      addressId
      isActive
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
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
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
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
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
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
