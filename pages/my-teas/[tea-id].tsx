import { Button, Link, Stack } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getTeaDetail } from '../../db';

const Tea = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [teaDetail, setTeaDetail] = useState();

  useEffect(() => {
    const saveTeaDetail = async () => {
      const tea = await getTeaDetail(
        session?.user?.email,
        router.query[`tea-id`],
      );
      setTeaDetail(tea);
    };
    saveTeaDetail();
  }, []);

  //vrací Date objekt!
  const date = teaDetail?.[`buy-date`].toDate();

  return (
    <Stack>
      <h1>Moje čajová polička</h1>
      <Link href="/my-teas">
        <Button variant="outlined">
          <a>Zpět</a>
        </Button>
      </Link>
      <h2>Název čaje</h2>
      <p>{teaDetail?.name}</p>
      <h2>Typ čaje</h2>
      <p>{teaDetail?.type} </p>
      <h2>Dodavatel</h2>
      <p>{teaDetail?.distributor}</p>
      <h2>Datum zakoupení</h2>
      <p>{`${date?.getDate()}. ${date?.getMonth()}. ${date?.getFullYear()}`}</p>
      <h2>Chuťový profil</h2>
      {teaDetail?.[`taste-profile`].map((taste) => {
        return <p>{taste}</p>;
      })}

      <h2>Země původu</h2>
      <p>{teaDetail?.country}</p>
      {/* <h2>Deníkové zápisy</h2>
      <Link>
        {' '}
        <a href="">Čajování na vyhlídce</a>{' '}
      </Link>{' '}*/}
      {/* Tahat z databáze 
      <Button variant="outlined">Editovat čaj na poličce </Button>*/}
    </Stack>
  );
};

export default Tea;
