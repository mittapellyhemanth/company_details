import React from 'react'
import ReUseForm from '../../Forms/ReUseForm'

export default function AddProjects(){

const input = [
     {
        type: "text",
        placeholder: "PROJECT NAME",
        name: "projectName",
        required: true,
      },
      {
        type: "text",
        placeholder: "WEBSITEADDRESS",
        name: "websiteAddress",
        required: true,
      },
      {
        type: "text",
        placeholder: "CLIENT NAME",
        name: "clientName",
        required: true,
      },
      {
        type: "text",
        placeholder: "START DATE",
        name: "startDate",
        required: true,
      },
      {
        type: "text",
        placeholder: "MONTHLY PRICE",
        name: "monthlyPrice",
        required: true,
        },
      {
        type: "text",
        placeholder: "EMPLOYEE ALLOTED",
       name: "employeeAlloted",
        required: true,
      },
]

const onSubmit =({...formData})=>{
console.log({...formData});
}
    return <>
    <ReUseForm inputs={input} onSubmit={onSubmit} btnText='Submit' />
    </>
}
