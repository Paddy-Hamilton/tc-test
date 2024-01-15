'use client';
import React, {Suspense, useState} from 'react';
import AirlinesList from './AirlinesList';
import {AirlinePayload} from './AirlinesList/AirlinesList';
import Form from './Form';

const AirlineSearch = () => {
  // ideally would not have this data here,either in a provider or some other state management.
  const [airlines, setAirlines] = useState<AirlinePayload[]>([]);
  const updateAirlines = (airlines: AirlinePayload[]) => setAirlines(airlines);

  return (
    <div>
      <Form updateAirlineList={updateAirlines} />
      {/* Would have some loading state for this that would track the forms status
       E.G https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations#displaying-loading-state
      */}
      <Suspense fallback="Loading airlines...">
        <AirlinesList airlines={airlines} />
      </Suspense>
    </div>
  );
};

export default AirlineSearch;
