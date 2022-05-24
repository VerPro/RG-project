import { Avatar, Button, Link, Stack } from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import LogoutIcon from '@mui/icons-material/Logout';
import Navigation from '../components/Navigation';

export default function Profile() {
  const { data: session } = useSession();
  return (
    <Stack spacing={2}>
      <h1>Můj profil</h1>

      <Avatar
        alt={`${session?.user?.name}`}
        src={`${session?.user?.image}`}
      ></Avatar>
      <h2>{session?.user?.name}</h2>
      <h3>{session?.user?.email}</h3>

      <Button
        variant="outlined"
        onClick={() => signOut({ callbackUrl: '/' })}
        startIcon={<LogoutIcon />}
      >
        <a>Odhlásit</a>
      </Button>
      <Navigation />
    </Stack>
  );
}
