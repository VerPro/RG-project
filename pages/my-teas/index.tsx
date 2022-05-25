import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import { NoTeasScreen } from '../../components/NoTeasScreen';
import { TeaShelf } from '../../components/TeaShelf';
import { db, getTeas } from '../../db';

const MyTeas = () => {
  console.log(`databáze: ${db}`);

  const [numberOfTeas, setNumberOfTeas] = useState();
  const { data: session } = useSession();

  useEffect(() => {
    getTeas(session?.user?.id);
  });

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
