import {User} from '@/app/users/[id]/page';
import Link from 'next/link';
import React from 'react';

const UserListItem = ({age, id, name}: User) => {
  return (
    <li key={id}>
      Name:{name}, age:{age}{' '}
      <Link className="underline" href={`/users/${id}`}>
        view
      </Link>
    </li>
  );
};

export default UserListItem;
