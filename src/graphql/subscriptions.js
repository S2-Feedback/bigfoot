/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization {
    onCreateOrganization {
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
      isActive
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
      isActive
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
      isActive
      createdAt
      updatedAt
    }
  }
`;
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      organizationid
      addressId
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
      id
      organizationid
      addressId
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
      id
      organizationid
      addressId
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
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
        type
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
  }
`;
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
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
        type
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
  }
`;
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
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
        type
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
  }
`;
export const onCreateStaffAssignment = /* GraphQL */ `
  subscription OnCreateStaffAssignment {
    onCreateStaffAssignment {
      id
      patientId
      staffId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStaffAssignment = /* GraphQL */ `
  subscription OnUpdateStaffAssignment {
    onUpdateStaffAssignment {
      id
      patientId
      staffId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStaffAssignment = /* GraphQL */ `
  subscription OnDeleteStaffAssignment {
    onDeleteStaffAssignment {
      id
      patientId
      staffId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStaff = /* GraphQL */ `
  subscription OnCreateStaff {
    onCreateStaff {
      id
      userId
      locationId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStaff = /* GraphQL */ `
  subscription OnUpdateStaff {
    onUpdateStaff {
      id
      userId
      locationId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStaff = /* GraphQL */ `
  subscription OnDeleteStaff {
    onDeleteStaff {
      id
      userId
      locationId
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAssessmentQuestion = /* GraphQL */ `
  subscription OnCreateAssessmentQuestion {
    onCreateAssessmentQuestion {
      id
      assessmentId
      questionId
      answerId
      sequenceNumber
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAssessmentQuestion = /* GraphQL */ `
  subscription OnUpdateAssessmentQuestion {
    onUpdateAssessmentQuestion {
      id
      assessmentId
      questionId
      answerId
      sequenceNumber
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAssessmentQuestion = /* GraphQL */ `
  subscription OnDeleteAssessmentQuestion {
    onDeleteAssessmentQuestion {
      id
      assessmentId
      questionId
      answerId
      sequenceNumber
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
      id
      answerText
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
      id
      answerText
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
      id
      answerText
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      questionText
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      questionText
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      questionText
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAssessment = /* GraphQL */ `
  subscription OnCreateAssessment {
    onCreateAssessment {
      id
      title
      questions {
        items {
          id
          assessmentId
          questionId
          answerId
          sequenceNumber
          isActive
          createdAt
          updatedAt
        }
        nextToken
      }
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAssessment = /* GraphQL */ `
  subscription OnUpdateAssessment {
    onUpdateAssessment {
      id
      title
      questions {
        items {
          id
          assessmentId
          questionId
          answerId
          sequenceNumber
          isActive
          createdAt
          updatedAt
        }
        nextToken
      }
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAssessment = /* GraphQL */ `
  subscription OnDeleteAssessment {
    onDeleteAssessment {
      id
      title
      questions {
        items {
          id
          assessmentId
          questionId
          answerId
          sequenceNumber
          isActive
          createdAt
          updatedAt
        }
        nextToken
      }
      isActive
      createdAt
      updatedAt
    }
  }
`;
