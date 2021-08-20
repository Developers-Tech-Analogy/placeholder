import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-wrap sm:flex-wrap-reverse place-content-center h-screen p-8">
      <div className="my-auto lg:w-1/2">
        <h1 className="flex-1 lg:text-8xl text-6xl font-bold transform">
          {"Something's "}{" "}
          <h1 className="text-blue-600 underline hover:text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-green-100 duration-500">
            Cooking
          </h1>
        </h1>
      </div>
      <div className="my-auto justify-center">
        <h1 className="text-2xl py-5">In the meantime,</h1>
        <a href="https://events.techanalogy.org/" target='_blank' rel="noreferrer">
        <button className="border-2 border-blue-600 lg:text-3xl text-xl p-5 mb-5 lg:mr-5 group hover:bg-blue-600 duration-500">
          <h1 className="group-hover:text-white">Check our Latest Events</h1>
        </button>
        </a>
        <a href="http://community.techanalogy.org" target='_blank' rel="noreferrer">
        <button className="border-2 border-purple-600 lg:text-3xl text-xl p-5 group hover:bg-purple-600 duration-500 ">
          <h1 className="group-hover:text-white">Join Our Discord Community</h1>
        </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
