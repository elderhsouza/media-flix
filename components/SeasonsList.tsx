
import { Button, List } from 'rsuite';

// interface EpisodesProps {
//   seasonId: string;
// }

function SeasonsList({ seasons }) {
  // const [seasonId, setSeasonId] = useState(seasons[0].id);
  // function onSeasonClick(seasonId: string) {
  //   setSeasonId(seasonId);
  // }

  return (
    <List>
      {seasons.map((season) => (
        <List.Item key={season.id}>
          <Button style={{ border: 'none' }}
            appearance="ghost"
            // onClick={() => onSeasonClick(season.id)}
          >
            Season {season.number}
          </Button>
        </List.Item>
      ))}
    </List>
  );
}

export default SeasonsList;
