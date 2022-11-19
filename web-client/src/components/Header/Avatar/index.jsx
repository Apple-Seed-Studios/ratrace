import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import { useAuth0 } from "@auth0/auth0-react";
import { When } from 'react-if';

export default function AvatarPic()
{
  const { user, isAuthenticated } = useAuth0();
  return (
    <When condition={ isAuthenticated }>
      <Box sx={ { display: 'flex', gap: 2, alignItems: 'center' } }>
        <Avatar
          alt={ user.name }
          src={ user.picture }
          size="sm" />
      </Box>
    </When>
  );
}
