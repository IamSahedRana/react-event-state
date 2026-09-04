import './usercard.css';
export default function UserCard({ name, email }: { name: string; email: string }) {
     return (
         <div className="user">
             <h2>User Card</h2>
             <p>Name: {name}</p>
             <p>Email: {email}</p>
         </div>
     );
 }