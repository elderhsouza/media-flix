import React, { ReactElement, useEffect, useState } from "react";
import { throttle } from "lodash";
import { useRouter } from "next/router";
import { InputGroup, AutoComplete } from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import { ItemDataType } from "rsuite/esm/@types/common";

const accessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiIzOTAwMjE4Zi1mY2NhLTQ4NGYtODBjMy04YjRjYzIxYzI4YWIiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjp0cnVlLCJleHAiOjE2NzEzNDU1MDMsImdlbmRlciI6IiIsImhpdHNfcGVyX2RheSI6MTAwMDAwMDAwLCJoaXRzX3Blcl9tb250aCI6MTAwMDAwMDAwLCJpZCI6IjEwODg1NiIsImlzX21vZCI6ZmFsc2UsImlzX3N5c3RlbV9rZXkiOmZhbHNlLCJpc190cnVzdGVkIjpmYWxzZSwicGluIjoiUlEyMFNZWlYiLCJyb2xlcyI6W10sInRlbmFudCI6InR2ZGIiLCJ1dWlkIjoiIn0.WnykxtqoK7A2NoFgstQ6IfPyed3IGrQ0CpSQb49YyP2wQKT6kNXcI1YMlRW4Rv2buNe1fnN5-kemabODRRpzDW6o0VT4bfnOKTu3hkPEbXUSE-ZIcHvk5HWRpKQrjaqWnQQWSstX5ojT-8le8OmfMLHTL4VW613FiAqJ0Yj70yIUf2lwPPLuY3qiioPHPgZC0SX6xXypQ08KtCT6U8HCXi9uTr6Xt8ofh--uzFwWjdUBCHeHbi3ZOys4QuHIIl864n9d3oSnBZVXZOCeZieprVH5C3xK_16Yh7Kc1BxJLkXfW9D2mZT2TX_tyDg1ubiTJcDaj9MOoTWWe4lFVu2W_mKw2FDyFXCQfN10kJrFIOAd4riE6s9VCzUCbRH6X4-aE8HO6vfkKrarDTlmyEzGRKMvkvxfDj4Qm81ZO2BD_Aa2K403LTPDVQiTzJyyd0DKSfXt27mbSq4BhzXW3bWqJuw88mTwHsR9EMCwzfZdrpjwvZ5T7fh6YTnctVjFvkAVgm_1NfCgPwzjKSfg5giNnnxGwYh0C3yYBLtQlTGlz3GfEgI3wDRS0tzz7_cPFa60FK2O-jxxVZmeuLwaQ_dBqXfXDTBHiqVZfqkVNw2wvGdT3yC08HNfaBUNOXntxxKJgsHnWfcR4oEy8ynGZXdfx-CgKQIz9D76UtuhGqJBvQ0';

const styles = {
  width: 500,
  margin: '10px auto'
};

function SearchBar(): ReactElement {
  const [data, setData] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    console.log('searchBarValue', searchBarValue);
  }, [searchBarValue]);

  async function search(query: string): Promise<ItemDataType[]> {
    return await fetch(
        `https://api4.thetvdb.com/v4/search?query=${query}&type=series&language=en&limit=10`,
        { headers: {'Authorization': `Bearer ${accessToken}`}})
      .then(res => res.json())
      .then(res => res.data.map(
        (show: ItemDataType) => {
          return {
            label: show.name,
            value: show.tvdb_id
          }
        }))
  }

  const throttledSearch = React.useRef(
    throttle(async (query) => {
      return await search(query);
    }, 500)
  ).current;

  async function onChange(value: string) {
    setSearchBarValue(value);

    if (searchBarValue.length >= 3) {
      console.log('searching...', value);

      try {
        setData(await throttledSearch(value) as any);
      } catch (error) {
        console.error(error);
      }
    }
  }

  function onSelect(value: string) {
    router.push(`/show/${encodeURIComponent(value)}`);
  }

  return (
    <InputGroup inside style={styles}>
      <AutoComplete
        data={data}
        value={searchBarValue}
        onChange={onChange}
        onSelect={onSelect}
        onClose={() => setSearchBarValue('')}
        renderMenuItem={ (_, item) => {
          return (
            <div>{item.label}</div>
          )
        }}
      />
      <InputGroup.Addon>
        <SearchIcon />
      </InputGroup.Addon>
    </InputGroup>
  )
}

export default SearchBar;