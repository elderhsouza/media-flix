import { useState } from "react";
import { useRouter } from "next/router";
import { Affix, Button, Col, Grid, List, Row } from "rsuite";
import useShow, { Show } from "../../hooks/useShow";
import Episodes from "../../components/Episodes";
import ShowInfo from "../../components/ShowInfo";

function ShowPage() {
  const router = useRouter();
  const { showId } = router.query;
  const { data: show } = useShow(showId as string);
  const [seasonId, setSeasonId] = useState<number>();

  if (!show) {
    return <div>Loading...</div>;
  }

  function onSeasonClick(season: number) {
    setSeasonId(season);
  }

  return (
    <>
      <ShowInfo show={show} />

      {/* <h2>Seasons</h2>
      <Grid fluid>
        <Row>
          <Col xs={3}>
            <Affix>
              <List>
                {show.seasons.map((season) => (
                  <List.Item key={season.id}>
                    <Button appearance="link" onClick={() => onSeasonClick(season.id)}>Season {season.number}</Button>
                  </List.Item>
                ))}
              </List>
            </Affix>
          </Col>
          <Col xs={21}>
            <Episodes seasonId={seasonId || show.seasons[0].id} />
          </Col>
        </Row>
      </Grid> */}
    </>
  );
}

export default ShowPage;