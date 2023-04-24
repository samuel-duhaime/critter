import { useContext } from "react";
import { UserContext } from "../Global/Context/UserContext";
import PageTitle from "../Global/PageTitle";
import MinorText from "../Global/Text/MinorText";
import InfoText from "../Global/Text/InfoText";

const Notifications = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <PageTitle backButton={true}>
        <div>Notifications</div>
        <div>
          <MinorText>@{user?.handle}</MinorText>
        </div>
      </PageTitle>

      <InfoText
        title="Nothing to see here — yet."
        text="From likes to Remeows and a whole lot more, this is where all the action happens."
        icon="bell"
      />
    </>
  );
};

export default Notifications;
