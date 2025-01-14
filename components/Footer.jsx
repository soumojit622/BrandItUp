import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300 py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 animate-fadeIn">
          {/* Footer Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center group">
              <img
                src="/logo.svg" // Replace this with your logo
                alt="BrandItUp Logo"
                className="w-10 h-10 mr-2 transition-transform duration-300 group-hover:scale-110"
              />
              <h1 className="text-xl font-semibold text-white">
                BrandItUp
              </h1>
            </Link>
            <p className="text-sm text-gray-400">
              Empowering businesses to grow through creative branding. Join us
              and get started today!
            </p>
          </div>

          {/* Footer Column 2: Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Features", "Contact Us", "Get Started"].map(
                (link, index) => (
                  <li key={index}>
                    <Link
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-yellow-500 transition-transform duration-300 hover:translate-x-2"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Footer Column 3: Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-transform duration-300 hover:scale-125"
              >
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-transform duration-300 hover:scale-125"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-transform duration-300 hover:scale-125"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-transform duration-300 hover:scale-125"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Footer Column 4: Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="text-sm text-gray-400 transition-opacity duration-300 hover:opacity-80">
              Email: support@branditup.com
            </p>
            <p className="text-sm text-gray-400 transition-opacity duration-300 hover:opacity-80">
              Phone: +1 (234) 567-890
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-600 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 BrandItUp. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2 animate-pulse">
            Made with ❤️ by Soumojit Banerjee
          </p>
        </div>
      </div>
    </footer>
  );
};
