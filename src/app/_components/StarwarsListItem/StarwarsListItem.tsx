import {StarwarsCharachterPartialPayload} from '@/app/starwars/[slug]/page';
import Link from 'next/link';
import React from 'react';

export const nameToSlug = (name: string) => name.toLowerCase().replaceAll(' ', '-').trim();

const StarwarsListItem = ({name}: StarwarsCharachterPartialPayload) => {
  return (
    <li>
      Name: {name}{' '}
      <Link className="underline" href={`/starwars/${nameToSlug(name)}`}>
        view
      </Link>
    </li>
  );
};

export default StarwarsListItem;
