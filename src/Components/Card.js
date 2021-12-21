import React from "react";

export default function Card({ data }) {
  return (
    <div className="tile">
      <div className="image-tile">
        <img src={data.cover} alt="#" />
      </div>
      <h5>{data.title}</h5>
      <p>{data.name}</p>
    </div>
  );
}
