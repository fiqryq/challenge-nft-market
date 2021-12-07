export default function Profile({ username, avatar, cover }) {
  return (
    <div className="w-80 h-110 bg-gray-300 bg-opacity-20 relative rounded-xl shadow-xl blur-lg">
      <img
        className="rounded-t-xl w-full h-52 object-cover"
        src={cover}
        alt=""
      />
      <div className="absolute top-36">
        <div className="flex flex-col items-center text-center space-y-4 px-4">
          <img className="w-24 h-24 rounded-full" src={avatar} alt="" />
          <h1 className="text-white text-2xl font-bold">{username}</h1>
          <p className="text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-gradient-to-br w-full text-white font-bold hover:from-pink-600 from-600-500 to-indigo-800 py-2 px-3 rounded-lg">
            + FOLLOW
          </button>
        </div>
      </div>
    </div>
  );
}
