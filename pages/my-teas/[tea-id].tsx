import { Button, Link, Stack } from '@mui/material';
import { AnyCnameRecord } from 'dns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getTeaDetail } from '../../db';

const Tea = () => {
  const router = useRouter();
  console.log('router', router);
  console.log('routerQuery', router.query);
  console.log('routerQueryTeaId', router.query[`tea-id`]);
  const { data: session } = useSession();
  const [teaDetail, setTeaDetail] = useState();

  useEffect(() => {
    const saveTeaDetail = async () => {
      const tea = await getTeaDetail(
        session?.user?.email,
        router.query[`tea-id`],
      );
      console.log('tea', tea);
      setTeaDetail(tea);
    };
    saveTeaDetail();
  }, []);

  console.log('teaDetail', teaDetail);

  return (
    <Stack>
      <h1>Moje čajová polička</h1>
      <Link href="/my-teas">
        <Button variant="outlined">
          <a>Zpět</a>
        </Button>
      </Link>
      <h2>Název čaje</h2>
      <p>Tie guan Yin</p> {/* Tahat z databáze */}
      <h2>Typ čaje</h2>
      <p>oolong </p> {/* Tahat z databáze */}
      <h2>Dodavatel</h2>
      <p>Teastarter</p> {/* Tahat z databáze */}
      <h2>Datum zakoupení</h2>
      <p>20.12.2019</p> {/* Tahat z databáze */}
      <h2>Chuťový profil</h2>
      <p>Bylinný</p> {/* Tahat z databáze */}
      <h2>Země původu</h2>
      <p>Čína</p> {/* Tahat z databáze */}
      {/* <h2>Deníkové zápisy</h2>
      <Link>
        {' '}
        <a href="">Čajování na vyhlídce</a>{' '}
      </Link>{' '}*/}
      {/* Tahat z databáze */}
      <Button variant="outlined">Editovat čaj na poličce </Button>
    </Stack>
  );
};

export default Tea;
