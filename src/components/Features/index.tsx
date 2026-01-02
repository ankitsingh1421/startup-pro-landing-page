import { Feature } from "@/types/feature";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Key Features"
            paragraph="Explore the powerful features that make our platform stand out. From cutting-edge AR technology to immersive experiences, we offer solutions tailored to various industries."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature as unknown as Feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
