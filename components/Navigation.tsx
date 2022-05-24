import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useRouter } from 'next/router';

export default function Navigation() {
  const router = useRouter();

  const onLink = (href: string) => {
    router.push(href);
  };

  return (
    <Box sx={{ width: '1' }}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Domů"
          icon={<HomeIcon />}
          onClick={() => onLink('/home')}
        />
        <BottomNavigationAction
          label="Profil"
          icon={<PermIdentityIcon onClick={() => onLink('/profile')} />}
        />
        <BottomNavigationAction label="Nápověda" icon={<QuestionMarkIcon />} />
      </BottomNavigation>
    </Box>
  );
}
