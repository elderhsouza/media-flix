import Image from "next/image";
import { ReactElement } from "react";
import FavoriteButton from "./input/FavoriteButton";
import styles from "./ShowInfo.module.css";
import { Show } from "../lib/types/Show";
import formatDate from "../lib/format.date";

interface ShowProps {
  show: Show;
}

function ShowInfo({
  show: { id, overview, name, image, firstAired, lastAired, status },
}: ShowProps): ReactElement {
  return (
    <section className={styles.showInfo}>
      <header className={styles.header}>
        <h2 className={styles.name}>{name}</h2>
        <FavoriteButton showId={id}></FavoriteButton>
      </header>
      <div className={styles.main}>
        <Image
          className={styles.image}
          alt={name}
          src={image}
          width={300}
          height={441}
        />
        <div>
          <p className={styles.overview}>{overview}</p>
          <ul className={styles.infoList}>
            <li>First Aired: {formatDate(firstAired)}</li>
            <li>Last Aired: {formatDate(lastAired)}</li>
            <li>Status: {status}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ShowInfo;
