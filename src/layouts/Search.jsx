import React from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "semantic-ui-react";

export default function Search() {
  const options = [
    { key: "edit", icon: "edit", text: "Edit Post", value: "edit" },
    { key: "delete", icon: "delete", text: "Remove Post", value: "delete" },
    { key: "hide", icon: "hide", text: "Hide Post", value: "hide" },
  ];

  return (
    <div className="mr-0">
      <Button.Group color="blue">
        <Button as={Link} to="/NotFound">
          Post a Job
        </Button>
        <Dropdown
          
          className="button icon"
          floating
          options={options}
          trigger={<Link to ="/NotFound"></Link>}
        />
      </Button.Group>
    </div>
  );
}
