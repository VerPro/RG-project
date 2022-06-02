import { Stack } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import { NoTeasScreen } from '../../components/NoTeasScreen';
import { TeaShelf } from '../../components/TeaShelf';
import { db, getTeas } from '../../db';
import CircularProgress from '@mui/material/CircularProgress';

const MyTeas = () => {
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

  if (teasInDb === undefined) {
    //nemáme data -> máme loading
    return <CircularProgress />;
  } else {
    if (teasInDb !== undefined && teasInDb.length === 0) {
      return (
        <>
          <NoTeasScreen />
          <Navigation />
        </>
      );
    } else if (teasInDb !== undefined && teasInDb.length !== 0) {
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
  }
};

export default MyTeas;
