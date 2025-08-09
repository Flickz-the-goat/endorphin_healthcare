import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-lg font-semibold text-neutral-900">
              Endorphin Global Healthcare
            </div>
            <p className="mt-3 max-w-md text-sm text-neutral-600">
              Science-backed medical weight loss and wellness optimization.
              Tirzepatide, Semaglutide, NAD+, Sermorelin, and Glutathione.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-900">
              Explore
            </div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>
                <a href="#products" className="hover:text-neutral-900">
                  Products
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-neutral-900">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-neutral-900">
                  Team
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-neutral-900">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-neutral-900">
                  Reviews
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-neutral-900">
              Get Started
            </div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>
                <Link href="/intake" className="hover:text-neutral-900">
                  Fill Out Intake Form
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-neutral-900">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-neutral-100 pt-6 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} Endorphin Global Healthcare. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-neutral-700">
              Privacy
            </Link>
            <Link href="#" className="hover:text-neutral-700">
              Terms
            </Link>
            <a
              href="mailto:hello@endorphin-global.com"
              className="hover:text-neutral-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
