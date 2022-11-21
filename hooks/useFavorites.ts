import { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

interface Actions {
  includes: (v: string) => boolean;
  add: (v: string) => void;
  remove: (v: string) => void;
  toggle: (v: string) => void;
}

type UseFavorites = [string[], Actions];

export default function useFavorites(): UseFavorites {
  const [storedFavorites, setStoredFavorites] = useLocalStorage<string[]>(
    "favorites",
    []
  );

  const includes = useCallback((showId: string) => {
    return storedFavorites.includes(showId);
  }, [storedFavorites]);

  const add = useCallback((showId: string) => {
    if (storedFavorites.includes(showId)) {
      return;
    }
    setStoredFavorites([...storedFavorites, showId]);
  }, [setStoredFavorites, storedFavorites]);

  const remove = useCallback((showId: string) => {
    if (!storedFavorites.includes(showId)) {
      return;
    }
    setStoredFavorites(storedFavorites.filter((id) => id !== showId));
  }, [setStoredFavorites, storedFavorites]);

  const toggle = useCallback((showId: string) => {
    if (storedFavorites.includes(showId)) {
      remove(showId);
    } else {
      add(showId);
    }
  }, [add, remove, storedFavorites]);

  const actions: Actions = {
    includes,
    add,
    remove,
    toggle,
  }

  return [
    storedFavorites,
    actions
  ];
}
