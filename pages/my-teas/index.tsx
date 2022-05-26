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

  useEffect(() => {
    const saveTeas = async () => {
      const teas = await getTeas(session?.user?.email);
      setTeasInDb(teas);
    };
    saveTeas();
  }, []);

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
        <TeaShelf teas={teasInDb} />
        <Navigation />
      </>
    );
  }
};

export default MyTeas;
