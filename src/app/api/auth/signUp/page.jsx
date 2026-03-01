"use client";
const page = () => {
      const handleRegister = async (event) =>{
            event.preventDefault();
            const newUser = {
                  name : event.target.name.value,
                  name : event.target.email.value,
                  name : event.target.password.value,
            }
            const resp = await fetch('http://localhost:3000/api/auth/signUp/new-user',{
                 method :'POST',
                 body : JSON.stringify(newUser),
                 headers : {
                  'content-type' : 'application/json'
                 }
            })
            console.log(resp);

      } 
      return (
            <div className="flex items-center justify-center mt-24">
             <div>
                  <h6 className="text-lg font-semibold my-5">
                        Sign Up With and Password
                  </h6>
                  <div>
                        <form onSubmit={handleRegister} >
                               <label htmlFor="name">Name</label> <br/>
                              <input
                              type="text"
                              name="name"
                              placeholder="your full name"
                              className="outline-none w-full border-transparent bg-amber-200 p-3 "
                             />
                             <br/><br/>
                              <label htmlFor="email">Email</label> <br/>
                              <input
                              type="text"
                              name="email"
                              placeholder="your email"
                              className="outline-none border-transparent p-3 text-slate-700 bg-amber-200 w-full"
                             />
                             <br/><br/>
                                  <label htmlFor="password">Password</label> <br/>
                              <input 
                              type="password"
                              name="password"
                              placeholder="your password"
                              className="outline-none border-transparent p-3 text-slate-700 bg-amber-200 w-full"
                             />
                             <br/>
                             <button className="outline-none border-transparent p-3 text-slate-700 my-5 w-full bg-orange-500" >Register</button>
                            

                        </form>
                  </div>
                  </div>     
            </div>
      );
};

export default page;