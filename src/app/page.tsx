import { BsPersonFill } from "react-icons/bs"; // Icon for user profile
import { CiShoppingCart } from "react-icons/ci"; // Icon for shopping cart
import Image from "next/image"; // Next.js image component for optimized images
import image1 from "../app/images folder/pic.png"; // Imported image for display
import { Button } from "@/components/ui/button"; // Custom button component
import { MdEmojiEvents } from "react-icons/md"; // Award icon
import { FaStar } from "react-icons/fa"; // Star icon for top choice

export default function Home() {
  return (
    <div className="w-[1366px]">
      
      {/* Header and Navigation */}
      <div className="bg-[#890620] relative">
        <nav className="w-[1300px] py-5 flex justify-between text-[#EBD4CB] cursor-pointer">
          <h1 className="ml-20 text-xl font-serif hover:text-white">MYSTARA</h1>
          <ul className="flex justify-end items-end space-x-20">
            <li className="hover:text-white">Home</li>
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Shop</li>
            <li className="hover:text-white">Contact</li>
            <CiShoppingCart size={25} className="text-[#EBD4CB] hover:text-white" />
            {/* User profile icon with background */}
            <div className="bg-[#EBD4CB] rounded-full p-1 flex items-center justify-center w-6 h-6">
              <BsPersonFill size={25} className="text-[#890620] hover:outline-black" />
            </div>
          </ul>
        </nav>

        {/* Main Content Section */}
        <div className="flex ml-12 mt-5">
          {/* Left Side Image */}
          <Image  
            src={image1} 
            alt="Image" 
            width={600} 
            height={600} 
          />

          {/* Right Side Content */}
          <div className="w-[450px] ml-20 py-[70px]">
            <h2 className="text-4xl font-serif mb-4 text-[#EBD4CB] leading-snug">
              Enchant Your Senses With Affordable Luxury
            </h2>
            <p className="mb-6 text-[#EBD4CB] text-base leading-7">
              Step into a world of elegance and luxury with our exquisite collection of perfumes. Each fragrance is meticulously crafted to evoke emotion, and leave an unforgettable impression.
            </p>
            {/* Collection and Follow Buttons */}
            <Button className="bg-black hover:bg-[#1A090D] text-white outline outline-2 outline-black px-6 py-2 rounded-md mb-3 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
              Our Collection
            </Button>
            <Button className="transition-all duration-300 ease-in-out transform hover:scale-105 bg-transparent hover:bg-[#1A090D] text-black hover:text-white outline outline-2 outline-black px-6 py-2 rounded-md mx-8">
              Follow Us
            </Button>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div>
        <div className="p-4 w-[700px] h-48 bg-[#EBD4CB] rounded-br-[50px] rounded-tl-[50px] flex ml-[550px] absolute top-[449px]">
          
          {/* First Award Section */}
          <div className="mt-[33px]">
            <MdEmojiEvents size={50} className="text-red-300 mr-2" /> {/* Award icon */}
          </div>
          <div className="w-[250px] flex flex-col justify-center ml-4">
            <h3 className="text-2xl font-medium text-[#890620]">Prestigious Award</h3>
            <p>Recipient of the 2024 International Perfumer's Guild Award</p>
          </div>

          {/* Divider Line */}
          <div className="w-[50px] flex items-center justify-center mx-auto">
            <div className="w-[2px] h-16 bg-red-300"></div>
          </div>
          
          {/* Second Award Section */}
          <div className="mt-[35px]">
            <FaStar size={40} className="text-red-300 mr-2" /> {/* Star icon */}
          </div>
          <div className="w-[250px] flex flex-col justify-center ml-4">
            <h3 className="text-2xl font-medium text-[#890620]">Top Choice</h3>
            <p>Featuring "Elixir of Enchantment", our top-selling fragrance for 3 consecutive years</p>
          </div>
        </div>
      </div>
    </div>
  );
}
