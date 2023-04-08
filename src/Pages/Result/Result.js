import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import './Result.css'


export default function Result({ name, score }) {

  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/")
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/">Go to Homepage</Button>
    </div>
  );
}
