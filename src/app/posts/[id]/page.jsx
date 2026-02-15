
const getDetailsPost = async (id) =>{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
      const data = await res.json()
      // console.log(data);
      return data
}

export const generateMetadata = async ({params}) =>{
      const { id } = await params;
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`)
      const postData = await res.json()
      return{
            title:postData.title,
            description:postData.body,
            keywords:postData.body.split(" ")
      }
}







const PostDetailsPage = async ({params}) => {
      const { id } = await params;
     const {title, body} = await getDetailsPost(id)
      return (
            <div>
                  postDetails of : {id}
                <h1>  title : {title}</h1>
                  <h1>  description : {body}</h1>
            </div>
      );
};

export async function generateStaticParams() {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`).then((res) => res.json())
 
  return posts?.slice(0,10).map((post) => ({
    id: post.id.toString(),
  }))
}

export default PostDetailsPage;