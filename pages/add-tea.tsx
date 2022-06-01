import Link from 'next/link';
import Button from '@mui/material/Button';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import DateAdapter from '@mui/lab/AdapterDayjs';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import { TasteCharacter } from '../components/TasteCharacter';
//import { addTea } from '../db';
import { useSession } from 'next-auth/react';
import Box from '@mui/material/Box';

const AddTea = () => {
  const { data: session } = useSession();
  console.log('email: ', session?.user?.email);

  //možná ten list nacpat do FB a vyexportovat sem?
  const listOfTeaTypes: string[] = [
    'Bílý čaj',
    'Zelený čaj',
    'Žlutý čaj',
    'Oolong',
    'Červený čaj',
    'Černý čaj',
    'Pu-erh',
    'Matcha',
    'Bylinný čaj',
    'Maté',
    'Jiný',
  ];

  //Select management
  const [selectedTea, setSelectedTea] = useState('');
  const handleSelectedTeaChange = (e: SelectChangeEvent) => {
    setSelectedTea(e.target.value);
  };
  //

  //DatePicker management
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  //

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        id="addTeaForm"
      >
        <h1>Přidat čaj</h1>
        <Link href="/my-teas" passHref>
          <Button variant="contained" size="small" color="secondary">
            <a>Zpět</a>
          </Button>
        </Link>
        <Stack spacing={2}>
          <TextField
            required
            id="outlined"
            label="Název čaje"
            name="name"
            helperText="Zde napište název čaje"
          ></TextField>

          <FormControl>
            <InputLabel id="typeOfTea">Typ čaje</InputLabel>
            <Select
              labelId="typeOfTea"
              id="typeOfTea"
              value={selectedTea}
              label="Tea"
              name="type"
              onChange={handleSelectedTeaChange}
            >
              {listOfTeaTypes.map((tea: string) => {
                return (
                  <MenuItem key={tea} value={tea}>
                    {tea}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField
            required
            id="outlined"
            label="Dodavatel"
            name="distributor"
            helperText="Kde jste čaj koupili?"
          ></TextField>

          <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label="Datum zakoupení"
              value={selectedDate}
              name="buy-date"
              onChange={(newDate) => {
                setSelectedDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            ></DatePicker>
          </LocalizationProvider>

          <TextField
            required
            id="outlined"
            label="Země původu"
            name="country"
          ></TextField>

          <TasteCharacter />

          <Box m={20}>
            <Button
              variant="contained"
              onClick={() => {
                return addTea(session?.user?.email);
              }}
            >
              <a>Přidat čaj</a>
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
export default AddTea;
