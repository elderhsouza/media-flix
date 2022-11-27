import Link from 'next/link';
import useFavorites from '../../hooks/useFavorites';

function FavoritesPage() {
  const [favorites] = useFavorites();

  return (
    <>
      <h1>My Favorite Shows</h1>
      <ul>
        {favorites.map(favorite => {
          return (
            <li key={favorite}>
              <Link  href={`/show/${favorite}`}>{favorite}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FavoritesPage;