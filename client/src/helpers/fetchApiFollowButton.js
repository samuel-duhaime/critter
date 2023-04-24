// Fetch Api for Follow button
const fetchApiFollowButton = ({ apiUrl }) => {
  fetch(apiUrl, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json(); // Send the result to the next line
    })
    .catch((err) => {
      console.error(err);
    });
};

export default fetchApiFollowButton;
