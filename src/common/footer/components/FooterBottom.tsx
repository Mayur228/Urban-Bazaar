export function FooterBottom() {
  return (
    <div className="border-t border-gray-200">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 lg:flex-row">

        <p>
          © {new Date().getFullYear()} Urban Bazaar.
          All rights reserved.
        </p>

        <div className="flex gap-8">

          <a href="#">Privacy Policy</a>

          <a href="#">Terms & Conditions</a>

          <a href="#">Cookies</a>

        </div>

      </div>

    </div>
  );
}