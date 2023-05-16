import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const youtube = createApi({
  reducerPath: "youtube",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube138.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    // search
    autoComplete: builder.query({
      query: (value) => ({
        url: `auto-complete/`,
        method: "GET",
        params: { q: value, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    search: builder.query({
      query: ({ searchValue }) => ({
        url: `search/`,
        method: "GET",
        params: { q: searchValue, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    searchPage: builder.query({
      query: (value, filter) => ({
        url: `search/`,
        method: "GET",
        params: { q: value, cursor: filter, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),

    // channel
    channelDetails: builder.query({
      query: (Id) => ({
        url: `channel/details/`,
        method: "GET",
        params: { id: Id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    channelVideos: builder.query({
      query: (id) => ({
        url: `channel/videos/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    channelPlaylists: builder.query({
      query: (id) => ({
        url: `channel/playlists/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    channelChannels: builder.query({
      query: (id) => ({
        url: `channel/channels/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    // Video
    videoDetails: builder.query({
      query: (id) => ({
        url: `video/details/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    videoComments: builder.query({
      query: ({ videoId, type }) => ({
        url: `video/comments/`,
        method: "GET",
        params: { id: videoId, cursor: type, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    videoRelatedContents: builder.query({
      query: (id) => ({
        url: `video/related-contents/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    videoStreamingData: builder.query({
      query: (id) => ({
        url: `video/streaming-data/`,
        method: "GET",
        params: { id: id, hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    // Playlist
    playlistDetails: builder.query({
      query: () => ({
        url: `playlist/details/`,
        method: "GET",
        params: {
          id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    playlistVideos: builder.query({
      query: () => ({
        url: `playlist/videos/`,
        method: "GET",
        params: {
          id: "PLcirGkCPmbmFeQ1sm4wFciF03D_EroIfr",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),

    // Home
    Recommanded: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "recommanded",
          cursor: "cmVjb21tYW5kZWQmJiZFZ0lRQVElM0QlM0Q",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    Trending: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "Trending",
          cursor: "VHJlbmRpbmcmJiZFZ0lRQVElM0QlM0Q=",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    Anime: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "Anime",
          cursor: "QW5pbWUmJiZFZ0lRQVElM0QlM0Q=",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    Gaming: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "Gaming",
          cursor: "R2FtaW5nJiYmRWdJUUFRJTNEJTNE",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    Coding: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "Coding",
          cursor: "Q29kaW5nJiYmRWdJUUFRJTNEJTNE",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    Trailers: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "Trailers",
          cursor: "VHJhaWxlcnMmJiZFZ0lRQVElM0QlM0Q=",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    Netflix: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "Netflix",
          cursor: "TmV0ZmxpeCYmJkVnSVFBUSUzRCUzRA==",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    Movies: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "Movies",
          cursor: "TW92aWVzJiYmRWdJUUFRJTNEJTNE",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    Series: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "Series",
          cursor: "U2VyaWVzJiYmRWdJUUFRJTNEJTNE",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
    Gadgets: builder.query({
      query: () => ({
        url: `search/`,
        method: "GET",
        params: {
          q: "Gadgets",
          cursor: "R2FkZ2V0cyYmJkVnSVFBUSUzRCUzRA==",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }),
    }),
  }),
});
export const {
  useSearchQuery,
  useAutoCompleteQuery,
  useChannelDetailsQuery,
  useChannelVideosQuery,
  useChannelPlaylistsQuery,
  useChannelChannelsQuery,
  useVideoDetailsQuery,
  useVideoCommentsQuery,
  useVideoRelatedContentsQuery,
  useVideoStreamingDataQuery,
  usePlaylistDetailsQuery,
  useLazyPlaylistVideosQuery,
  useRecommandedQuery,
  useSearchPageQuery,
  useAnimeQuery,
  useTrendingQuery,
  useGamingQuery,
  useCodingQuery,
  useTrailersQuery,
  useNetflixQuery,
  useMoviesQuery,
  useSeriesQuery,
  useGadgetsQuery,
} = youtube;
