import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useState } from 'react';
import { NoTeasScreen } from '../../components/NoTeasScreen';
import { TeaShelf } from '../../components/TeaShelf';
import { db } from '../db';

export default function MyTeas() {
  console.log(`databáze: ${db}`);

  const [numberOfTeas, setNumberOfTeas] = useState(0);

  //setNumberOfTeas(db.lenght) - tak nějak

  if (numberOfTeas === 0) {
    return NoTeasScreen();
  } else {
    return TeaShelf();
  }
}
