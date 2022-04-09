import Link from 'next/link';
import Button from '@mui/material/Button';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
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

export default function AddTea() {
  //Select management
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

  const [selectedTea, setSelectedTea] = useState('');
  const handleSelectedTeaChange = (e: SelectChangeEvent) => {
    setSelectedTea(e.target.value);
  };
  //

  //DatePicker management
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  //

  //Checkbox management
  //možná ten list nacpat do FB a vyexportovat sem?
  const listOfTastes: string[] = [
    'Lesní plody',
    'Citrusy',
    'Exotické ovoce',
    'Peckoviny',
    'Květy',
    'Bylinný',
    'Travnatost',
    'Koření',
    'Sladkost',
    'Slanost',
    'Vegetálnost',
    'Pikantnost',
    'Zemitost',
    'Čokoláda',
    'Kouřovitost',
    'Praženost',
    'Dřevitost',
    'Svíravost',
    'Ořechy',
  ];

  const [tasteCharacter, setTasteCharacter] = useState<string[]>([]);
  const handleTeaCharacterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const index = tasteCharacter.indexOf(e.target.value);
    if (index === -1) {
      setTasteCharacter([...tasteCharacter, e.target.value]);
    } else {
      setTasteCharacter(
        tasteCharacter.filter((taste) => taste !== e.target.value),
      );
    }
  };
  //

  return (
    <>
      <h1>Přidat čaj</h1>
      <Stack spacing={2}>
        <Link href="/my-teas">
          <Button variant="outlined">
            <a>Zpět</a>
          </Button>
        </Link>

        <TextField
          required
          id="outlined"
          label="Název čaje"
          helperText="Zde napište název čaje"
        ></TextField>

        <FormControl>
          <InputLabel id="typeOfTea">Typ čaje</InputLabel>
          <Select
            labelId="typeOfTea"
            id="typeOfTea"
            value={selectedTea}
            label="Tea"
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
          helperText="Kde jste čaj koupili?"
        ></TextField>

        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            label="Datum zakoupení"
            value={selectedDate}
            onChange={(newDate) => {
              setSelectedDate(newDate);
            }}
            renderInput={(params) => <TextField {...params} />}
          ></DatePicker>
        </LocalizationProvider>

        <TextField required id="outlined" label="Země původu"></TextField>

        <FormControl>
          <FormLabel component="legend">Chuťový charakter</FormLabel>
          <FormGroup>
            {listOfTastes.map((taste: string) => {
              return (
                <FormControlLabel
                  key={taste}
                  label={taste}
                  value={taste}
                  control={
                    <Checkbox
                      key={taste}
                      checked={tasteCharacter.includes({ taste })}
                      onChange={handleTeaCharacterChange}
                    />
                  }
                />
              );
            })}
          </FormGroup>
        </FormControl>

        <Link href="/add-tea">
          <Button variant="outlined">
            <a>Přidat čaj</a>
          </Button>
        </Link>
      </Stack>
    </>
  );
}
