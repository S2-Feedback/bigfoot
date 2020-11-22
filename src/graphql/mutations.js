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
        firstName
        lastName
        dob
        email
        phone
        type
        isActive
        locationAssignments {
          nextToken
        }
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
        firstName
        lastName
        dob
        email
        phone
        type
        isActive
        locationAssignments {
          nextToken
        }
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
        firstName
        lastName
        dob
        email
        phone
        type
        isActive
        locationAssignments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPatientChart = /* GraphQL */ `
  mutation CreatePatientChart(
    $input: CreatePatientChartInput!
    $condition: ModelPatientChartConditionInput
  ) {
    createPatientChart(input: $input, condition: $condition) {
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
      careGivers {
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
export const updatePatientChart = /* GraphQL */ `
  mutation UpdatePatientChart(
    $input: UpdatePatientChartInput!
    $condition: ModelPatientChartConditionInput
  ) {
    updatePatientChart(input: $input, condition: $condition) {
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
      careGivers {
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
export const deletePatientChart = /* GraphQL */ `
  mutation DeletePatientChart(
    $input: DeletePatientChartInput!
    $condition: ModelPatientChartConditionInput
  ) {
    deletePatientChart(input: $input, condition: $condition) {
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
      careGivers {
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
export const createPatientAssignment = /* GraphQL */ `
  mutation CreatePatientAssignment(
    $input: CreatePatientAssignmentInput!
    $condition: ModelPatientAssignmentConditionInput
  ) {
    createPatientAssignment(input: $input, condition: $condition) {
      id
      patientId
      patientChartId
      assignedUserId
      isActive
      patientChart {
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
        careGivers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePatientAssignment = /* GraphQL */ `
  mutation UpdatePatientAssignment(
    $input: UpdatePatientAssignmentInput!
    $condition: ModelPatientAssignmentConditionInput
  ) {
    updatePatientAssignment(input: $input, condition: $condition) {
      id
      patientId
      patientChartId
      assignedUserId
      isActive
      patientChart {
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
        careGivers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePatientAssignment = /* GraphQL */ `
  mutation DeletePatientAssignment(
    $input: DeletePatientAssignmentInput!
    $condition: ModelPatientAssignmentConditionInput
  ) {
    deletePatientAssignment(input: $input, condition: $condition) {
      id
      patientId
      patientChartId
      assignedUserId
      isActive
      patientChart {
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
        careGivers {
          nextToken
        }
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
        locationAssignments {
          nextToken
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
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
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
        locationAssignments {
          nextToken
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
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
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
        locationAssignments {
          nextToken
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
export const createStaffLocationAssignment = /* GraphQL */ `
  mutation CreateStaffLocationAssignment(
    $input: CreateStaffLocationAssignmentInput!
    $condition: ModelStaffLocationAssignmentConditionInput
  ) {
    createStaffLocationAssignment(input: $input, condition: $condition) {
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
        locationAssignments {
          nextToken
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
      assignment {
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
        locationAssignments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateStaffLocationAssignment = /* GraphQL */ `
  mutation UpdateStaffLocationAssignment(
    $input: UpdateStaffLocationAssignmentInput!
    $condition: ModelStaffLocationAssignmentConditionInput
  ) {
    updateStaffLocationAssignment(input: $input, condition: $condition) {
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
        locationAssignments {
          nextToken
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
      assignment {
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
        locationAssignments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteStaffLocationAssignment = /* GraphQL */ `
  mutation DeleteStaffLocationAssignment(
    $input: DeleteStaffLocationAssignmentInput!
    $condition: ModelStaffLocationAssignmentConditionInput
  ) {
    deleteStaffLocationAssignment(input: $input, condition: $condition) {
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
        locationAssignments {
          nextToken
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
      assignment {
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
        locationAssignments {
          nextToken
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
      firstName
      lastName
      dob
      email
      phone
      type
      isActive
      locationAssignments {
        items {
          id
          staffMemberId
          locationId
          isPermanent
          startDate
          startTime
          endDate
          endTime
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
      type
      isActive
      locationAssignments {
        items {
          id
          staffMemberId
          locationId
          isPermanent
          startDate
          startTime
          endDate
          endTime
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
      type
      isActive
      locationAssignments {
        items {
          id
          staffMemberId
          locationId
          isPermanent
          startDate
          startTime
          endDate
          endTime
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
        firstName
        lastName
        dob
        email
        phone
        type
        isActive
        locationAssignments {
          nextToken
        }
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
        firstName
        lastName
        dob
        email
        phone
        type
        isActive
        locationAssignments {
          nextToken
        }
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
        firstName
        lastName
        dob
        email
        phone
        type
        isActive
        locationAssignments {
          nextToken
        }
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
