import navLinks from "@/data/navLinks";
import Link from "next/link";

const Nav: any = () => {
  <nav>
    {navLinks.map((nav) => (
      <Link href={nav.link} key={nav.title}>
        <a>{nav.title}</a>
      </Link>
    ))}
  </nav>;
};
export default Nav;
