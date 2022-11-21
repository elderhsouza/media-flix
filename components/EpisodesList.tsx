import Image from "next/image";
import { ReactElement } from "react";
import { List } from "rsuite";
import useEpisodes from "../hooks/useEpisodes";
import formatDate from "../lib/format.date";
import { Episode } from "../lib/types/Episode";
import styles from "./EpisodesList.module.css";

interface EpisodesProps {
  seasonId: string;
}

function Episodes({ seasonId }: EpisodesProps): ReactElement {
  const { data: episodes } = useEpisodes(seasonId);

  if (!episodes) {
    return <>Loading...</>;
  }

  return (
    <List style={{ marginLeft: "2rem" }}>
      {episodes.map((episode: Episode) => (
        <List.Item key={episode.id}>
          <div className={styles.episode}>
            <header className={styles.header}>
              <Image
                className={styles.image}
                src={episode.image}
                alt={episode.name}
                width={300}
                height={169}
              />
              <div className={styles.episodeInfo}>
                <h4 className={styles.title}>{episode.name}</h4>
                <p>Aired: {formatDate(episode.aired)}</p>
              </div>
            </header>
            <p>{episode.overview}</p>
          </div>
        </List.Item>
      ))}
    </List>
  );
}

export default Episodes;
