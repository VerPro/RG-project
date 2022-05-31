import Link from 'next/link';
import Button from '@mui/material/Button';
import Navigation from '../components/Navigation';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { getTeas } from '../db';
import { Stack } from '@mui/material';

export default function TeaDrawer() {
  const { data: session } = useSession();
  const [teasInDb, setTeasInDb] = useState([]);

  useEffect(() => {
    const saveTeas = async () => {
      const teas = await getTeas(session?.user?.email);
      setTeasInDb(teas);
    };
    saveTeas();
  }, []);

  const namesOfTeas: string[] = [];
  teasInDb.map((tea: any) => {
    namesOfTeas.push(tea.name);
  });

  const [chosenOne, setChosenOne] = useState('???');

  return (
    <Stack spacing={2}>
      <h1>Vylosuj mi čaj</h1>
      <p>
        Nemůžete se rozhodnout, jaký čaj si dnes připravíte? Snadná pomoc! Ze
        všech čajů, které máte uložené na své Čajové poličce vám náhodně nějaký
        čaj vylosujeme.
      </p>
      <Button
        variant="outlined"
        onClick={() =>
          setChosenOne(
            namesOfTeas[Math.floor(Math.random() * namesOfTeas.length)],
          )
        }
      >
        Vylosuj mi čaj
      </Button>
      <p>Tvým vylosovaným čajem je: {chosenOne}</p>
      <Navigation />
    </Stack>
  );
}
