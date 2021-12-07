export default function Card({ src, username, bid, size }) {
  console.log(src, username, bid);
  return (
    <div
      className={`w-${size} h-110 bg-gray-300 bg-opacity-20 p-3 rounded-md flex flex-col space-y-2 shadow-md blur-lg`}
    >
      <img
        className="h-72 rounded-lg transform hover:scale-110 object-cover cursor-pointer"
        src={src}
        alt=""
      />
      <div className="flex flex-col space-y-5">
        <div className="flex justify-between">
          <div>
            <h3 className="text-gray-300">{username}</h3>
            <p className="text-white font-bold">Yellow Painting</p>
          </div>
          <div>
            <h3 className="text-gray-300">Current Bid</h3>
            <p className="text-white font-bold">{bid}</p>
          </div>
        </div>
        <button className="bg-gradient-to-br text-white font-bold hover:from-pink-600 from-pink-500 to-purple-600 py-2 px-3 rounded-lg">
          Place a bid
        </button>
      </div>
    </div>
  );
}
