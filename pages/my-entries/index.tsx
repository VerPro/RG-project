import { useState } from 'react';
import Navigation from '../../components/Navigation';
import { NoEntriesScreen } from '../../components/NoEntriesScreen';
import { TeaDiary } from '../../components/TeaDiary';

const MyEntries = () => {
  const [numberOfEntries, setNumberOfEntries] = useState(1);

  if (numberOfEntries === 0) {
    return (
      <>
        <NoEntriesScreen />
        <Navigation />
      </>
    );
  } else {
    return (
      <>
        <TeaDiary />
        <Navigation />
      </>
    );
  }
};

export default MyEntries;
