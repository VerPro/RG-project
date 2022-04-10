import {
  Stack,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Entry = () => {
  return (
    <Stack>
      <h1>Můj deník</h1>
      <Link href="/my-teas">
        <Button variant="outlined">
          <a>Zpět</a>
        </Button>
      </Link>
      <h2>Název záznamu</h2>
      <p>Čajování na vyhlídce</p> {/* Tahat z databáze */}
      <h2>Datum zápisu</h2>
      <p>12. 3. 2021 </p> {/* Tahat z databáze */}
      <h2>Čaj</h2>
      <Link href="">
        <a>Tie Guan Yin</a>
      </Link>
      {/* Tahat z databáze */}
      <h2>Příprava</h2>
      <p>Hmotnost: 8 g</p> {/* Tahat z databáze */}
      <p>Objem vody: 120 ml</p>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{`1. nálev`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Stack spacing={2}>
              <h2>Délka nálevu:</h2>
              <p>60 s</p>
              <h2>Teplota vody:</h2>
              <p>80 °C </p>

              <h2>Chuťový profil</h2>
              <p>Bylinný</p>

              <h2>Poznámky</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, quos distinctio, pariatur sint tenetur harum itaque
                fuga labore aliquid est, explicabo culpa velit laborum id
                possimus sit ratione delectus suscipit?
              </p>
            </Stack>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Button variant="outlined">Editovat zápis </Button>
    </Stack>
  );
};
