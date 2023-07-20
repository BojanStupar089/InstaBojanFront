import React,{useState,useEffect} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {useParams,useNavigate} from "react-router-dom";
import { getOnePost, updatePost } from "../../../../services/PostService";
import {Input} from "..//..//..//UtilModule/Input/Input";
import "./UpdatePostForm.css";




  const schemaa=yup.object().shape({

     
      text:yup.string()
  })

  

  

  


export const UpdatePostForm=()=>{

    const[picture,setPicture]=useState();
    const[text,setText]=useState();

  const{postId}=useParams();
  const navigate=useNavigate();

  
  useEffect(()=>{

   getOnePost(postId).then((res)=>{

      setPicture(res.data.picture);
      setText(res.data.text);

   }).catch((err)=>{

     console.log(JSON.stringify(err)); 

   })
   },[])

   const onSubmit=(data)=>{

      const updatedPost={

        picture:undefined,
        text:data.text
        
      };

      updatedPost.picture=picture;

      updatePost(postId,updatedPost).then((res)=>{

        navigate("/home");
      }).catch((err)=>{

        console.error('Error updating profile',err);
      })

   }

   const{register,handleSubmit,formState:{errors},}=useForm({resolver:yupResolver(schemaa),});

    return(

        <div>
          
         
          <div className="form-container">
         
          <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Update Post Form</h1>
          <div className='my-img-container' >
          <img className='my-img' alt='img' src={picture} ></img>
        </div>
           {/*<input type="text"  name="text" defaultValue={text}/>*/}
          <Input type={text} className="form-control" placeholder="text" name="text" register={register} errors={errors} defaultValue={text} style={{width:'200px'}}/>
            

          <div className="form-group">
       <button type="submit" className="btn btn-primary btn-block w-15 update-profile-btn">Update Post</button>
      </div>
          </form>
           

          </div>

        </div>
    )
}