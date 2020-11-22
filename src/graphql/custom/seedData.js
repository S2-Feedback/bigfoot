
import {createAddress, deleteAddress, createUser, createOrganization, deleteOrganization, deleteLocation, createLocation, createPhysician, createLookupCategory, createLookup} from '../mutations'
import {listAddresss,listLocations,listOrganizations} from '../queries'
import { runQuery } from "../../../src/apis/gql";
import { mdiArchiveArrowDown } from '@mdi/js';
export const seedData=async()=>{

   const addressId = await runQuery(listAddresss,{filter:{street:{eq:'1258 Robin Lane'}}})
    
   

   if (addressId.data.listAddresss.items[0]&&addressId.data.listAddresss.items[0].id){
        const id = addressId.data.listAddresss.items[0].id
        console.log('wtf',id)
        
        await runQuery(deleteAddress,{input: { id: id }});
   }

   let address = await runQuery(createAddress,{input:{
        street:"1258 Robin Lane",
        city:"Baton Rouge",
        state:"LA",
        zipCode:"75111",
        isActive:true
    }})
    let location1Address = await runQuery(createAddress,{input:{
        street:"907 Broad St",
        city:"Milford",
        state:"LA",
        zipCode:"75112",
        isActive:true
    }})
    let location2Address = await runQuery(createAddress,{input:{
        street:"874 Nexus Dr",
        city:"Stratford",
        state:"LA",
        zipCode:"75312",
        isActive:true
    }})


    const organizationId = await runQuery(listOrganizations,{filter:{name:{eq:'Bose Health System'}}})
    
    if (organizationId.data.listOrganizations.items[0]&&organizationId.data.listOrganizations.items[0].id){
         await runQuery(deleteOrganization,{input:{id:organizationId.data.listOrganizations.items[0].id}})
    }

    let organization = await runQuery(createOrganization,{input:{
        addressId: address.data.createAddress.id,
        name:'Bose Health System',
        isActive: true
    }})

    const locationIds = await runQuery(listLocations,{filter:{organizationId:{eq:organization.data.createOrganization.id}}}) 

    for (let i = 0; i < locationIds.data.listLocations.items.length; i++) {
        await runQuery(deleteLocation,{input:{id:locationIds.data.listLocations.items[i].id}})
    }

    const locationA = await runQuery(createLocation,{input:{
        organizationId: organization.data.createOrganization.id,
        addressId: location1Address.data.createAddress.id,
        description: 'Thompson Clinic',
        isActive: true
    }})
    const locationB = await runQuery(createLocation,{input:{
        organizationId: organization.data.createOrganization.id,
        addressId: location2Address.data.createAddress.id,
        description: 'Coleman & Sons',
        isActive: true
    }})
    await runQuery(createPhysician,{input:{
        organizationId: organization.data.createOrganization.id,
        name: 'Dr. Jack Johnson',
        isActive:true
    }})
    await runQuery(createPhysician,{input:{
        organizationId: organization.data.createOrganization.id,
        name: 'Dr. Daniel Jackson',
        isActive:true
    }})
    await runQuery(createPhysician,{input:{
        organizationId: organization.data.createOrganization.id,
        name: 'Dr. Samantha Carter',
        isActive:true
    }})
    
    let roleCategory = await runQuery(createLookupCategory,{input: {
        description:'Roles',
        isActive:true
    }})
    await runQuery(createLookup,{input:{
        categoryId: roleCategory.data.createLookupCategory.id,
        description: 'Site Administrator',
        isActive:true
    }})
    await runQuery(createLookup,{input:{
        categoryId: roleCategory.data.createLookupCategory.id,
        description: 'Read Only',
        isActive:true
    }})
    // await runQuery(createUser,{input:{
    //     locationId: locationA.data.createLocation.id,
    //     email: 'frankbenevento123@gmail.com',
    //     firstName:'pcp',
    //     lastName: 'pcp',
    //     phone:'(817)-598-5420'
    // }})


}