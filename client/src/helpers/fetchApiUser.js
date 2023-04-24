// Fetch Api for user
const fetchApiUser = ({
  apiUrl,
  fetchUser,
  fetchError,
  setProfileUser,
  navigate,
}) => {
  fetch(apiUrl)
    .then((res) => {
      // If Error. Send to error page.
      if (res.status !== 200) {
        console.log("An unknow error has occured.");

        // If fetchError. Change error state and go to page error.
        if (typeof fetchError === "function") {
          fetchError({ isError: true });
        }

        // If navigate. Go to page error.
        if (typeof navigate === "function") {
          navigate("/error");
        }
      }

      return res.json(); // Send the result to the next line
    })
    .then((data) => {
      const { profile } = data;

      /* Check if profil exist */
      if (profile) {
        // Update current user with profile if possible
        if (typeof fetchUser === "function") {
          fetchUser({ profile });
        }

        // Update profile user with profile if possible
        if (typeof setProfileUser === "function") {
          setProfileUser(profile);
        }

        return { profile };
      } else {
        throw new Error("User fetching error"); // For error status
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

export default fetchApiUser;
