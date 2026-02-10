import AboutHeader from '@/Components/AboutHeader';
export const metadata = {
  title: "About",
  description: "About Page",
  keywords: ["about","about page"]
};

const AboutPage = () => {
      return (
            <div>
                  <h1>about page</h1>
                  <AboutHeader></AboutHeader>
            </div>
      );
};

export default AboutPage;