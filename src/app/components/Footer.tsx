import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">🍽️ Greate Food</p>
        <p className="text-gray-400">123 Street, San Francisco, CA</p>
        <p className="text-gray-400">Call us: (123) 456-7890</p>

        {/* Social Media Links */}
        <div className="mt-4 space-x-4">
          <Link href="#" className="text-gray-400 hover:text-white">
            Facebook
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Instagram
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            Twitter
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Greate. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
