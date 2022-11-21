import useFavorites from "../../hooks/useFavorites";

function FavoritesPage() {
  const [favorites] = useFavorites();

  return (
    <>
      <h1>My Favorite Shows</h1>
      <pre>{JSON.stringify(favorites, null, 2)}</pre>
    </>
  )
}

export default FavoritesPage;