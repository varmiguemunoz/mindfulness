"use client";

import Link from "next/link";
import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function Navbar({ session, signOut, showSearch }: any) {
  const pathname = usePathname();
  const currentPath = pathname.split("/").pop();
  const isSearch = currentPath === "search";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-50 py-4 w-full bg-[#212121]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image src={"/hentify.png"} alt="" width={80} height={80} />
            <span className="text-lg font-semibold text-white">Hentify</span>
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {session ? (
            <div className="flex items-center gap-5">
              {showSearch && (
                <Link href={isSearch ? "/dashboard" : "/dashboard/search"}>
                  {isSearch ? (
                    <FaHome size={30} color="white" />
                  ) : (
                    <CiSearch size={30} className="" color="white" />
                  )}
                </Link>
              )}

              <Button
                type="button"
                className="w-full bg-purpleBase hover:bg-[#3C3C3C] text-white/90 transition"
                onClick={signOut}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link
              href={"/login"}
              className="flex items-center gap-2 rounded-md bg-purpleBase px-10 py-3 text-sm text-white/90 transition hover:bg-[#3C3C3C]"
            >
              Login
            </Link>
          )}
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white"
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-6">
            <Link
              href={"/login"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-[#953E6F] px-10 py-3 text-sm text-white/90 transition hover:bg-[#3C3C3C]"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
