import React, { useState, useEffect, useContext } from "react";
import SelectProfileContainer from "./profiles";
import useAuthListener from "../hooks/use-auth-listener";
import { FirebaseContext } from "../context/firebase";
import { Loading, Header, Card, Player } from "../components";
import Fuse from "fuse.js";
import logo from "../logo.svg";

import * as ROUTES from "../constants/routes";

const BrowseContainer = ({ slides }) => {
  const [category, setCategory] = useState("series");
  const [slideRows, setSlidesRows] = useState([]);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { user } = useAuthListener();
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlidesRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.description", "data.title", "data.genre"],
    });

    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlidesRows(results);
    } else {
      setSlidesRows(slides[category]);
    }
  }, [searchTerm]);
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
            <Header.TextLink
              active={category === "series" ? true : false}
              onClick={() => setCategory("series")}>
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? true : false}
              onClick={() => setCategory("films")}>
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
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
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.Subtitle>{item.title}</Card.Subtitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
  return;
};

export default BrowseContainer;
