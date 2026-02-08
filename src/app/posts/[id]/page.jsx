const getDetailsPost = async (id) =>{
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const data = await res.json()
      console.log(data);
      return data
}

const PostDetailsPage = async ({params}) => {
      const { id } = await params;
     const {title, body} = await getDetailsPost(id)
      return (
            <div>
                  postDetails of : {id}
                <h1>  title : {title}</h1>
                  <h1>  title : {body}</h1>
            </div>
      );
};

export default PostDetailsPage;