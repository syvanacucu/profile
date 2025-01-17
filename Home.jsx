import React from "react";
import CarsSection from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <CarsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
