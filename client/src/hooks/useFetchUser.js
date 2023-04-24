import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchApiUser from "../helpers/fetchApiUser";

const useFetchUser = ({ profileId }) => {
  const [profileUser, setProfileUser] = useState(null); // Initial profile user
  const [isRefetch, setIsRefetch] = useState(false);
  const navigate = useNavigate(); // Navigate to a page

  // Usefull to refetch user
  const refetchUser = () => {
    setIsRefetch(!isRefetch);
  };

  // Fetch the profile user
  useEffect(() => {
    // Fetch if another user than currentUser
    fetchApiUser({
      apiUrl: `/api/${profileId}/profile`,
      setProfileUser,
      navigate,
    }); // Get user profile
  }, [profileId, navigate, isRefetch]);

  return { profileUser, refetchUser };
};

export default useFetchUser;
