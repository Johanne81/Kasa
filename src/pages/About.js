import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import aboutBannerImage from "../assets/img/banner-about.png";
import Collapse from "../components/Collapse";
import aboutUs from "../about-us.json";

const About = () => {
  return (
    <>
      <Header />
      <main>
        <Banner image={aboutBannerImage} />
        <div className="collapses-container">
          <div className="collapses">
            {aboutUs.map((item, index) => (
              <Collapse
                key={index}
                title={item.title}
                description={item.description}
                pathname={"/About"}
                className="collapse-about"
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
