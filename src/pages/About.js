import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import aboutBannerImage from "../assets/img/banner-about.png";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Banner image={aboutBannerImage} />
      </main>
      <Footer />
    </>
  );
};

export default About;
