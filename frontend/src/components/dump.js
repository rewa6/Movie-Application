import React, { useState, useEffect } from "react";
import { useModal } from "./ModalContext";
 
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { useParams } from "react-router-dom";
 
export default function Theater() {
 
  const [data, setData] = useState([]);
  const { handleOpen } = useModal();
 
  const { id } = useParams();
 
 
  useEffect(() => {
    axios.get(`http://localhost:8000/book/${id}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
 
  return (
    <>
     
        <span className="navbar-text-left">
          Endless Entertainment Anytime !!
        </span>
     
      <br />
      <div class="container">
        <div class="row">
        {data?.map((theater, show) => (
          <div key={show}>
            <div className="col">
              <h4>{theater.theater.name}</h4>
              <p>State: {theater.theater.state}</p>
            </div>
            <div className="time-button">
              {theater.show_times.map((time, timeIndex) => (
                <>
                <button key={time.id} type="button" className="btn btn-outline-success btn-sm" onClick={() => handleOpen(time.id) } >{time.time} <br/>Rs.{time.price} th {time.id}</button>
                </>
              ))}
              <br /><br />
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}