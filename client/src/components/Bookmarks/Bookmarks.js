import { useContext } from "react";
import { UserContext } from "../Global/Context/UserContext";
import PageTitle from "../Global/PageTitle";
import MinorText from "../Global/Text/MinorText";
import InfoText from "../Global/Text/InfoText";

const Bookmarks = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <PageTitle backButton={true}>
        <div>Bookmarks</div>
        <div>
          <MinorText>@{user?.handle}</MinorText>
        </div>
      </PageTitle>

      <InfoText
        title="Save Meows for later."
        text="Don’t let the good ones fly away! Bookmark Meows to easily find them
          again in the future."
        icon="bookmark"
      />
    </>
  );
};

export default Bookmarks;
