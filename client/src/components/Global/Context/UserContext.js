import { createContext, useReducer, useEffect } from "react";
import fetchApiUser from "../../../helpers/fetchApiUser";

export const UserContext = createContext(null);

// Initial context user
const initialUser = {
  status: "loading", // Custom status of the fetching user : "loading" || "idle"
  isError: false, // Custom error of the fetching user : true || false
  avatarSrc: null,
  bannerSrc: null,
  bio: null,
  displayName: null,
  handle: null,
  isBeingFollowedByYou: null,
  isFollowingYou: null,
  joined: null,
  location: null,
  numFollowers: null,
  numFollowing: null,
  numLikes: null,
};

// Reducer for all the actions type of user
const userReducer = (user, action) => {
  const { type, profile, isError } = action; // All the action object

  switch (type) {
    case "fetchUser": {
      return {
        ...user,
        ...profile,
        status: "idle",
      };
    }

    // If Error
    case "fetchError": {
      return {
        ...user,
        isError,
      };
    }

    default: {
      throw new Error(`Invalid type: ${type}`);
    }
  }
};

// Context user provider
export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, initialUser);

  // Update current user when fetch
  const fetchUser = ({ profile }) => {
    dispatch({ type: "fetchUser", profile });
  };

  // When fetch error. Change isError stade.
  const fetchError = ({ isError }) => {
    dispatch({ type: "fetchError", isError });
  };

  // Fetch the user profile when loading
  useEffect(() => {
    /* Fetch Api for user */
    fetchApiUser({
      apiUrl: "/api/me/profile",
      fetchUser,
      fetchError,
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        actions: {
          fetchUser,
          fetchError,
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
