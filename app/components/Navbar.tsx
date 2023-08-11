"use client";

import { useRouter } from "next/navigation";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <h1 onClick={() => router.push("/")} className={classes.logo}>
          FashionVista
        </h1>
        <nav>
          <ul className={classes.list}>
            <li onClick={() => router.push("/auth")}>Login</li>
            <li onClick={() => router.push("/auth")}>Sign up</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
