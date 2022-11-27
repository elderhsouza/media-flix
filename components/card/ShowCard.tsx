import Image from 'next/image';
import { ReactElement } from 'react';
import useShow from '../../hooks/useShow';
import formatDate from '../../lib/format.date';
import FavoriteButton from '../input/FavoriteButton';
import styles from './ShowCard.module.css';

interface ShowProps {
  showId: string;
}

function ShowCard({ showId }: ShowProps): ReactElement {
  const { data: show } = useShow(showId);

  if (!show) {
    return <div>loading...</div>;
  }

  return (
    <section className={styles.showInfo}>
      <header className={styles.header}>
        <h2 className={styles.name}>{show.name}</h2>
        <FavoriteButton showId={show.id}></FavoriteButton>
      </header>
      <div className={styles.main}>
        <Image
          className={styles.image}
          alt={show.name}
          src={show.image}
          width={300}
          height={441}
        />
        <div>
          <p className={styles.overview}>{show.overview}</p>
          <ul className={styles.infoList}>
            <li>First Aired: {formatDate(show.firstAired)}</li>
            <li>Last Aired: {formatDate(show.lastAired)}</li>
            <li>Status: {show.status}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ShowCard;
