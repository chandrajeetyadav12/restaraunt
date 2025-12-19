"use client"
import ChefDetails1 from '@/app/Components/ChefDetails/ChefDetails1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
// import Team5 from '@/app/Components/Team/Team5';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useParams } from "next/navigation";
const page = () => {
  const [chefData,setChefData]=useState([])
  const params = useParams();
  const { chefId } = params;
  useEffect(()=>{
     const getCheftById=async ()=>{
      const res=await axios.get(`http://localhost:3000/api/chefProfile/${chefId}`)
      console.log(res)
      setChefData(res.data)
     }
     getCheftById()
  },[])
  // console.log(chefData)
  // const [address]=chefData
  // const [ chef] = chefData;
  // console.log("chef datat",chef.address)
  return (
    <div>
             <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Chef Details"
            ></BreadCumb>
            <ChefDetails1 chefData={chefData}></ChefDetails1> 
            {/* <Team5></Team5>         */}
    </div>
  );
};

export default page;