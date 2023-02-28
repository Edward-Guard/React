import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {

    const [post,setPosts]= useState([])

    const getPost =async() =>{
        console.log("testando")
    }

    useEffect(()=>{
        getPost()
    },[])

  return (
    <div>Home</div>
  )
}

export default Home