import { useContext, useEffect } from "react";
import { UserContext } from "../Global/Context/UserContext";
import InfoText from "../Global/Text/InfoText";

// Error page
const Error = () => {
  const {
    actions: { fetchError },
  } = useContext(UserContext);

  // When the page load. IsError state go back to false.
  useEffect(() => {
    fetchError({ isError: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfoText
      title="An unknown error has occured."
      text="Please try refreshing the page, or contact support if the problem
        persists."
      icon="bomb"
    />
  );
};

export default Error;
