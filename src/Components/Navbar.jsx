"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";



const Navbar = () => {
      const pathName = usePathname();
      const router = useRouter();
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
      ];
      const handelLogin = () =>{
            router.push('/about')
      }
      return (
            <nav className="bg-red-400 pr-10 pl-3 py-4 flex justify-between items-center text-xl">
        <h6 className="text-3xl">My <span className="text-red-800">Portfolio</span></h6>
          <ul className="flex justify-between items-center text-xl space-x-10 ">
            {/* <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/service'}>Service</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li> */}
            {
                  links?.map((link) =><Link className={`${pathName === link.path && "text-fuchsia-800"}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
          </ul>
          <button onClick={handelLogin}>Login</button>
        </nav>
      );
};

export default Navbar;