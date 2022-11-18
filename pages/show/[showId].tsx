import Image from "next/image";
import { useRouter } from "next/router";
import { Suspense } from "react";
import { Button, Col, Grid, List, Loader, Row } from "rsuite";
import useShow from "../../hooks/useShow";

function Page() {
  const router = useRouter();
  const { showId } = router.query;

  const { data: show } = useShow(String(showId));
  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<Loader />}>
      <h1>{show.name}</h1>
      <Image alt={show.name} src={show.image} width={500} height={735} />
      <h2>Seasons</h2>
      <Grid fluid>
        <Row>
          <Col xs={3}>
          <List>
            {show.seasons.map((season) => (
              <List.Item key={season.id}>
                <Button appearance="link">Season {season.number}</Button>
              </List.Item>
            ))}
          </List>
        </Col>
        <Col xs={16}>
          <p>Episodes</p>
        </Col>
        </Row>
      </Grid>

      {/* <pre>{JSON.stringify(show, null, 2)}</pre> */}
    </Suspense>
  );
}

export default Page;