
import {createAddress, deleteAddress, createOrganization, deleteOrganization} from '../mutations'
import {listAddresss,listOrganizations} from '../queries'
import { runQuery } from "../../../src/apis/gql";
export const seedData=async()=>{

   const addressId = await runQuery(listAddresss,{filter:{street:{eq:'1258 Robin Lane'}}})
   if (addressId.data.listAddresss.items[0]&&addressId.data.listAddresss.items[0].id){
        const id = addressId.data.listAddresss.items[0]
        await runQuery(deleteAddress,{filter:{id:{eq:id}}})
   }

   let address = await runQuery(createAddress,{input:{
        street:"1258 Robin Lane",
        city:"Baton Rouge",
        state:"LA",
        zipCode:"75111",
        isActive:true
    }})


    const organizationId = await runQuery(listOrganizations,{filter:{name:{eq:'Bose Health System'}}})
    if (organizationId.data.listOrganizations.items[0]&&organizationId.data.listOrganizations.items[0].id){
         const id = organizationId.data.listOrganizations.items[0]
         await runQuery(deleteOrganization,{filter:{id:{eq:id}}})
    }

    let organization = await runQuery(createOrganization,{input:{
        addressId: address.data.createAddress.id,
        name:'Bose Health System',
        isActive: true
    }})






}