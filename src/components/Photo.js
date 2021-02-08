import React, { useState, useEffect } from "react";
import "./App.css";git 
import axios from "axios";

function Photo() {
    const [picture, setPicture] = useState([]);
  
    useEffect(() => {
      const info = axios
      .get('https://api.nasa.gov/planetary/apod?api_key=ZrZ65g5YPadjo7KvnT1dXIKSGZuc2Y2Bq9EMsrrL&date=1995-06-16')
      .then((res) => {
        console.log(res)
        setPicture(res.data)
      })
      .catch(err => {
        console.log("No Image Found", err)
        console.log(info)
      })
    }, [])
  
    return(
      <div className="Photo">
        <Photo 
        key={picture.id}
        date={picture.date}
        explanation={picture.explanation}
        title={picture.title}
        url={picture.url}
        copyright={picture.copyright}
        />  
    </div>
    );
}



export default Photo;