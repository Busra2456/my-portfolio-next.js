// export async function GET(){
//       return Response.json({
//             currentTime : new Date().toLocaleTimeString()
//       })
// }

export async function GET() {
  const currentTime = new Date().toLocaleTimeString();
  return new Response(JSON.stringify({ currentTime }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
