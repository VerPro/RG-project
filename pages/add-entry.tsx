import { LocalizationProvider, DatePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';
import { Box, InputAdornment, Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useState } from 'react';
import { Infusion } from '../components/Infusion';

export default function AddEntry() {
  //DatePicker management - potřeba upravi, opakuje se
  const [date, setDate] = useState<Date | null>(null);
  //

  return (
    <Stack spacing={2}>
      <h1>Přidat zápis</h1>

      <Link href="/diary">
        <Button variant="outlined">
          <a>Zpět</a>
        </Button>
      </Link>

      <TextField required id="outlined" label="Název záznamu"></TextField>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          label="Datum zápisu"
          value={date}
          onChange={(newDate) => {
            setDate(newDate);
          }}
          renderInput={(params) => <TextField {...params} />}
        ></DatePicker>
      </LocalizationProvider>

      <Stack direction="row" justifyContent="center" alignItems="center">
        <Button variant="outlined" size="small">
          Přidat čaj z Mojí čajové poličky
        </Button>
        <p>NEBO</p>
        <Button variant="outlined" size="small">
          Přidat nový čaj
        </Button>
      </Stack>

      <TextField
        required
        id="outlined"
        label="Hmotnost čaje:"
        InputProps={{
          endAdornment: <InputAdornment position="end">g</InputAdornment>,
        }}
      ></TextField>

      <TextField
        required
        id="outlined"
        label="Objem vody:"
        InputProps={{
          endAdornment: <InputAdornment position="end">ml</InputAdornment>,
        }}
      ></TextField>

      <Infusion></Infusion>
    </Stack>
  );
}
