 export const getPostsMetadata = async (id) =>{
 const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//    if (!res.ok) {
//     throw new Error("Failed to fetch post metadata");
//   }
      const data = await res.json()
      console.log(data);
      return data;
}

