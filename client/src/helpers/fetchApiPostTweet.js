// Fetch Api to POST a new tweet
const fetchApiPostFeed = ({ body }) => {
  fetch("/api/tweet", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      // If Error. Send to error page.
      if (res.status !== 200) {
        console.log("An unknow error has occured.");
        window.alert("An unknow error has occured. Please try again.");
      }

      return res.json(); // Send the result to the next line
    })
    .catch((err) => {
      console.error(err);
    });
};

export default fetchApiPostFeed;
