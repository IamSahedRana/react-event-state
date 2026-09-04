import { use } from 'react';

export default function Posts({ postDataPromise }: { postDataPromise: Promise<any[]> }) {
     const posts = use(postDataPromise);
     console.log(posts);
     return (
         <div>
             <h2>Posts</h2>
             <p>List of posts will be displayed here.</p>
         </div>
     );
}