import {Metadata} from 'next';
import Link from 'next/link';
import React from 'react';
import {User} from './[id]/page';
import UserListItem from '../_components/UserListItem';

export const metadata: Metadata = {
  title: 'Users page',
  description: 'List of all the users',
};

export const defaultUsers: User[] = [
  {
    id: 1,
    name: 'A Person',
    age: 32,
    about:
      'Marzipan ice cream wafer pastry pudding. Lollipop gingerbread marshmallow jelly liquorice cupcake oat cake muffin cotton candy. Halvah carrot cake jujubes tootsie roll jujubes cake icing cotton candy marzipan. Carrot cake biscuit lemon drops gingerbread tootsie roll brownie sweet roll icing. ',
  },
  {
    id: 2,
    name: 'Lovely human',
    age: 68,
    about:
      'Candy canes lollipop pastry carrot cake oat cake donut carrot cake carrot cake marshmallow.',
  },
  {
    id: 3,
    name: 'Shark head',
    age: 22,
    about:
      'Sesame snaps wafer lollipop jelly beans jelly cupcake. Cake apple pie oat cake brownie lemon drops jelly candy bonbon sesame snaps. Liquorice danish wafer pastry chocolate powder carrot cake carrot cake chupa chups. Lollipop chocolate cake pastry chocolate bar muffin. Gingerbread cake sesame snaps gummies gummies.',
  },
];

export default function Users() {
  return (
    <div>
      <h1 className="mb-5 text-xl">Users</h1>
      <div>
        <ul>
          {defaultUsers.map((user) => (
            <UserListItem key={user?.id} {...user} />
          ))}
        </ul>
      </div>
    </div>
  );
}
