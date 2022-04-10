import { useState } from 'react';
import { NoEntriesScreen } from '../../components/NoEntriesScreen';
import { TeaDiary } from '../../components/TeaDiary';

const MyEntries = () => {
  const [numberOfEntries, setNumberOfEntries] = useState(1);

  if (numberOfEntries === 0) {
    return NoEntriesScreen();
  } else {
    return TeaDiary();
  }
};

export default MyEntries;
