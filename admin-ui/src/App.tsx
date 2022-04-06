import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CommunityList } from "./community/CommunityList";
import { CommunityCreate } from "./community/CommunityCreate";
import { CommunityEdit } from "./community/CommunityEdit";
import { CommunityShow } from "./community/CommunityShow";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { CommentLikeList } from "./commentLike/CommentLikeList";
import { CommentLikeCreate } from "./commentLike/CommentLikeCreate";
import { CommentLikeEdit } from "./commentLike/CommentLikeEdit";
import { CommentLikeShow } from "./commentLike/CommentLikeShow";
import { PostLikeList } from "./postLike/PostLikeList";
import { PostLikeCreate } from "./postLike/PostLikeCreate";
import { PostLikeEdit } from "./postLike/PostLikeEdit";
import { PostLikeShow } from "./postLike/PostLikeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Reddit Clone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Community"
          list={CommunityList}
          edit={CommunityEdit}
          create={CommunityCreate}
          show={CommunityShow}
        />
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="CommentLike"
          list={CommentLikeList}
          edit={CommentLikeEdit}
          create={CommentLikeCreate}
          show={CommentLikeShow}
        />
        <Resource
          name="PostLike"
          list={PostLikeList}
          edit={PostLikeEdit}
          create={PostLikeCreate}
          show={PostLikeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
