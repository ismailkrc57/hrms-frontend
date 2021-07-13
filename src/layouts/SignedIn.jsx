import React from "react";
import { useSelector } from "react-redux";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({ signOut }) {
  const { user } = useSelector((state) => state.userReducer);
  let name = "Test";
  if (user.type === 0) name = user.user.name + " " + user.user.surname;
  else name = user.user.companyName;

  return (
    <div>
      <Menu.Item>
        <Image
          src={`https://ui-avatars.com/api/?bold=true&name=${name}&background=random&size=128`}
          avatar
        ></Image>
        <Dropdown text={`Hi ${name}`} pointing="top left">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Edit Profile" />
            <Dropdown.Item icon="globe" text="Choose Language" />
            <Dropdown.Item icon="settings" text="Account Settings" />
            <Dropdown.Divider />
            <Dropdown.Item onClick={signOut} icon="sign out" text="Sign out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
