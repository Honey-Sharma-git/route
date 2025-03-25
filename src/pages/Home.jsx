import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col  bg-gray-600 p-5 justify-between min-h-screen">
        <header className="flex flex-col gap-5">
          <h2 className="text-4xl font-bold text-white">
            You got the travel plans, we got travel vans
          </h2>
          <p className="text-gray-300">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van for your perfect road trip
          </p>
          <Link
            className="bg-orange-400 text-center p-1 text-white rounded-lg"
            to={"/vans"}
          >
            Find your van
          </Link>
        </header>
      </main>
      <Footer />
    </>
  );
};
