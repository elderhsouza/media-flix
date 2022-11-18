import { ReactElement } from "react";
import useEpisodes, { Episode } from "../hooks/useEpisodes";

function Episodes({seasonId}: {seasonId: number}): ReactElement {
  const { data: episodes } = useEpisodes(seasonId);

  if (!episodes) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {episodes.map((episode: Episode) => (
        <div key={episode.id}>
          <h4>{episode.name}</h4>
          <p>{episode.aired}</p>
          <p>{episode.overview}</p>
        </div>
      ))}
    </>
  )
}

export default Episodes;