export default function NavBar() {
  return (
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-600">NEWSLETTER</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            How it works
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Why Newsletter App?
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Blog
          </a>
        </nav>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
          Login
        </button>
      </header>
  );
}
