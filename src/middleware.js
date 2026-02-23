// import { cookies } from "next/headers"
import {NextResponse } from "next/server"
// const user = true;

export const middleware = (request) =>{
      const token = request.cookies.get("next-auth.session-token")
      console.log(token)
// const cookies = request.cookies.get('token')
// if(!user){
//       return NextResponse.redirect(new URL('/login',request.url))
// }
// if(!cookies || cookies.value !== coo){
//       return NextResponse.redirect(new URL('/login',request.url))
// }
if( !token){
      return NextResponse.redirect(new URL('/api/auth/signin',request.url))
}
return NextResponse.next();
     
}

export const config = {
      matcher :['/dashboard/:path*','/service/:path*']
}