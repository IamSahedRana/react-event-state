import { use } from 'react';
import UserCard from './usercard';

function Users({ usersDataPromise }: { usersDataPromise: Promise<any[]> }  ) {
     const users = use(usersDataPromise);
     console.log(users);
     return (
         <div>
             <h2>Users:{users.length}</h2>
{
                     users.map((user) => (
                         <UserCard key={user.id} name={user.name} email={user.email} />
                     ))
}
         </div>
     );
}

export default Users;
