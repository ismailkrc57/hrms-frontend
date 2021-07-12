import React from 'react'
import { useSelector } from 'react-redux';
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {

  const {user} = useSelector(state => state.userReducer)

    return (
      <div>
        <Menu.Item>
          <Image
            src="https://avatars.githubusercontent.com/u/57635608?s=400&u=4903029359a29640b4a26957eecb486d4d74b12a&v=4"
            avatar
          ></Image>
          <Dropdown  text={`Hi ${(user.name)}`} pointing="top left">
            <Dropdown.Menu>
              <Dropdown.Item icon="edit" text="Edit Profile" />
              <Dropdown.Item icon="globe" text="Choose Language" />
              <Dropdown.Item icon="settings" text="Account Settings" />
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={signOut}
                icon="sign out"
                text="Sign out"
              />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </div>
    );
}
