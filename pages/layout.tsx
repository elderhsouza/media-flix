import type { ReactElement } from 'react'
import { Navbar, Nav, Grid, Row, Col } from 'rsuite';
import PlayOutlineIcon from '@rsuite/icons/PlayOutline';
import { FiStar } from "react-icons/fi"
import SearchBar from '../components/SearchBar';
import Link from 'next/link';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <div>
      {/* Navigation Bar */}
      <Navbar>
        <Grid fluid>
          <Row>
            <Col xs={8}>
              <Nav>
                <Nav.Item icon={<PlayOutlineIcon />}><Link href="/">MediaFlix</Link></Nav.Item>
                <Nav.Item icon={<FiStar />}>Favorites</Nav.Item>
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