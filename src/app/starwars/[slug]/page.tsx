import React from 'react';
import {z} from 'zod';

import {Metadata, ResolvingMetadata} from 'next';
import {getStarwarsCharacters} from '../page';
import {nameToSlug} from '@/app/_components/StarwarsListItem/StarwarsListItem';

export const dynamicParams = false;

export const starwarsCharachterPartialSchema = z.object({
  name: z.string(),
  birth_year: z.string(),
  gender: z.string(),
  homeworld: z.string(),
});

export type StarwarsCharachterPartialPayload = z.infer<typeof starwarsCharachterPartialSchema>;

type StarwarscharacterPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  {params}: StarwarscharacterPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const character = await getStarwarsCharacters().then((data) =>
    data.find(({name}) => nameToSlug(name) === slug),
  );

  if (!!character) {
    return {
      title: character?.name,
      description: `from the planet ${character?.homeworld}`,
    };
  }
  return {
    title: 'Unkown character',
  };
}

// generate at build time rather than per request, it will also try to create them on the fly unless dynamicParams set to false

export async function generateStaticParams() {
  const characters = await getStarwarsCharacters();

  return characters.map(({name}) => ({
    slug: nameToSlug(name),
  }));
}

export default async function Character({params: {slug}}: StarwarscharacterPageProps) {
  console.log({slug});
  const {name, birth_year, gender, homeworld} =
    (await getStarwarsCharacters().then((data) =>
      data.find(({name}) => nameToSlug(name) === slug),
    )) || {};

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <p>Birth year: {birth_year}</p>
        <p>Gender: {gender}</p>
        <p>Homeworld: {homeworld}</p>
      </div>
    </div>
  );
}
