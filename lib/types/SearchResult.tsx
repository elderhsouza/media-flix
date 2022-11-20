import { ItemDataType } from "rsuite/esm/@types/common";

export type SearchResult =
  | ItemDataType
  | {
      tvdb_id: string;
      name: string;
      thumbnail: string;
    };
