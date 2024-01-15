import React from 'react';

export type AirlinePayload = {
  iata: string;
  icao: string;
  logo_url: string;
  name: string;
};
type Props = {
  airlines: AirlinePayload[];
};

const AirlinesList = ({airlines}: Props) => {
  if (!airlines?.length) {
    //  i would track the "dirty" state of the form and if the input had been used but nothing returned then show somthing like this
    // otherwise would have a message around using the search input or a default list of airlines
    return <p>No airlines found</p>;
  }
  return (
    <div>
      {airlines.map(({name}) => (
        <li key={name}>{name} </li>
      ))}
    </div>
  );
};
export default AirlinesList;
