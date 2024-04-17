import React from "react";
import blank_profile from "./blank-profile-picture-female.png";
import { Card } from "./styles/elements";

type WilderProps = {
  name: string
  city: string
  gender: string
}

function Wilder({ city, name, gender }: WilderProps) {
  return (
    <Card>
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <h4>City</h4>
      <p>{city}</p>
      <h4>Gender</h4>
      <p>{gender}</p>
    </Card>
  );
}

export default Wilder;
