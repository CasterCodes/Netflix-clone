import React, { useState, useEffect, useContext } from "react";
import SelectProfileContainer from "./profiles";
import useAuthListener from "../hooks/use-auth-listener";
import { FirebaseContext } from "../context/firebase";
import { Loading, Header } from "../components";
import logo from "../logo.svg";

import * as ROUTES from "../constants/routes";

const BrowseContainer = ({ slides }) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useAuthListener();
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? (
        <Loading src={`/images/users/${user.photoURL}.png`} />
      ) : (
        <Loading.ReleaseBody />
      )}

      <Header src="joker1">
        <Header.Container>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="netflix" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={`/images/users/${user.photoURL}.png`} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={`/images/users/${user.photoURL}.png`} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Container>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            {" "}
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
  return;
};

export default BrowseContainer;
