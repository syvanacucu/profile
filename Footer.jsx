import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Section 1 */}
        <div>
          <h2 className="text-lg font-bold mb-4">Kuymotorin</h2>
          <p>
            Layanan penyewaan Vespa adalah layanan yang menyediakan kendaraan motor roda dua jenis skuter Vespa untuk disewa oleh pelanggan, baik untuk keperluan pribadi, wisata, atau bisnis. Dengan berbagai model dan 
            kondisi vespa yang terawat, layanan ini memberikan kenyamanan dan kemudahan bagi 
            pelanggan yang ingin menikmati perjalanan dengan kendaraan yang ikonik dan stylish. Penyewaan Vespa biasanya mencakup paket harian, mingguan, atau bulanan, dengan harga yang bervariasi tergantung durasi sewa, 
            tipe vespa, serta lokasi. 
          </p>
        </div>
        {/* Section 2 */}
        <div>
          <h2 className="text-lg font-bold mb-4">Navigasi</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/rent-car" className="hover:underline">
                Rent Motor
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/add-cars" className="hover:underline">
                Add Motor
              </a>
            </li>
          </ul>
        </div>
        {/* Section 3 */}
        <div>
          <h2 className="text-lg font-bold mb-4">Kontak</h2>
          <p className="mb-2">
            <strong>Alamat:</strong> Jl.Pesona, Jakarta
          </p>
          <p className="mb-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@Kuymotorin.com" className="hover:underline">
              info@Kuymotorin.com
            </a>
          </p>
          <p className="mb-2">
            <strong>Telepon:</strong> +62 812-5643-6784
          </p>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2025 Kuymotorin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
