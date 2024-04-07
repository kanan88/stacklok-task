import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-10 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo  */}
        <Link href="/" className="inline-flex">
          <Image
            src="logo-dark.svg"
            width={96}
            height={96}
            alt="Stacklok logo"
          />
        </Link>
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px]"
        />
        {/* Menu Items */}
        <button className="text-sm font-semibold text-blue-600">Login</button>
      </div>
    </div>
  );
};

export default Header;
