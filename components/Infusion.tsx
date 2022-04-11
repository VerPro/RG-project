import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Stack,
  Button,
  InputAdornment,
  TextField,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { TasteCharacter } from './TasteCharacter';

export const Infusion = () => {
  const [accordionCounter, setAccordionCounter] = useState<number[]>([1]);

  return (
    <>
      {accordionCounter.map((counter) => {
        return (
          <Accordion key={`${counter}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{`${counter}. nálev`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Stack spacing={2}>
                  <TextField
                    required
                    id="outlined"
                    label="Délka nálevu:"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">s</InputAdornment>
                      ),
                    }}
                  ></TextField>
                  <TextField
                    required
                    id="outlined"
                    label="Teplota vody:"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">°C</InputAdornment>
                      ),
                    }}
                  ></TextField>

                  <TasteCharacter />
                  <TextField
                    id="outlined-multiline-static"
                    label="Poznámky:"
                    multiline
                    rows={4}
                  />
                </Stack>
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button variant="outlined" onClick={() => setAccordionCounter([...accordionCounter, accordionCounter.length + 1])}>Přidat nálev</Button>
        <Button variant="outlined" onClick={() => setAccordionCounter(accordionCounter.splice(0, accordionCounter.length - 1))}>Odebrat nálev</Button>
      </Stack>
    </>
  );
};
