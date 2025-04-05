const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]


function Header() {
    return <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">SIMPLE</span>
            <img className="h-8 w-auto" src="src/images/Group2.svg" alt="SIMPLE" />
          </a>
        </div>
  
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Home</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">About</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Marketplace</a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Testimonials</a>
        </div>
  
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">Contact Us </a>
        </div>
      </nav>
    </header>
  }
  
  export default Header