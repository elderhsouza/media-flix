import PlayOutlineIcon from "@rsuite/icons/PlayOutline";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { FiStar } from "react-icons/fi";
import { Navbar, Grid, Row, Col, Nav } from "rsuite";
import SearchBarAutoComplete from "./input/SearchBarAutoComplete";

function Navigation(): ReactElement {
  const router = useRouter();

  return (
    <Navbar>
      <Grid fluid>
        <Row>
          <Col xs={8}>
            <Nav>
              <Nav.Item onClick={() => router.push('/')} icon={<PlayOutlineIcon />}>
                MediaFlix
              </Nav.Item>
              <Nav.Item onClick={() => router.push('/favorites')} icon={<FiStar />}>Favorites</Nav.Item>
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
  );
}

export default Navigation;
