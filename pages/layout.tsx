import PlayOutlineIcon from "@rsuite/icons/PlayOutline";
import Link from "next/link";
import { ReactElement } from "react";
import { FiStar } from "react-icons/fi";
import { Col, Grid, Nav, Navbar, Row } from "rsuite";
import SearchBarAutoComplete from "../components/input/SearchBarAutoComplete";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <header>
        <Navbar>
          <Grid fluid>
            <Row>
              <Col xs={8}>
                <Nav>
                  <Nav.Item href="/" icon={<PlayOutlineIcon />}>
                    MediaFlix
                  </Nav.Item>
                  <Nav.Item icon={<FiStar />}>Favorites</Nav.Item>
                </Nav>
              </Col>
              <Col xs={16}>
                <Nav>
                  <SearchBarAutoComplete />
                </Nav>
              </Col>
            </Row>
          </Grid>
        </Navbar>
      </header>
      <main className="container">{children}</main>
      <footer></footer>
    </>
  );
}
