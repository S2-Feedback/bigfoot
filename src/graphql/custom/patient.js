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

export const listPatientChartWithDetails = /* GraphQL */ `
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
          items {
            id
            patientId
            patientChartId
            assignedUserId
          }
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

export const selectAllPatientsWithStatus = /* GraphQL */ `
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
            }
          }
          luStatusId
          status {
            id
            categoryId
            code
            description
            isActive
          }
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
