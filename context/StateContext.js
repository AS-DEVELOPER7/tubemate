import React, { useContext, useEffect, useRef, useState } from "react";
import { createContext } from "react";
const Context = createContext();
const StateContext = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [autoSearchValue, setAutoSearchValue] = useState("");
  const [videoId, setVideoId] = useState("");
  const [channelId, setChannelId] = useState("");
  const [selected, setSelected] = useState("Recommands");
  const [tags, setTags] = useState(true);
  const quicksearch = [
    { title: "Recommands", Route: "Home" },
    { title: "Trending", Route: "Trending" },
    { title: "Anime", Route: "Anime" },
    { title: "Gaming", Route: "Gaming" },
    { title: "Coding", Route: "Coding" },
    { title: "Trailers", Route: "Trailers" },
    { title: "Netflix", Route: "Netflix" },
    { title: "Movies", Route: "Movies" },
    { title: "Series", Route: "Series" },
    { title: "Gadgets", Route: "Gadgets" },
  ];
  return (
    <Context.Provider
      value={{
        searchValue,
        setSearchValue,
        autoSearchValue,
        setAutoSearchValue,
        videoId,
        setVideoId,
        channelId,
        setChannelId,
        tags,
        setTags,
        quicksearch,
        selected,
        setSelected,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;

export const useStateContext = () => useContext(Context);
