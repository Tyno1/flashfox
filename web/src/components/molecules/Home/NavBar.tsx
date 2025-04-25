export function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Company Logo</div>
        <div className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
