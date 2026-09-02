export default function Navbar() {
  return (
    <nav className="relative top-0 z-50 w-full bg-gradient-to-b from-black/75 to-transparent px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-black tracking-tight text-red-600 md:text-3xl">NETFLIX</h1>

          {/* <div className="hidden items-center gap-6 text-sm text-gray-200 md:flex">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">TV Shows</a>
            <a href="#" className="hover:text-white">Movies</a>
            <a href="#" className="hover:text-white">New & Popular</a>
            <a href="#" className="hover:text-white">My List</a>
          </div> */}
        </div>

        <div className="flex items-center gap-4 text-sm text-white">
          <button type="button" className="rounded-full border border-gray-300 bg-white px-4 py-1.5 font-medium text-black transition hover:bg-gray-100">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}