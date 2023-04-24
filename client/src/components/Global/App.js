import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { COLORS } from "../../helpers/constants";
import HomeFeed from "../HomeFeed/HomeFeed";
import Notifications from "../Notifications/Notifications";
import Bookmarks from "../Bookmarks/Bookmarks";
import Error from "../Error/Error";
import TweetDetails from "../TweetDetails/TweetDetails";
import Profile from "../Profile/Profile";
import Leftbar from "./Sidebar/Leftbar";
import Rightbar from "./Sidebar/Rightbar";
import ProfileFeed from "../Profile/ProfileFeed";
import FollowLayout from "../Follow/FollowLayout";
import Followers from "../Follow/Followers";
import Following from "../Follow/Following";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <AppLayout>
        <Leftbar />
        <Page>
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/tweet/:tweetId" element={<TweetDetails />} />
            <Route path="/error" element={<Error />} />

            {/* Profile layout element */}
            <Route path="/:profileId" element={<Profile />}>
              <Route index element={<ProfileFeed />} />
              <Route path="media" element={<div>Media</div>} />
              <Route path="likes" element={<div>Likes</div>} />
            </Route>

            {/* Followers and following */}
            <Route path="/:profileId" element={<FollowLayout />}>
              <Route path="followers" element={<Followers />} />
              <Route path="following" element={<Following />} />
            </Route>
          </Routes>
        </Page>
        <Rightbar />
      </AppLayout>
    </Router>
  );
};

const AppLayout = styled.main`
  display: flex;
  justify-content: center;
`;

const Page = styled.div`
  width: 100%;
  max-width: 600px;
  border-right: 1px solid ${COLORS.gray};
`;

export default App;
