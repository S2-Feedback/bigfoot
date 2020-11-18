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
      name
      addressId
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
      name
      addressId
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
      name
      addressId
      isActive
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePhysician = /* GraphQL */ `
  subscription OnCreatePhysician {
    onCreatePhysician {
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
export const onUpdatePhysician = /* GraphQL */ `
  subscription OnUpdatePhysician {
    onUpdatePhysician {
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
export const onDeletePhysician = /* GraphQL */ `
  subscription OnDeletePhysician {
    onDeletePhysician {
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
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
