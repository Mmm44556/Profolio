import React from 'react';
import {hello} from '@/lib/action'



const Service = async () => {
 

  return (
    <div>
      Service
      <form action={hello}>
  <button>test me</button>
</form>
    </div>
  );
}

export default Service;
