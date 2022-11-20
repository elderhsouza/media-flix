import Image from "next/image";
import { ReactElement } from "react";
import { Show } from "../hooks/useShow";
import FavoriteButton from "./input/FavoriteButton";
import styles from "./ShowInfo.module.css";

interface ShowProps {
  show: Show;
}

function ShowInfo({ show }: ShowProps): ReactElement {
  return (
    <section className={styles.showInfo}>
      <h1>{show.name}</h1>
      <ul>
        <li>First Aired: {show.firstAired}</li>
        <li>Last Aired: {show.lastAired}</li>
        <li>Status: {show.status}</li>
      </ul>
      <Image alt={show.name} src={show.image} width={300} height={441} />
      <p>{show.overview}</p>
      <FavoriteButton showId={show.id}></FavoriteButton>
    </section>
  );
}

export default ShowInfo;
