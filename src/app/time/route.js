export async function GET(){
      return Response.json({
            currentTime : new Date().toLocaleTimeString()
      })
}


// export const dynamic = "force-static";
// export const revalidate = 5;


// export async function GET() {
//   const currentTime = new Date().toLocaleTimeString();
//   return new Response(JSON.stringify({ currentTime }), {
//     status: 200,
//     headers: { "Content-Type": "application/json" },
//   });
// }
