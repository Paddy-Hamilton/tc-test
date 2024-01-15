'use client';
import {searchAirlinesAction} from '@/app/actions';
import React from 'react';

type Props = {
  updateAirlineList: (items: any[]) => void;
};

const Form = ({updateAirlineList}: Props) => {
  //  THis is the part i was missing. Wrapping the server action searchAirlinesAction in a client call that could
  // and just returning the airlines from the server action.
  const handleFormAction = async (formData: FormData) => {
    const airlines = await searchAirlinesAction(formData);
    updateAirlineList(airlines);
  };

  // if i was todo this again i would have used search params that the input would have updated so that the search results could have been shared and so that going back would have shown previous results
  // if that was a requirment :)
  return (
    <form action={handleFormAction}>
      <label>Search prefered airline</label>
      <input type="search" name="search" />
      <button type="submit">search </button>
    </form>
  );
};

export default Form;
