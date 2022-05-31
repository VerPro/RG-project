import { Avatar, Button, Link, Stack } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';
import Navigation from '../components/Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Profile() {
  const { data: session } = useSession();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <h1>Můj profil</h1>

      <Avatar
        alt={`${session?.user?.name}`}
        src={`${session?.user?.image}`}
      ></Avatar>
      <h2>{session?.user?.name}</h2>
      <h3>{session?.user?.email}</h3>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => signOut({ callbackUrl: '/' })}
        startIcon={<FontAwesomeIcon icon={faArrowRightFromBracket} />}
      >
        <a>Odhlásit</a>
      </Button>
      <Navigation />
    </Stack>
  );
}
