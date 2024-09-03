

function Navbar() {
  return (
    <>
      <div className="bg-white shadow-md sticky top-0">
        <div className="mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
          <div className="flex items-center space-x-4">
            <a href=""><img width={40} height={40} src="./Logo/logo hospital.png" className="hover:mb-3" alt="" /></a>
            <div className="text-lg font-bold text-slate-400">Hospital Empang</div>
          </div>
          <div className="flex-grow mx-8">
            <input
              type="text"
              placeholder="Cari apa?"
              className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 hover:shadow-lg transition-all duration-150"
            />
          </div>
          <div className="flex space-x-6">
            <a href="" className="text-black hover:text-slate-300 transition-all duration-100">HOME</a>
            <a href="" className="text-black hover:text-slate-300 transition-all duration-100">ABOUT US</a>
            <a href="" className="text-black hover:text-slate-300 transition-all duration-100">SERVICES</a>
            <a href="" className="text-black hover:text-slate-300 transition-all duration-100">DOCTORS</a>
            <a href="" className="text-black hover:text-slate-300 transition-all duration-100">GALLERY</a>
            <a href="" className="text-black hover:text-slate-300 transition-all duration-100">BLOG</a>
            <a href="" className="text-black hover:text-slate-300 transition-all duration-100">PAGE</a>
            <a href="" className="text-black hover:text-slate-300 transition-all duration-100">CONTACT US</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

