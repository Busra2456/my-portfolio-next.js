import { Headland_One } from "next/font/google";
import Link from "next/link";

const headland = Headland_One({weight : ['400'], subsets : ['latin']})
const AboutHeader = () => {
      return (
            <div className={headland.className}>
                 <h1> this is a About Header Components</h1> 
                 <Link href="about/history">History</Link>
                 <Link href="about/mission">Mission</Link>
            </div>
      );
};

export default AboutHeader;