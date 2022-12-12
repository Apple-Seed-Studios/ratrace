import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../../../hooks/useAuth";
import { If, Then, Else } from "react-if";

export default function AvatarPic() {
  const { user, isAuthenticated } = useAuth();
  return (
    <>
      <If condition={isAuthenticated}>
        <Then>
          <Avatar alt={user.name} src={user.picture} size="sm" />
        </Then>
        <Else>
          <Avatar alt="User not logged in image" src="/broken-image.jpg" />
        </Else>
      </If>
    </>
  );
}
