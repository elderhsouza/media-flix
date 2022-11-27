import { useRouter } from 'next/router';
import ShowCard from '../../components/card/ShowCard';

export default function ShowPage() {
  const router = useRouter();

  return (
    <>
      <ShowCard showId={router.query.showId as string} />
      {/* <h2>Seasons</h2>
              <Grid fluid style={{ marginTop: '1.5rem' }}>
        <Row>
          <Col xs={3}>
            <Affix>

            </Affix>
          </Col>
          <Col xs={21}>
            <EpisodesList seasonId={seasonId} />
          </Col>
        </Row>
      </Grid> */}
    </>
  );
}
