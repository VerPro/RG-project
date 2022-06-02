import { Stack } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import { NoTeasScreen } from '../../components/NoTeasScreen';
import { TeaShelf } from '../../components/TeaShelf';
import { db, getTeas } from '../../db';

const MyTeas = () => {
  console.log(`databáze: ${db}`);

  const { data: session } = useSession();
  const [teasInDb, setTeasInDb] = useState([]);
  const userEmail = session?.user?.email;

  useEffect(() => {
    const saveTeas = async () => {
      const teas: any = await getTeas(userEmail);
      setTeasInDb(teas);
    };
    saveTeas();
  }, [userEmail]);

  // console.log('teasInDb', teasInDb);

  // console.log(getTeas(session?.user?.email));

  //setNumberOfTeas(db.lenght) - tak nějak

  if (teasInDb.length === 0) {
    return (
      <>
        <NoTeasScreen />
        <Navigation />
      </>
    );
  } else {
    return (
      <>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TeaShelf teas={teasInDb} />
        </Stack>
        <Navigation />
      </>
    );
  }
};

export default MyTeas;
