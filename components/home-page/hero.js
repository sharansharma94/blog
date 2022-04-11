import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.heroSection}>
      <div className={classes.heroImg}>
        <Image
          src="/images/site/hero.jpg"
          alt="hero section image"
          height={300}
          width={300}
        />
      </div>
      <h1>Hi, I'm Sharan</h1>
      <p>I blog about web development and security.</p>
    </section>
  );
}
