// Fetch Api for Tweet
const fetchApiTweet = ({ apiUrl, setTweet, navigate }) => {
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
      setTweet(data.tweet);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default fetchApiTweet;
