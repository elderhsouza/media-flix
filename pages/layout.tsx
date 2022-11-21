import Link from "next/link";
import { ReactElement } from "react";
import { FiStar } from "react-icons/fi";
import { Col, Grid, Nav, Navbar, Row } from "rsuite";
import SearchBarAutoComplete from "../components/input/SearchBarAutoComplete";
import Navigation from "../components/Navigation";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="container">{children}</main>
      <footer></footer>
    </>
  );
}
