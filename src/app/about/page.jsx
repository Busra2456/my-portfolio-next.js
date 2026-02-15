export const dynamic = "force-dynamic";
import AboutHeader from '@/Components/AboutHeader';
export const metadata = {
  title: "About",
  description: "About Page",
  keywords: ["about","about page"]
};

// const getTime = async ()=>{
//       const res = await 
//      fetch("http://localhost:3000/time",
//             // {cache: 'no-store'}
//             {next: {revalidate : 5}}

//       );
//       const data = await res.json()
//       console.log(data)
//       return data.currentTime ;
// }

// export const revalidate = 5;

const AboutPage = async () => {
        const res = await fetch(`${process.env.PUBLIC_API_URL}/time`, {
    cache: "no-store", 
  });
  const data = await res.json();

//       const res = await 
//      fetch("http://localhost:3000/time",
//             // {cache: 'no-store'}
//             {next: {revalidate : 5}}

//       );
//       const data = await res.json()

      // const currentTime = await getTime();
      const currentTime = new Date().toLocaleTimeString();
      return (
            <div>
                  <h3>Time : {data.currentTime} </h3>
                  <h1>about page</h1>
                  <AboutHeader></AboutHeader>
            </div>
      );
};

export default AboutPage;