import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Link from 'next/link';

export default function Navigation() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: '1' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Domů" icon={<HomeIcon />} />
        <BottomNavigationAction label="Profil" icon={<PermIdentityIcon />} />
        <BottomNavigationAction label="Nápověda" icon={<QuestionMarkIcon />} />
      </BottomNavigation>
    </Box>
  );
}
