import { Tab } from "@headlessui/react";
import { useState, useEffect } from "react";

// Data static
import data from "./data/art.json";
import featured from "./data/featured.json";
import person from "./data/person.json";

// Componets
import Card from "./components/Card";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

// Image
import heroimage from "./assets/heroimage.png";
import binance from "./assets/binance.svg";
import eth from "./assets/eth.svg";
import blockchain from "./assets/blockchain.svg";
import art from "./assets/art.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  const [display, setDisplay] = useState([]);
  const [feature, setFeature] = useState([]);
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    setDisplay(data);
    setFeature(featured);
    setProfile(person);
  });

  return (
    <div className="bg-gradient-to-r from-red-800 to-indigo-900 backdrop-filter backdrop-blur-xl py-10">
      <div className="container mx-auto">
        {/* Hero */}
        <div className="h-screen space-y-10">
          {/* Nav Component */}
          <Navigation />
          {/* Hero Content left */}
          <div className="flex justify-between">
            <div className="w-6/12 flex flex-col justify-center space-y-10">
              <div className="w-4/6">
                <h1 className="text-white font-extrabold text-5xl">
                  Create, Sell & Collect Your Own Creative NFT
                </h1>
                <p className="text-gray-200 pt-6 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit.
                </p>
              </div>

              <div className="flex space-x-4">
                <button className="bg-gradient-to-br text-white font-bold from-pink-500 to-purple-600 py-2 px-3 rounded-lg">
                  Explore Now
                </button>
                <button className="bg-gray-200 bg-opacity-20 hover:bg-opacity-50 text-white border-gray-200 py-2 px-3 rounded-lg">
                  Sell NFT
                </button>
              </div>

              <div className="flex justify-between w-4/6">
                <div className="flex flex-col justify-center">
                  <h1 className="font-bold text-3xl text-white">37k+</h1>
                  <p className="text-gray-300">Artworks</p>
                </div>

                <div className="flex flex-col justify-center">
                  <h1 className="font-bold text-3xl text-white">20k+</h1>
                  <p className="text-gray-300">Artists</p>
                </div>

                <div className="flex flex-col justify-center">
                  <h1 className="font-bold text-3xl text-white">99k+</h1>
                  <p className="text-gray-300">Aucations</p>
                </div>
              </div>
            </div>
            {/* Hero Content right */}
            <div className="w-6/12">
              <img src={heroimage} alt="hero image" />
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-between">
          <img className="w-80" src={binance} />
          <img className="w-80" src={eth} />
          <img className="w-80" src={blockchain} />
        </div>

        {/* About Us */}
        <div className="flex flex-col my-24 h-screen space-y-10">
          <div className="text-center space-y-2">
            <h1 className="text-white text-4xl font-extrabold">About Us</h1>
            <p className="text-gray-300 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex justify-start space-x-10">
            <img src={art} alt="aråt image" />
            <div className="flex flex-col w-6/12 justify-center space-y-5">
              <h1 className="text-white font-extrabold text-5xl">
                Get Popular NFT
              </h1>
              <p className="text-gray-300 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum åtellus elit sed risus. Maecenas eget condimentum
                velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos himenaeos.
                Praesent auctor purus luctus enim egestas, ac scelerisque ante
                pulvinar.
              </p>
              <button className="bg-gradient-to-br w-32 text-white font-bold hover:from-pink-800 from-pink-500 to-purple-600 py-2 px-3 rounded-lg">
                Show More
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="text-center">
          <h1 className="text-4xl text-white font-extrabold">Collection</h1>
          <p className="text-gray-300 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mx-auto mt-10">
          <Tab.Group>
            <div className="flex flex-col space-y-10">
              <Tab.List className="flex space-x-10 justify-center">
                {Object.keys(display).map((items) => {
                  return (
                    <Tab
                      key={items}
                      className={({ selected }) =>
                        classNames(
                          "w-full py-2.5 text-sm leading-5 font-medium text-white-700 bg-gray-300 bg-opacity-20 rounded-lg",
                          selected
                            ? "bg-gradient-to-br text-white font-bold from-pink-500 to-purple-600 shadow"
                            : "text-gray-200 hover:bg-white/[0.12] hover:text-white"
                        )
                      }
                    >
                      {items}
                    </Tab>
                  );
                })}
              </Tab.List>
              <Tab.Panels>
                {Object.values(display).map((data, index) => {
                  return (
                    <Tab.Panel className="grid grid-cols-4 gap-5" key={index}>
                      {data.map((items, id) => {
                        return (
                          <Card
                            key={id}
                            src={items.url}
                            username={items.username}
                            bid={items.bid}
                            size={75}
                          />
                        );
                      })}
                    </Tab.Panel>
                  );
                })}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>

        {/* Featured */}
        <div className="text-center mt-16">
          <h1 className="text-4xl text-white font-extrabold">
            Featured Artworks
          </h1>
          <p className="text-gray-300 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-3 gap-5">
            {feature.map((items, index) => {
              return (
                <Card
                  key={index}
                  src={items.url}
                  username={items.username}
                  bid={items.bid}
                  size={80}
                />
              );
            })}
          </div>
        </div>

        {/* Top Creator */}
        <div className="text-center mt-16">
          <h1 className="text-4xl text-white font-extrabold">Top Creator</h1>
          <p className="text-gray-300 pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-3 gap-5">
            {profile.map((items, index) => {
              return (
                <Profile
                  key={index}
                  username={items.username}
                  avatar={items.avatar}
                  cover={items.cover}
                />
              );
            })}
          </div>
        </div>

        {/* Big Card */}
        <div className="mx-auto space-y-3 flex flex-col justify-center items-center my-16 h-72 rounded-lg bg-gradient-to-br text-white shadow-sm font-bold from-pink-500 to-indigo-800">
          <h1 className="text-white text-4xl font-bold">
            Get ready to collect our NFT
          </h1>
          <button className="bg-gray-300 bg-opacity-20 hover:bg-opacity-50 p-3 rounded-lg">
            Get Started
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-between my-5">
          <div className="flex flex-col space-y-3">
            <h1 className="text-white font-bold text-3xl">
              Psycho
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-purple-600">
                Art
              </span>
            </h1>
            <p className="max-w-lg text-gray-300 ">
              The best NFT marketplace website in the world and feel your
              experience in selling or buy our work
            </p>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-white font-bold text-xl">About</h1>
            <ul className="flex flex-col text-gray-300 space-y-3 cursor-pointer">
              <li>Product</li>
              <li>Resource</li>
              <li>Term & Condition</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-white font-bold text-xl">Company</h1>
            <ul className="flex flex-col text-gray-300 space-y-3 cursor-pointer">
              <li>Our Team</li>
              <li>Partner With Us</li>
              <li>Privacy & Policy</li>
              <li>Features</li>
            </ul>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="text-white font-bold text-xl">Contact</h1>
            <ul className="flex flex-col text-gray-300 space-y-3 cursor-pointer">
              <li>+012 3456789</li>
              <li>adorableprogrammer@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16 text-gray-300">
          <p>
            Design by <span className="text-white font-bold">Zarror</span> code
            by
            <span className="text-pink-600 font-bold">
              <a href="https://github.com/fiqryq"> @fiqryq </a>
            </span>
            | All Right Reserved!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
