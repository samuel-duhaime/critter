import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchApiFeed from "../helpers/fetchApiFeed";

// Fetch feed
const useFetchFeed = ({ apiUrl }) => {
  const [feed, setFeed] = useState(null);
  const [refetchFeed, setRefetchFeed] = useState(false); // Usefull for refetching the feed
  const navigate = useNavigate(); // Navigate to a page

  useEffect(() => {
    fetchApiFeed({ apiUrl, setFeed, navigate }); // Fetch Api for Feed
  }, [refetchFeed, apiUrl, navigate]);

  return { feed, setFeed, refetchFeed, setRefetchFeed };
};

export default useFetchFeed;
