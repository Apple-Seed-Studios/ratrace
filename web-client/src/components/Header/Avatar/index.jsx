import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useAuth0 } from "@auth0/auth0-react";
import { If, Then, Else } from 'react-if';

export default function AvatarPic()
{
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
      <If condition={ isAuthenticated }>
        <Then>
          <Avatar
            alt={ user.name }
            src={ user.picture }
            size="sm"
          />
        </Then>
        <Else>
          <Avatar
            alt="User not logged in image"
            src="/broken-image.jpg"
          />
        </Else>
      </If>

    </>
  );
}
