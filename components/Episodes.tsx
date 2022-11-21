import { ReactElement } from "react";
import { List } from "rsuite";
import useEpisodes from "../hooks/useEpisodes";
import { Episode } from "../lib/types/Episode";

interface EpisodesProps {
  seasonId: string;
}

function Episodes({ seasonId }: EpisodesProps): ReactElement {
  const { data: episodes } = useEpisodes(seasonId);

  if (!episodes) {
    return <>Loading...</>;
  }

  return (
    <List>
      {episodes.map((episode: Episode) => (
        <List.Item key={episode.id}>
          <h4>{episode.name}</h4>
          <p>{episode.aired}</p>
          <p>{episode.overview}</p>
        </List.Item>
      ))}
    </List>
  );
}

export default Episodes;
