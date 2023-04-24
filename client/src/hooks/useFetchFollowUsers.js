import { useEffect, useState } from "react";

const useFetchFollowUsers = ({ apiUrl }) => {
  const [listUsers, setListUsers] = useState(null);
  const [isRefetch, setIsRefetch] = useState(false);

  // Usefull to refetch list of users
  const refetchListUsers = () => {
    setIsRefetch(!isRefetch);
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setListUsers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [apiUrl, isRefetch]);

  return { listUsers, setListUsers, refetchListUsers };
};

export default useFetchFollowUsers;
