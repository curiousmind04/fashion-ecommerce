"use client";

import { useRouter } from "next/navigation";
import classes from "./Navbar.module.css";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";

interface NavbarProps {
  currentUser?: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const router = useRouter();

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <h1 onClick={() => router.push("/")} className={classes.logo}>
          FashionVista
        </h1>
        <nav>
          <ul className={classes.list}>
            {currentUser ? (
              <>
                <li onClick={() => router.push("/")}>My Store</li>
                <li onClick={() => router.push("/")}>All Stores</li>
                <li onClick={() => router.push("/")}>My Cart</li>
                <li onClick={() => signOut()}>Logout</li>
              </>
            ) : (
              <>
                <li onClick={() => router.push("/login")}>Login</li>
                <li onClick={() => router.push("/register")}>Sign up</li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
