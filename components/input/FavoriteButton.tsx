import { ReactElement } from "react";
import { FiStar } from "react-icons/fi";
import { Button } from "rsuite";
import useFavorites from "../../hooks/useFavorites";

function FavoriteButton({ showId }: {showId: string}): ReactElement {
  const [favorites, favoritesActions] = useFavorites();
  const isFavorite = favorites.includes(showId);

  function onFavoriteButtonClick() {
    favoritesActions.toggle(showId);
  }

  return (
    <Button
      appearance="primary"
      color={isFavorite ? "blue" : "green"}
      style={{ width: 100, textAlign: "start" }}
      onClick={onFavoriteButtonClick}
    >
      <FiStar /> {isFavorite ? "Remove" : "Add"}
    </Button>
  );
}

export default FavoriteButton;
