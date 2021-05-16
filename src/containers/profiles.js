import React from "react";
import * as ROUTES from "../constants/routes";
import { Header, Profiles } from "../components";
import logo from "../logo.svg";

const SelectProfileContainer = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Container>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="netflix-logo" />
        </Header.Container>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching ? </Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => {
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              });
            }}>
            <Profiles.Picture src={`/images/users/${user.photoURL}.png`} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};

export default SelectProfileContainer;
