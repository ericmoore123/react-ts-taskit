import React from "react";

import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>=== error ===</p>;

  return data.locations.map(
    ({
      id,
      name,
      description,
      photo,
    }: {
      id: any;
      name: string;
      description: string;
      photo: any;
    }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img
          src={`${photo}`}
          alt={`location with id: ${id}`}
          width="400px"
          height="250px"
        />
        <br />
        <b>About this location:</b>
        <p>{description}</p>
        <br />
      </div>
    )
  );
}
