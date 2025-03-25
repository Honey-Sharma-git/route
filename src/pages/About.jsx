import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import aboutHero from "../assets/images/about-hero.png";

export const About = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col  bg-amber-100 p-5 justify-between min-h-screen">
        <img src={aboutHero} alt="hero image" />
        <h2 className=" text-2xl font-bold">
          Don't squeeze in a sedan when you could relax in a van
        </h2>
        <div>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <article className="bg-amber-500 p-5 flex flex-col gap-3 items-start">
          <p>Your destination is waiting.</p>
          <p>Your van is ready.</p>
          <button className="bg-black text-white p-1 px-4 rounded-lg">
            Explore our vans
          </button>
        </article>
      </main>
      <Footer />
    </>
  );
};
