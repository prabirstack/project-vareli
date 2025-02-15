import { NavButton } from "../components/NavButton";
import { motion } from "motion/react";
import videoBg from "../assets/main-vd-final.mp4";

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="relative w-[1280px] h-[800px] overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navigation Buttons */}
      <NavButton
        className="top-34 left-32"
        buttonText="New Collection"
        path="/new-collection"
      />
      <NavButton
        className="top-80 left-72"
        buttonText="Catalogue"
        path="/catalogue"
      />
      <NavButton className="top-10 left-[400px]" buttonText="TCG" path="/tcg" />
      <NavButton
        className="top-16 right-[500px]"
        buttonText="MCPI"
        path="/mpci"
      />
      <NavButton
        className="top-[275px] right-[350px]"
        buttonText="GSMPL"
        path="/gsmpl"
      />
      <NavButton
        className="bottom-36 left-32"
        buttonText="Saree and Dress Material"
        path="/saree-dress"
      />
      <NavButton
        className="bottom-36 right-[450px]"
        buttonText="Greige Fabric"
        path="/gfab"
      />
      <NavButton
        className="top-[380px] right-[350px]"
        buttonText="Polyester Chips"
        path="/poly-chips"
      />
      <NavButton
        className="top-[470px] right-22"
        buttonText="Polyester Yarn"
        path="/poly-yarn"
      />
    </motion.div>
  );
};
