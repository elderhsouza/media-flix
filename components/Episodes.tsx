import { ReactElement } from "react";
import { List } from "rsuite";
import useEpisodes, { Episode } from "../hooks/useEpisodes";

function Episodes({seasonId}: {seasonId: number}): ReactElement {
  const { data: episodes } = useEpisodes(seasonId);

  if (!episodes) {
    return <div>Loading...</div>;
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
  )
}

export default Episodes;