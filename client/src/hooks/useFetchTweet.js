import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchApiTweet from "../helpers/fetchApiTweet";

// Fetch tweet
const useFetchTweet = ({ apiUrl }) => {
  const [tweet, setTweet] = useState(null);
  const navigate = useNavigate(); // Navigate to a page

  useEffect(() => {
    fetchApiTweet({ apiUrl, setTweet, navigate }); // Fetch Api for tweet
  }, [apiUrl, navigate]);

  return { tweet, setTweet };
};

export default useFetchTweet;
