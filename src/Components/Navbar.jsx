"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";



const Navbar = () => {
      const pathName = usePathname();
      const router = useRouter();
      const session = useSession();
      console.log(session)
      const links = [
          
            {
                  title : "About",
                  path : '/about'
            },
            {
                  title : "Service",
                  path : '/service'
            },
             {
                  title : "Contact",
                  path : '/contact'
            },
            {
                  title : "blogs",
                  path : '/blogs'
            },
              {
                  title : "categories",
                  path : '/categories'
            },
               {
                  title : "posts",
                  path : '/posts'
            },
           
             {
                  title : "Meals",
                  path : '/meals'
            },
             {
                  title : "Gallery",
                  path : '/gallery'
            },
               {
                  title : "dashboard",
                  path : '/dashboard'
            },
      ];
      const handler = () =>{
            router.push('/api/auth/signin'
            )
      }

      if(pathName.includes("dashboard"))
       return (
     
      <div className="bg-amber-400 p-6">
            dashboard Layout
      </div>)
      
      return (
            <nav className="bg-red-400 pr-10 pl-3 py-4 flex justify-between items-center text-xl">
        <h6 className="text-3xl">
            <Link href={"/"}>
            My <span className="text-red-800">Portfolio</span>
            </Link>
            </h6>
          <ul className="flex justify-between items-center text-xl space-x-8 ">
            {/* <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/service'}>Service</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li> */}
            {
                  links?.map((link) =><Link className={`${pathName === link.path && "text-fuchsia-800 "}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
         
         
       
         {session.status !== "authenticated" ?( <button
        onClick={handler}
        >
          Login
        </button>
        ) : (
            <button  onClick={() =>signOut()}>Logout</button> )
         }
        
        
            <div className="">
                  <Image height={30} width={30} className="rounded-xl" alt={session?.data?.user?.name}  src={session?.data?.user?.image }/>
                  <br />
                  {session?.data?.user?.name}
                  <br />
                   {session?.data?.user?.type}
            </div>
        
         
          
        </nav>
      );
};

export default Navbar;

