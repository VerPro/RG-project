import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import { NoEntriesScreen } from '../../components/NoEntriesScreen';
import { TeaDiary } from '../../components/TeaDiary';
import { getEntries } from '../../db';

const MyEntries = () => {
  const { data: session } = useSession();
  const [entriesInDb, setEntriesInDb] = useState([]);

  // useEffect(() => {
  //   const saveEntries = async () => {
  //     const entries = await getEntries(session?.user?.email);
  //     setEntriesInDb(entries);
  //   };
  //   saveEntries();
  // }, []);

  console.log('entriesInDb', entriesInDb);

  // console.log(getTeas(session?.user?.email));

  if (entriesInDb.length === 0) {
    return (
      <>
        <NoEntriesScreen />
        <Navigation />
      </>
    );
  } else {
    return (
      <>
        <TeaDiary entries={entriesInDb} />
        <Navigation />
      </>
    );
  }
};

export default MyEntries;
