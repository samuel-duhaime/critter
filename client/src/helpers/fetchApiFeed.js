// Fetch Api for Feed
const fetchApiFeed = ({ apiUrl, setFeed, navigate }) => {
  fetch(apiUrl)
    .then((res) => {
      // If Error. Send to error page.
      if (res.status !== 200) {
        console.log("An unknow error has occured.");
        navigate("/error");
      }

      return res.json(); // Send the result to the next line
    })
    .then((data) => {
      const { tweetsById, tweetIds } = data;

      if (tweetsById || tweetIds) {
        setFeed({ tweetsById, tweetIds });
      } else {
        throw new Error("Fetch home error"); // For error status
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export default fetchApiFeed;
