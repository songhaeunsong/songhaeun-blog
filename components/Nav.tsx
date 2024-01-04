import styled from "styled-components";
import navLinks from "@/data/navLinks";
import Link from "next/link";

interface NavProps {
  scrolling: boolean;
}

const Nav: React.FC<NavProps> = ({ scrolling }) => {
  return (
    <nav>
      {navLinks.map((nav) => (
        <NavLink href={nav.link} key={nav.title} scrolling={scrolling}>
          <span>{nav.title}</span>
        </NavLink>
      ))}
    </nav>
  );
};

const NavLink = styled(Link)<NavProps>`
  text-decoration-line: none;
  font-weight: 300;
  font-size: 17px;
  color: ${(props) => (props.scrolling ? props.theme.pointColor : "white")};
  span {
    margin: 0 0.5rem;
  }
  span:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.7px;
  }
`;
export default Nav;
