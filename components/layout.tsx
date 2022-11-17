import type { ReactElement } from 'react'
import { Navbar, Nav, Grid, Row, Col } from 'rsuite';
import PlayOutlineIcon from '@rsuite/icons/PlayOutline';
import ListIcon from '@rsuite/icons/List';
import SearchBar from './SearchBar';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar>
        <Grid fluid>
          <Row>
            <Col xs={8}>
              <Navbar.Brand><PlayOutlineIcon /> MediaFlix</Navbar.Brand>
              <Nav>
                <Nav.Item icon={<ListIcon />}>My Media</Nav.Item>
              </Nav>
            </Col>
            <Col xs={16}>
              <Nav>
                <SearchBar />
              </Nav>
            </Col>
          </Row>
        </Grid>
      </Navbar>

      <main className='container'>{children}</main>

      {/* <Footer /> */}
    </div>
  )
}