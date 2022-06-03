import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/router';
import { Paper } from '@mui/material';

export default function Navigation() {
  const router = useRouter();

  const onLink = (href: string) => {
    router.push(href);
  };

  return (
    <Box sx={{ width: '1' }}>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            sx={{ color: '#32681d' }}
            label="Domů"
            icon={<HomeIcon />}
            onClick={() => onLink('/home')}
          />
          <BottomNavigationAction
            sx={{ color: '#32681d' }}
            label="Profil"
            icon={<PersonIcon />}
            onClick={() => onLink('/profile')}
          />
          <BottomNavigationAction
            sx={{ color: '#32681d' }}
            label="Připravujeme"
            icon={<StarIcon />}
            onClick={() => onLink('/in-development')}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
