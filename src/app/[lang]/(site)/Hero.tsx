import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-[#212121] mt-6 min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl w-full mx-auto py-16 flex flex-col lg:flex-row justify-between items-center">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-[#CFCFCF] leading-tight">
            Dive into the
            <br />
            Best,{" "}
            <span className="bg-[#D982CA] text-white px-2">
              Hentai platform!
            </span>
          </h1>

          <p className="text-base text-[#CFCFCF] mb-8 max-w-2xl mx-auto lg:mx-0">
            Immerse yourself in a universe of unlimited pleasure with Hentify,
            the ultimate platform for true hentai lovers. Enjoy an exclusive
            catalog with the best titles in HD and 4K quality, without
            interruptions and with access from any device.
          </p>

          <Link
            href="/login"
            className="inline-flex mt-5 items-center justify-center gap-2 bg-[#C94291] hover:bg-purpleBase text-white px-8 sm:px-20 py-3 rounded-xl font-medium text-lg mb-6 duration-300 transition-colors"
          >
            Get Started
          </Link>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-zinc-100 mt-1 text-sm sm:text-base">
                  <span className="font-medium">The ultimate Hentai</span>
                  <span className="text-zinc-400 ml-2">
                    experience Platform
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <Image
            src="/header.png"
            alt="hentify header image"
            width={500}
            height={500}
            priority
            quality={100}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 500px"
            style={{
              maskImage: "linear-gradient(to top, black 80%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to top, black 80%, transparent)",
            }}
            className="w-full max-w-md lg:max-w-full h-auto object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
