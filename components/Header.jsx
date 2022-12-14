import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { logout } from "../firebase";
import Search from "./Search";

const Header = () => {
  const router = useRouter();

  const logoutHandler = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className=" bg-white border-b border-gray-300">
      <div className="h-[60px] flex items-center justify-between container mx-auto">
        <Link href="/">
          <a>
            <Image
              width={103}
              height={29}
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            />
          </a>
        </Link>

        <Search />

        <nav>
          <button type="button" onClick={logoutHandler}>
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
