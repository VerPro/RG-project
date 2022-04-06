import { LocalizationProvider, DatePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterDayjs';
import { Stack, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useState } from 'react';

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
    </Stack>
  );
}
