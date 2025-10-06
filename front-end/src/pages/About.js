import React,{ useEffect, useState }from "react";
import axios from "axios";

function About() {
  const [data,setData]=useState(null);

  useEffect(()=> {
    axios.get("http://localhost:5002/api/about")
      .then(res=>setData(res.data))
      .catch(err=>console.error(err));
  },[]);

  if (!data) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>About Us</h1>
      <img src={data.image} alt="About" style={{ maxWidth: "200px", borderRadius: "10px" }} />
      <h2>{data.name}</h2>
      <p>{data.bio}</p>
    </div>
  );
}



export default About;
