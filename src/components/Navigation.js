export default function Navigation() {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-white font-bold text-3xl">
        Psycho
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-600">
          Art
        </span>
      </h1>
      {/* <input
        className="w-2/6 rounded-md px-5 text-white py-2 opacity-50 backdrop-blur-xl shadow-sm"
        placeholder="Search items and collections"
        type="text"
      /> */}
      <ul className="flex text-lg text-white space-x-10">
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Feature</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a
            className="bg-gradient-to-br hover:from-pink-800 from-pink-600 to-purple-700 p-3 rounded-lg"
            href="#"
          >
            Select Wallet
          </a>
        </li>
      </ul>
    </nav>
  );
}
