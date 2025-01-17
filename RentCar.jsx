import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import RentCarForm from "@/components/RentCar";  // Changed the import name

const RentCar = () => {  // Keep the page component name
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <RentCarForm />  {/* Use the renamed import */}
      </main>
      <Footer />
    </div>
  );
};

export default RentCar;