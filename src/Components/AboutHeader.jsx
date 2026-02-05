import Link from "next/link";

const AboutHeader = () => {
      return (
            <div>
                 <h1> this is a About Header Components</h1> 
                 <Link href="about/history">History</Link>
                 <Link href="about/mission">Mission</Link>
            </div>
      );
};

export default AboutHeader;