import {Metadata} from 'next';

import React from 'react';

import StarwarsListItem from '../_components/StarwarsListItem/StarwarsListItem';
import {StarwarsCharachterPartialPayload} from './[slug]/page';

export const metadata: Metadata = {
  title: 'Starwars list page',
  description: 'List of all the starwars charachters',
};

export async function getStarwarsCharacters(): Promise<StarwarsCharachterPartialPayload[]> {
  const res = await fetch(`https://swapi.dev/api/people`);
  if (!res.ok) {
    throw new Error('Failed to fetch starwars charachters');
  }
  return res.json().then((data) => data.results) as Promise<StarwarsCharachterPartialPayload[]>;
}

export default async function Starwars() {
  const data = await getStarwarsCharacters();

  return (
    <div>
      <h1 className="mb-5 text-xl">Starwars characters</h1>

      <div>
        <ul>{data?.map((char) => <StarwarsListItem key={char.name} {...char} />)}</ul>
      </div>
    </div>
  );
}
