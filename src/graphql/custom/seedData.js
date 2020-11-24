import {
  createAddress,
  deleteAddress,
  createUser,
  createOrganization,
  deleteOrganization,
  deleteLocation,
  createLocation,
  createPhysician,
  createLookupCategory,
  createLookup,
  deleteUser,
  deletePatient,
  createPatient,
  deleteLookup,
  deleteLookupCategory,
  createPatientChart,
  createPatientAssignment,
  deletePatientAssignment,
  deletePatientChart
} from "../mutations";
import {
  listAddresss,
  listLocations,
  listLookupCategorys,
  listLookups,
  listOrganizations,
  listPatientAssignments,
  listPatientCharts,
  listPatients,
  listUsers
} from "../queries";
import {listPatientChartWithDetails} from '../custom/patient'
import { runQuery } from "../../../src/apis/gql";

export const seedData = async () => {
  let didRunOnce = false;

  if (!didRunOnce) {
    const addressId = await runQuery(listAddresss, {
      filter: { street: { eq: "1258 Robin Lane" } }
    });
    for (let i = 0; i < addressId.data.listAddresss.items.length; i++) {
      await runQuery(deleteAddress, {
        input: { id: addressId.data.listAddresss.items[i].id }
      });
    }
    let address = await runQuery(createAddress, {
      input: {
        street: "1258 Robin Lane",
        city: "Baton Rouge",
        state: "LA",
        zipCode: "75111",
        isActive: true
      }
    });
    const addressId2 = await runQuery(listAddresss, {
      filter: { street: { eq: "907 Broad St" } }
    });
    for (let i = 0; i < addressId2.data.listAddresss.items.length; i++) {
      await runQuery(deleteAddress, {
        input: { id: addressId2.data.listAddresss.items[i].id }
      });
    }
    let location1Address = await runQuery(createAddress, {
      input: {
        street: "907 Broad St",
        city: "Milford",
        state: "LA",
        zipCode: "75112",
        isActive: true
      }
    });
    const addressId3 = await runQuery(listAddresss, {
      filter: { street: { eq: "874 Nexus Dr" } }
    });
    for (let i = 0; i < addressId3.data.listAddresss.items.length; i++) {
      await runQuery(deleteAddress, {
        input: { id: addressId3.data.listAddresss.items[i].id }
      });
    }
    let location2Address = await runQuery(createAddress, {
      input: {
        street: "874 Nexus Dr",
        city: "Stratford",
        state: "LA",
        zipCode: "75312",
        isActive: true
      }
    });
    const addressId4 = await runQuery(listAddresss, {
      filter: { street: { eq: "101 Elm Ave" } }
    });
    for (let i = 0; i < addressId4.data.listAddresss.items.length; i++) {
      await runQuery(deleteAddress, {
        input: { id: addressId4.data.listAddresss.items[i].id }
      });
    }
    let patient1Address = await runQuery(createAddress, {
      input: {
        street: "101 Elm Ave",
        city: "East HartFord",
        state: "LA",
        zipCode: "75311",
        isActive: true
      }
    });
    const addressId5 = await runQuery(listAddresss, {
      filter: { street: { eq: "8709 Spruce Rd" } }
    });
    for (let i = 0; i < addressId5.data.listAddresss.items.length; i++) {
      await runQuery(deleteAddress, {
        input: { id: addressId5.data.listAddresss.items[i].id }
      });
    }
    let patient2Address = await runQuery(createAddress, {
      input: {
        street: "8709 Spruce Rd",
        city: "New Haven",
        state: "LA",
        zipCode: "34552",
        isActive: true
      }
    });
    const addressId6 = await runQuery(listAddresss, {
      filter: { street: { eq: "5660 Fiber Optic Way" } }
    });
    for (let i = 0; i < addressId6.data.listAddresss.items.length; i++) {
      await runQuery(deleteAddress, {
        input: { id: addressId6.data.listAddresss.items[i].id }
      });
    }
    let patient3Address = await runQuery(createAddress, {
      input: {
        street: "5660 Fiber Optic Way",
        city: "East HartFord",
        state: "LA",
        zipCode: "75311",
        isActive: true
      }
    });
    const addressId7 = await runQuery(listAddresss, {
      filter: { street: { eq: "24 Iron Springs Rd" } }
    });
    for (let i = 0; i < addressId7.data.listAddresss.items.length; i++) {
      await runQuery(deleteAddress, {
        input: { id: addressId7.data.listAddresss.items[i].id }
      });
    }
    let patient4Address = await runQuery(createAddress, {
      input: {
        street: "24 Iron Springs Rd",
        city: "Fair Fax",
        state: "LA",
        zipCode: "34552",
        isActive: true
      }
    });
    const addressId8 = await runQuery(listAddresss, {
      filter: { street: { eq: "660 Space Freeway" } }
    });
    for (let i = 0; i < addressId8.data.listAddresss.items.length; i++) {
      await runQuery(deleteAddress, {
        input: { id: addressId8.data.listAddresss.items[i].id }
      });
    }
    let patient5Address = await runQuery(createAddress, {
      input: {
        street: "660 Space Freeway",
        city: "Santa Barbara",
        state: "LA",
        zipCode: "79311",
        isActive: true
      }
    });
    const addressId9 = await runQuery(listAddresss, {
      filter: { street: { eq: "874 Relative Way" } }
    });
    for (let i = 0; i < addressId9.data.listAddresss.items.length; i++) {
      await runQuery(deleteAddress, {
        input: { id: addressId9.data.listAddresss.items[i].id }
      });
    }
    let patient6Address = await runQuery(createAddress, {
      input: {
        street: "874 Relative Way",
        city: "Milford",
        state: "LA",
        zipCode: "34552",
        isActive: true
      }
    });

    const organizations = await runQuery(listOrganizations, {
      filter: { name: { eq: "Bose Health System" } }
    });
    for (
      let i = 0;
      i < organizations.data.listOrganizations.items.length;
      i++
    ) {
      const locations = await runQuery(listLocations, {
        filter: {
          organizationId: {
            eq: organizations.data.listOrganizations.items[i].id
          }
        }
      });
      for (let j = 0; j < locations.data.listLocations.items.length; j++) {
        const patients = await runQuery(listPatients, {
          filter: {
            locationId: { eq: locations.data.listLocations.items[j].id }
          }
        });
        for (let k = 0; k < patients.data.listPatients.items.length; k++) {
          await runQuery(deletePatient, {
            input: { id: patients.data.listPatients.items[k].id }
          });
        }
        await runQuery(deleteLocation, {
          input: { id: locations.data.listLocations.items[j].id }
        });
      }
      await runQuery(deleteOrganization, {
        input: { id: organizations.data.listOrganizations.items[i].id }
      });
    }

    let organization = await runQuery(createOrganization, {
      input: {
        addressId: address.data.createAddress.id,
        name: "Bose Health System",
        isActive: true
      }
    });

    const locationA = await runQuery(createLocation, {
      input: {
        organizationId: organization.data.createOrganization.id,
        addressId: location1Address.data.createAddress.id,
        description: "Thompson Clinic",
        isActive: true
      }
    });
    const locationB = await runQuery(createLocation, {
      input: {
        organizationId: organization.data.createOrganization.id,
        addressId: location2Address.data.createAddress.id,
        description: "Coleman & Sons",
        isActive: true
      }
    });

    const lookups = await runQuery(listLookups);
    console.log('lookups? ', lookups)
    const luCategories = await runQuery(listLookupCategorys);
    for (let i = 0; i < lookups.data.listLookups.items.length; i++) {
      await runQuery(deleteLookup, {
        input: { id: lookups.data.listLookups.items[i].id }
      });
    }
    for (
      let i = 0;
      i < luCategories.data.listLookupCategorys.items.length;
      i++
    ) {
      await runQuery(deleteLookupCategory, {
        input: { id: luCategories.data.listLookupCategorys.items[i].id }
      });
    }

    const patientStatusCategory = await runQuery(createLookupCategory, {
      input: { description: "Patient Status", isActive: true }
    });
    const patientStatusActive = await runQuery(createLookup, {
      input: {
        categoryId: patientStatusCategory.data.createLookupCategory.id,
        description: "Active",
        isActive: true
      }
    });
    const patientStatusInActive = await runQuery(createLookup, {
      input: {
        categoryId: patientStatusCategory.data.createLookupCategory.id,
        description: "InActive",
        isActive: true
      }
    });
    const patientStatusPsychReview = await runQuery(createLookup, {
      input: {
        categoryId: patientStatusCategory.data.createLookupCategory.id,
        description: "Psych Review",
        isActive: true
      }
    });
    const patientStatusNeedsReview = await runQuery(createLookup, {
      input: {
        categoryId: patientStatusCategory.data.createLookupCategory.id,
        description: "Needs Review",
        isActive: true
      }
    });
    const patientStatusNewPatient = await runQuery(createLookup, {
      input: {
        categoryId: patientStatusCategory.data.createLookupCategory.id,
        description: "New Patient",
        isActive: true
      }
    });
    const patientStatusPending = await runQuery(createLookup, {
      input: {
        categoryId: patientStatusCategory.data.createLookupCategory.id,
        description: "Pending",
        isActive: true
      }
    });

    let userTypeCategory = await runQuery(createLookupCategory, {
      input: { description: "User Types", isActive: true }
    });
    const userTypePatient = await runQuery(createLookup, {
      input: {
        categoryId: userTypeCategory.data.createLookupCategory.id,
        description: "Patient",
        isActive: true
      }
    });
    const userTypePsychiatrist = await runQuery(createLookup, {
      input: {
        categoryId: userTypeCategory.data.createLookupCategory.id,
        description: "Psychiatrist",
        isActive: true
      }
    });
    const userTypeCareManager = await runQuery(createLookup, {
      input: {
        categoryId: userTypeCategory.data.createLookupCategory.id,
        description: "CareManager",
        isActive: true
      }
    });
    const userTypePCPStaff = await runQuery(createLookup, {
      input: {
        categoryId: userTypeCategory.data.createLookupCategory.id,
        description: "PCP Staff",
        isActive: true
      }
    });
    const userTypePCP = await runQuery(createLookup, {
      input: {
        categoryId: userTypeCategory.data.createLookupCategory.id,
        description: "PCP",
        isActive: true
      }
    });

    let roleCategory = await runQuery(createLookupCategory, {
      input: {
        description: "Roles",
        isActive: true
      }
    });
    await runQuery(createLookup, {
      input: {
        categoryId: roleCategory.data.createLookupCategory.id,
        description: "Site Administrator",
        isActive: true
      }
    });
    await runQuery(createLookup, {
      input: {
        categoryId: roleCategory.data.createLookupCategory.id,
        description: "User",
        isActive: true
      }
    });

    const users = await runQuery(listUsers, {
      filter: { email: { eq: "frankbenevento123@gmail.com" } }
    });
    for (let i = 0; i < users.data.listUsers.items.length; i++) {
      await runQuery(deleteUser, {
        input: { id: users.data.listUsers.items[i].id }
      });
    }
    const patientUser1 = await runQuery(createUser, {
      input: {
        email: "frankbenevento123@gmail.com",
        firstName: "Patient 1",
        lastName: "location a",
        phone: "(817)-598-5420",
        addressId: patient1Address.data.createAddress.id,
        isActive: true,
        type: userTypePatient.data.createLookup.id
      }
    });
    const patientUser2 = await runQuery(createUser, {
      input: {
        email: "frankbenevento123@gmail.com",
        firstName: "Patient 2",
        lastName: "loc a",
        phone: "(213)-344-9988",
        addressId: patient2Address.data.createAddress.id,
        isActive: true,
        type: userTypePatient.data.createLookup.id
      }
    });
    const patientUser3 = await runQuery(createUser, {
      input: {
        email: "frankbenevento123@gmail.com",
        firstName: "Patient 3",
        lastName: "loca A",
        phone: "(212)-555-5220",
        addressId: patient3Address.data.createAddress.id,
        isActive: true,
        type: userTypePatient.data.createLookup.id
      }
    });
    const patientUser4 = await runQuery(createUser, {
      input: {
        email: "frankbenevento123@gmail.com",
        firstName: "Patient 4",
        lastName: "locatio B",
        phone: "(817)-598-5420",
        addressId: patient4Address.data.createAddress.id,
        isActive: true,
        type: userTypePatient.data.createLookup.id
      }
    });
    const patientUser5 = await runQuery(createUser, {
      input: {
        email: "frankbenevento123@gmail.com",
        firstName: "Patient 5",
        lastName: "locat B",
        phone: "(334)-565-5555",
        addressId: patient5Address.data.createAddress.id,
        isActive: true,
        type: userTypePatient.data.createLookup.id
      }
    });
    const patientUser6 = await runQuery(createUser, {
      input: {
        email: "frankbenevento123@gmail.com",
        firstName: "Patient 6",
        lastName: "locAtion B",
        phone: "(817)-522-3343",
        addressId: patient6Address.data.createAddress.id,
        isActive: true,
        type: userTypePatient.data.createLookup.id
      }
    });
    const physician = await runQuery(createUser, {
      input: {
        email: "frankbenevento123@gmail.com",
        firstName: "Phys",
        lastName: "Ician",
        phone: "(817)-598-5420",
        isActive: true,
        type: userTypePCP.data.createLookup.id
      }
    });
    const careManager = await runQuery(createUser, {
      input: {
        email: "frankbenevento123@gmail.com",
        firstName: "Care",
        lastName: "Manager",
        phone: "(817)-598-5420",
        type: userTypeCareManager.data.createLookup.id
      }
    });
    const psychiatrist = await runQuery(createUser, {
        input: {
          email: "frankbenevento123@gmail.com",
          firstName: "Psy",
          lastName: "Ciatrist",
          phone: "(817)-344-0098",
          type: userTypePsychiatrist.data.createLookup.id
        }
      });
  
    const patient1 = await runQuery(createPatient, {
      input: {
        patientUserId: patientUser1.data.createUser.id,
        luStatusId: "1",
        locationId: locationA.data.createLocation.id
      }
    });
    const patient2 = await runQuery(createPatient, {
      input: {
        patientUserId: patientUser2.data.createUser.id,
        luStatusId: "1",
        locationId: locationA.data.createLocation.id
      }
    });
    const patient3 = await runQuery(createPatient, {
      input: {
        patientUserId: patientUser3.data.createUser.id,
        luStatusId: "1",
        locationId: locationA.data.createLocation.id
      }
    });
    const patient4 = await runQuery(createPatient, {
      input: {
        patientUserId: patientUser4.data.createUser.id,
        luStatusId: "1",
        locationId: locationB.data.createLocation.id
      }
    });
    const patient5 = await runQuery(createPatient, {
      input: {
        patientUserId: patientUser5.data.createUser.id,
        luStatusId: "1",
        locationId: locationB.data.createLocation.id
      }
    });
    const patient6 = await runQuery(createPatient, {
      input: {
        patientUserId: patientUser6.data.createUser.id,
        luStatusId: "1",
        locationId: locationB.data.createLocation.id
      }
    });

    const patientAssignments  = await runQuery(listPatientAssignments)
    for (let i = 0; i < patientAssignments.data.listPatientAssignments.items.length; i++) {
        await runQuery(deletePatientAssignment,{input:{
            id: patientAssignments.data.listPatientAssignments.items[i].id      
        }})
    }
    const patientCharts = await runQuery(listPatientCharts)
    for (let i = 0; i < patientCharts.data.listPatientCharts.items.length; i++) {
        await runQuery(deletePatientChart,{input:{
            id:patientCharts.data.listPatientCharts.items[i].id
        }})
        
    }
    const patient1Chart = await runQuery(createPatientChart,{input:{
        patientId: patient1.data.createPatient.id,
        visitDate: new Date().toString()
    }})
    const physicianAssignment = await runQuery(createPatientAssignment,{input:{
        patientId: patient1.data.createPatient.id,
        patientChartId:patient1Chart.data.createPatientChart.id,
        assignedUserId: physician.data.createUser.id,
        isActive:true
    }})
    const careManagerAssignment = await runQuery(createPatientAssignment,{input:{
        patientId : patient1.data.createPatient.id,
        patientChartId:patient1Chart.data.createPatientChart.id,
        assignedUserId: careManager.data.createUser.id,
        isActive:true
    }})
    const psychiatristAssignment = await runQuery(createPatientAssignment,{input:{
        patientId : patient1.data.createPatient.id,
        patientChartId:patient1Chart.data.createPatientChart.id,
        assignedUserId: psychiatrist.data.createUser.id,
        isActive:true
    }})
    
    
    let a = await runQuery(listOrganizations);
    console.log("organization ------", a);
    let b = await runQuery(listLocations);
    console.log("locations ------", b);
    let c = await runQuery(listAddresss);
    console.log("addresses ------", c);
    let d = await runQuery(listUsers);
    console.log("users ------- ", d);
    let e = await runQuery(listPatients);
    console.log("patients ------- ", e);
    let f = await runQuery(listLookupCategorys);
    console.log("lookup categories ------- ", f);
    let g = await runQuery(listLookups);
    console.log("lookups ------", g);
    let h = await runQuery(listPatientChartWithDetails)
    console.log('patient-charts ------- ', h)
    let i = await runQuery(listPatientAssignments)
    console.log('patient assignments ------ ', i)
    didRunOnce = true;
  }
};
