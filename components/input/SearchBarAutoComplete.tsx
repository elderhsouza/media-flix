import SearchIcon from "@rsuite/icons/Search";
import { throttle } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactElement, ReactNode, useState } from "react";
import { AutoComplete, InputGroup } from "rsuite";
import type { SearchResult } from "../../lib/types/SearchResult";

async function search(query: string): Promise<SearchResult[]> {
  return await fetch(
    `/api/search?query=${query}&type=series&language=en&limit=20`
  )
    .then((res) => res.json())
    .then((res) =>
      res.map((result: SearchResult) => {
        return {
          ...result,
          label: result.name,
          value: result.tvdb_id,
        };
      })
    );
}

function renderMenuItem(
  _: ReactNode,
  { name, thumbnail }: SearchResult
): ReactNode {
  return (
    <div>
      {thumbnail && <Image src={thumbnail} alt={name} width={20} height={29} />}
      {name}
    </div>
  );
}

function SearchBar(): ReactElement {
  const [searchResults, setSearchResults] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const router = useRouter();

  const throttledSearch = React.useRef(
    throttle(async (query) => {
      return await search(query);
    }, 500)
  ).current;

  async function onChange(value: string) {
    setSearchBarValue(value);

    if (searchBarValue.length >= 3) {
      try {
        setSearchResults((await throttledSearch(value)) as any);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function onSelect(showId: string) {
    router.push(`/show/${showId}`);
  }

  return (
    <InputGroup inside style={{ width: "300%", margin: "10px auto" }}>
      <AutoComplete
        data={searchResults}
        value={searchBarValue}
        renderMenuItem={renderMenuItem}
        onChange={onChange}
        onSelect={onSelect}
        onClose={() => setSearchBarValue("")}
      />
      <InputGroup.Addon>
        <SearchIcon />
      </InputGroup.Addon>
    </InputGroup>
  );
}

export default SearchBar;
