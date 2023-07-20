import React,{useState,useEffect} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useParams,useNavigate} from 'react-router-dom';
import { getProfileInfo } from "../../../../../../services/UserService";
import {Input} from "../../../../../UtilModule/Input/Input";
import  "./UpdateProfileForm.css";
import {ImageLoader} from "../../../../../UtilModule/ImageLoader/ImageLoader";
import useProfileHeader from "../../../../../../helpers/hooks/useProfileHeader";
import { updateProfile } from "../../../../../../services/UserService";


const schema=yup.object().shape({

  // userName:yup.string().required("obavezno polje"),
   name:yup.string().required("obavezno polje"),
   profilePicture:yup.string()

})

export const UpdateProfileForm=()=>{

   const{userName}=useParams();
   

  const [fileString,setFileString]=useState("");
  const[selectedImage,setSelectedImage]=useState(null);
  const[name,setName]=useState("");
  const[profilePicture,setProfilePicture]=useState("");

  const navigate=useNavigate();
  

  useEffect(()=>{

  getProfileInfo(userName).then((res)=>{

       setName(res.data.name);
       setProfilePicture(res.data.profilePicture);

  }).catch((err)=>{


        
  })
       
        
  },[])

  
  const onSubmit=(data)=>{
   
   const updatedProfile={

      //userName:data.userName,
      userName:userName,
      name:data.name,
      profilePicture:fileString||profilePicture
   };
     updateProfile(userName,updatedProfile).then((res)=>{
     navigate("/home");
     }).catch((err)=>{

         console.error('Error updating profile',err);
     })   
    
  }
  

  const{register,handleSubmit,formState:{errors},}=useForm({resolver:yupResolver(schema),});

   

   const handleImageSelect=(fileString)=>{

      setFileString(fileString);
      
      setSelectedImage(fileString);
      
   }

   return(
       <div className="form-container">
       
         
      <form onSubmit={handleSubmit(onSubmit)}  >
      
      <div className="img-cont">
         <img className="prof-img" src={selectedImage||profilePicture} alt="profile picture" />
        </div>
      
        <ImageLoader setFileString={handleImageSelect} title="Profilna slika" />
        
     
   

       <div className="col">
         {/*
       <label htmlFor="userName" className="form-label">Username</label>
   <Input type={"text"} className="form-control" placeholder="Username" name="userName" register={register} errors={errors}  defaultValue={userName} style={{width:'200px'}}/>*/}
        <label htmlFor="name" className="form-label">Profile Name</label>
       <Input type={"text"} className="form-control" placeholder="profileName" name="name" register={register} errors={errors} defaultValue={name}  style={{width:'200px'}}  />
       </div>
         

       <div className="form-group">
      <button type="submit" className="btn btn-primary btn-block w-15">Update Profile</button>
      </div>
       </form>
       </div>
   )






};