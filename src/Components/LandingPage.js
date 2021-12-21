import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import Loader from "./Loader/Loader";
import playlist from "../assets/playlist.json";
import Card from "./Card";
export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="Page">
      <div className="header shadow-md">
        <div className="width-default navbar">
          <h3>Relevel Sound Cloud</h3>
          <input
            placeholder="Search"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>
      {loading ? <Loader /> : null}
      <div>
        {playlist
          .filter((item) => {
            if (search == "") {
              return item;
            } else if (
              item.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => (
            <Card key={item.id} data={item} />
          ))}
      </div>
    </div>
  );
}
