import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NoTeasScreen } from '../../../components/NoTeasScreen';
import { TeaShelf } from '../../../components/TeaShelf';
import { db, getTeas } from '../../../db';

const MyTeas = () => {
  console.log(`databáze: ${db}`);

  const [numberOfTeas, setNumberOfTeas] = useState();


  const router = useRouter();
  console.log(router)

  useEffect(() => { getTeas(router.query['user-id']) }, [router.query]);


  //setNumberOfTeas(db.lenght) - tak nějak

  if (numberOfTeas === 0) {
    return NoTeasScreen();
  } else {
    return TeaShelf();
  }
};

export default MyTeas;
