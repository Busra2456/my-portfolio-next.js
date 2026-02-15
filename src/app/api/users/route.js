export async function GET(){
      return Response.json({
            message : "Hello users"
            // currentTime : new Date().toLocaleTimeString()
      })
}