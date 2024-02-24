
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-start pt-28 items-center px-8">
        <h1 className="text-white text-3xl">Welcome to Star-Wars-Guide - Your Ultimate Guide to the Star Wars Universe</h1>
        <h1 className="text-white text-2xl font-bold py-3">Explore the Galaxy Far, Far Away</h1>

        <p className="text-lg text-white gap-4 py-12 font-mono text-wrap">

          Welcome, fellow Jedi, Sith, and enthusiasts to the ultimate destination for all things Star Wars! Whether you are a seasoned veteran of the Force or just beginning your journey, our website is here to be your guide through the vast expanse of the Star Wars galaxy.

          Discover Characters, Planets, and More

          Dive into our extensive database of characters, planets, species, starships, and beyond. <br /> From the heroic Jedi Masters to the menacing Sith Lords, from the desert sands of Tatooine to the bustling streets of Coruscant, our comprehensive collection of information will satisfy your thirst for knowledge about the Star Wars universe.

          Stay Updated with the Latest News and Insights 

          Keep up-to-date with the latest news, rumors, and insights from a galaxy far, far away. Whether its announcements about upcoming movies, TV series, or exciting developments in Star Wars lore, we have got you covered. <br />

          Engage with the Community <br />

          Join our passionate community of Star Wars fans from around the world. Share your favorite moments, theories, fan art, and more. May the Force be with you as we embark on this journey together. <br />

          Start Your Adventure

          Begin your adventure now by exploring our featured content below or use the search bar to find exactly what you are looking for. The Force is strong with you, young Padawan. <br /> Lets explore the Star Wars galaxy together!

          {/* [Featured Content/Image Slideshow]

          [Search Bar]

          [Popular Articles/Recent Updates]

          [Community Engagement Section] */}
        </p>

      </div>
    </>
  );
}
