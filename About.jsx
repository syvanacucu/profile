import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Tentang Kuymotorin</h1>
            <p className="text-xl">Solusi Transportasi Terpercaya untuk Setiap Perjalanan Anda</p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {/* Company Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Siapa Kami?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Kuymotorin adalah layanan rental mobil terpercaya yang beroperasi di Jakarta dan sekitarnya. 
                  Didirikan dengan visi untuk memberikan solusi transportasi yang aman, nyaman, dan terjangkau,
                  kami berkomitmen untuk memberikan pengalaman terbaik bagi setiap pelanggan kami.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Layanan Kami</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Rental Mobil Harian</h3>
                    <p className="text-gray-600">
                      Tersedia berbagai pilihan motor untuk kebutuhan harian Anda, 
                      dari motor keluarga hingga motor mewah dengan harga yang kompetitif.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Layanan Supir</h3>
                    <p className="text-gray-600">
                      Supir profesional dan berpengalaman siap mengantar Anda ke tempat tujuan
                      dengan aman dan nyaman.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Mengapa Memilih Kami?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-car text-2xl text-orange-500"></i>
                    </div>
                    <h3 className="font-semibold mb-2">Armada Terawat</h3>
                    <p className="text-gray-600">Motor selalu dalam kondisi prima dan terawat</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-clock text-2xl text-orange-500"></i>
                    </div>
                    <h3 className="font-semibold mb-2">Layanan 24/7</h3>
                    <p className="text-gray-600">Siap melayani kapanpun Anda membutuhkan</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="fas fa-shield-alt text-2xl text-orange-500"></i>
                    </div>
                    <h3 className="font-semibold mb-2">Terpercaya</h3>
                    <p className="text-gray-600">Pelayanan profesional dan terjamin</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <p className="flex items-center text-gray-600">
                      <i className="fas fa-map-marker-alt w-6 text-orange-500"></i>
                      Jakarta, Indonesia
                    </p>
                    <p className="flex items-center text-gray-600">
                      <i className="fas fa-phone w-6 text-orange-500"></i>
                      +62 123-456-7890
                    </p>
                    <p className="flex items-center text-gray-600">
                      <i className="fas fa-envelope w-6 text-orange-500"></i>
                      info@Kuymotorin.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;