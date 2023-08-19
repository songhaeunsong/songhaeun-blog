import styled from "styled-components";
import navLinks from "@/data/navLinks";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      {navLinks.map((nav) => (
        <NavLink href={nav.link} key={nav.title}>
          <span>{nav.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};

const NavLink = styled(Link)`
  text-decoration-line: none;
  color: ${(props) => props.theme.fontColor};
  span {
    margin: 0 0.3rem;
  }
`;
export default Nav;
