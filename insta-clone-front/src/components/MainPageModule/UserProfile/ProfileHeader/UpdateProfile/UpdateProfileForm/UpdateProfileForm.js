import React,{useState,useEffect} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useParams,useNavigate} from 'react-router-dom';
import { getProfileInfo } from "../../../../../../services/UserService";
import {Input} from "../../../../../UtilModule/Input/Input";
import  "./UpdateProfileForm.css";
import {ImageLoader} from "../../../../../UtilModule/ImageLoader/ImageLoader";
import { updateProfile } from "../../../../../../services/UserService";


const schema=yup.object().shape({
   
   profileName:yup.string().required("obavezno polje"),
   profilePicture:yup.string()

})

export const UpdateProfileForm=()=>{

   const{userName}=useParams();
   

  const [fileString,setFileString]=useState("");
  const[selectedImage,setSelectedImage]=useState(null);
  const[profileName,setProfileName]=useState("");
  const[profilePicture,setProfilePicture]=useState("");

  const navigate=useNavigate();
  

  useEffect(()=>{

  getProfileInfo(userName).then((res)=>{

       setProfileName(res.data.profileName);
       setProfilePicture(res.data.profilePicture);

  }).catch((err)=>{


        
  })
       
        
  },[])

  
  const onSubmit=(data)=>{
   
   const updatedProfile={

      userName:userName,
      profileName:data.profileName,
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
      <label htmlFor="profileName" className="form-label">Profile Name</label>
       <Input type={"text"} className="form-control" placeholder="profileName" name="profileName" register={register} errors={errors} defaultValue={profileName}  style={{width:'200px'}}  />
       </div>
         

       <div className="form-group">
      <button type="submit" className="btn btn-primary btn-block w-15">Update Profile</button>
      </div>
       </form>
       </div>
   )






};