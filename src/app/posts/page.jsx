import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

  const getPosts = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
//   if(data){
//     redirect(`/posts/${data[0].id}`);
//   }
  return data;
}

const PostsPage = async () => {
    const postsData = await getPosts();
    console.log(postsData);
   

      return (
            <div>
                 <h1 className='text-3xl text-center my-4 font-semibold'>All Posts</h1>
                 <div className='grid grid-cols-4 gap-5 m-2'>
                  {
                     postsData?.slice(0,10)?.map((post)=>(
                        <div key={post.id} className='border p-2'>
<h6 className='text-center text-xl font-semibold text-red-700 '>title : {post.title}</h6>
<h3 className='text-zinc-800 text-center mx-auto'>description : {post.body}</h3>
<button className='bg-red-800 text-white p-2 mt-2 w-full'>
     <Link href={`/posts/${post.id}`} >See Description</Link></button>
                        </div>
                     ))  
                  }
                 </div>
            </div>
      );
};

export default PostsPage;