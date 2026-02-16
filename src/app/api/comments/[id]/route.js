export async function GET(request, {params}) {
  const { id } = await params;
//   const resolvedParams = await params;
  const comment = comments.find(
    (c) => c.id === parseInt(id)
  );

  if (!comment) {
    return Response.json(
      { message: "Comment not found" },
      { status: 404 }
    );
  }

  return Response.json(comment);
}

export async function PATCH(request,{params}) {
  const { id } = await params;
const body = await request.json();

  const index = comments.findIndex(
    (c) => c.id === parseInt(id)
  );

  if (index === -1) {
    return Response.json(
      { message: "Comment not found" },
      { status: 404 }
    );
  }

  comments[index] = {
    ...comments[index],
    text: body.text,
  };

  return Response.json({
      message: "Comment Updated",
      comment: comments[index]
  });
}

export async function DELETE(request,{params}){
      const {id} = await params; 
      const newComments = comments.filter((c) => c.id !== parseInt(id))
      return Response.json({
            message : "Comment Deleted",
            newComments
      })
}



const comments = [
      {
            id: 1 ,
            text : "comments 1"
      },
      {
            id: 2 ,
            text : "comments 2"
      },
      {
            id: 3 ,
            text : "comments 3"
      },
]