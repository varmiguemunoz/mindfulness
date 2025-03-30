import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";

export default function FeaturedTime() {
  return (
    <div className="bg-[#212121] text-gray-300 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Featured section */}
        <div className="text-center space-y-6">
          <p className="text-gray-300 text-lg uppercase tracking-wider mb-6">
            Follow Us
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="flex items-center gap-2 text-gray-400">
              <FaTwitter className="w-6 h-6 text-gray-400" />
              <span className="text-base">Twitter</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <SiOnlyfans className="w-6 h-6 rounded-full text-gray-400" />
              <span className="text-base">OnlyFans</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[500px] flex flex-col items-center justify-center">
          <Image
            src={"/mirkofloor.png"}
            alt="mirko hentai"
            width={500}
            height={500}
            quality={100}
            priority
            className="objet-cover rounded-lg w-full h-auto"
          />
        </div>

        {/* Bottom arrow */}
        <div className="text-center text-gray-400">
          <div className="text-2xl mb-2">↓</div>
          <p className="text-sm">What are you waiting for?</p>
        </div>
      </div>
    </div>
  );
}
