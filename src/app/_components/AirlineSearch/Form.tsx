'use client';
import {searchAirlinesAction} from '@/app/actions';
import React from 'react';

type Props = {
  updateAirlineList: (items: any[]) => void;
};

const Form = ({updateAirlineList}: Props) => {
  const handleFormAction = async (formData: FormData) => {
    const airlines = await searchAirlinesAction(formData);

    updateAirlineList(airlines);
  };
  return (
    <form action={handleFormAction}>
      <label>Search prefered airline</label>
      <input type="search" name="search" />
      <button type="submit">search </button>
    </form>
  );
};

export default Form;
