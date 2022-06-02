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
  const userEmail = session?.user?.email;

  useEffect(() => {
    const saveTeas = async () => {
      const teas: any = await getTeas(userEmail);
      setTeasInDb(teas);
    };
    saveTeas();
  }, [userEmail]);

  const namesOfTeas: string[] = [];
  teasInDb.map((tea: any) => {
    namesOfTeas.push(tea.name);
  });

  const [chosenOne, setChosenOne] = useState('');

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <h1>Vylosuj mi čaj</h1>
      <p>
        Nemůžete se rozhodnout, jaký čaj si dnes připravíte? Snadná pomoc! Ze
        všech čajů, které máte uložené na své Čajové poličce vám náhodně nějaký
        čaj vylosujeme.
      </p>

      <Button
        sx={{ fontWeight: 'bold' }}
        variant="contained"
        onClick={() =>
          setChosenOne(
            namesOfTeas[Math.floor(Math.random() * namesOfTeas.length)],
          )
        }
      >
        Vylosuj mi čaj
      </Button>
      <p>Tvým vylosovaným čajem je:</p>
      <p>
        <span>{chosenOne}</span>
      </p>
      <Navigation />
    </Stack>
  );
}
