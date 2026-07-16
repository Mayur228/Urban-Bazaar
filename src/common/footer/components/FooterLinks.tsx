import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const shop = [
  "New Arrivals",
  "Men",
  "Women",
  "Accessories",
];

const company = [
  "About Us",
  "Careers",
  "Blog",
  "Our Story",
];

const support = [
  "Contact",
  "FAQs",
  "Shipping",
  "Returns",
];

export function FooterLinks() {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

      {/* Shop */}

      <div>

        <h3 className="mb-6 text-lg font-semibold">
          Shop
        </h3>

        <ul className="space-y-4">

          {shop.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-gray-500 transition hover:text-black"
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

      </div>

      {/* Company */}

      <div>

        <h3 className="mb-6 text-lg font-semibold">
          Company
        </h3>

        <ul className="space-y-4">

          {company.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-gray-500 transition hover:text-black"
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

      </div>

      {/* Support */}

      <div>

        <h3 className="mb-6 text-lg font-semibold">
          Support
        </h3>

        <ul className="space-y-4">

          {support.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-gray-500 transition hover:text-black"
              >
                {item}
              </a>
            </li>
          ))}

        </ul>

      </div>

      {/* Social */}

      <div>

        <h3 className="mb-6 text-lg font-semibold">
          Follow Us
        </h3>

        <div className="flex gap-4">

          <button className="rounded-full border p-3 transition hover:bg-black hover:text-white">
            <FaInstagram />
          </button>

          <button className="rounded-full border p-3 transition hover:bg-black hover:text-white">
            <FaFacebookF />
          </button>

          <button className="rounded-full border p-3 transition hover:bg-black hover:text-white">
            <FaTwitter />
          </button>

          <button className="rounded-full border p-3 transition hover:bg-black hover:text-white">
            <FaPinterestP />
          </button>

        </div>

      </div>

    </div>
  );
}