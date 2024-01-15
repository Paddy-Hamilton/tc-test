import React from 'react';
import {z} from 'zod';
import {defaultUsers} from '../page';
import {Metadata, ResolvingMetadata} from 'next';

export const dynamicParams = false;

export const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  age: z.number(),
  about: z.string(),
});

export type User = z.infer<typeof UserSchema>;

type UserPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata(
  {params}: UserPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const {name, about} = defaultUsers.find(({id}) => id === id) || {};

  return {
    title: name || 'Unkown user page',
    description: about || 'Nothing know about this user',
  };
}

// generate at build time rather than per request, it will also try to create them on the fly unless dynamicParams set to false

export async function generateStaticParams() {
  return defaultUsers.map(({id}) => ({
    id: id.toString(),
  }));
}

export default function User({params}: UserPageProps) {
  const {name, about} = defaultUsers.find(({id}) => id.toString() === params?.id) || {};

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <p>{about}</p>
      </div>
    </div>
  );
}
