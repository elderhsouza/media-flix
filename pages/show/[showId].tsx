import { useRouter } from "next/router";
import React, { useState } from "react";
import { Affix, Button, Col, Grid, List, Row } from "rsuite";
import EpisodesList from "../../components/EpisodesList";
import ShowInfo from "../../components/ShowInfo";
import useShow from "../../hooks/useShow";

function ShowPage() {
  const router = useRouter();
  const { showId } = router.query;
  const { data: show, isError } = useShow(showId as string);
  const [seasonId, setSeasonId] = useState<string>();

  if (isError) {
    return <div>Failed to load</div>;
  }

  if (!show) {
    return <>Loading...</>;
  }

  function onSeasonClick(season: string) {
    setSeasonId(season);
  }

  return (
    <>
      <ShowInfo show={show} />
      <h2>Seasons</h2>
      <Grid fluid style={{marginTop: "1.5rem"}}>
        <Row>
          <Col xs={3}>
            <Affix>
              <List>
                {show.seasons.map((season) => (
                  <List.Item key={season.id}>
                    <Button style={{border: "none"}}
                      appearance="ghost"
                      onClick={() => onSeasonClick(season.id)}
                    >
                      Season {season.number}
                    </Button>
                  </List.Item>
                ))}
              </List>
            </Affix>
          </Col>
          <Col xs={21}>
            <EpisodesList seasonId={seasonId || show.seasons[0].id} />
          </Col>
        </Row>
      </Grid>
    </>
  );
}

export default ShowPage;
