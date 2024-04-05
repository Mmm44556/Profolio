import React from 'react';
import Link from 'next/link';
const NotFound = () => {
  return (
    <div>
      NotFound
      <Link href={'/about'}>
      <h2 >
        return to Home page!
      </h2>
      </Link>
    </div>
  );
}

export default NotFound;
