import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomContainer from "../components/RoomContainer";
import { RoomConsumer } from "../Context";

export default function Room() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner
          title="Our Rooms"
          children={<Link to="/rooms">Back to Our Rooms</Link>}
        />
      </Hero>
      <RoomContainer />
    </>
  );
}
