export async function GET(){
      return Response.json({
            message : "Hello server"
            // currentTime : new Date().toLocaleTimeString()
      })
}