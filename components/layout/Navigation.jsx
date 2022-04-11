import Link from "next/link";
import Logo from "./Logo.jsx";
import classes from "./navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
