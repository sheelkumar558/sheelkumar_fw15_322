import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Employee = () => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    axios.get("https://hidden-reef-30308.herokuapp.com/employess")
      .then((res) => {
        // console.log(res.data);
        setPost(res.data);
      });
  }, []);

  return (
    <div>
      {post.map((e) => {
        return (
          <div>
            <p>{e.name}</p>
            <p>{e.email}</p>
            <p>{e.mobile}</p>
            <p>{e.discription}</p>
          </div>
        );
      })}
    </div>
  );
};
