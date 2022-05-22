import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';
import { NoTeasScreen } from '../../components/NoTeasScreen';
import { TeaShelf } from '../../components/TeaShelf';
import { db } from '../../db';

const MyTeas = () => {
  console.log(`databáze: ${db}`);

  const [numberOfTeas, setNumberOfTeas] = useState();

  //setNumberOfTeas(db.lenght) - tak nějak

  if (numberOfTeas === 0) {
    return (
      <>
        <NoTeasScreen />
        <Navigation />
      </>
    );
  } else {
    return (
      <>
        <TeaShelf />
        <Navigation />
      </>
    );
  }
};

export default MyTeas;
