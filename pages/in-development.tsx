import Navigation from '../components/Navigation';
import { Stack } from '@mui/material';
import styles from '../styles/Home.module.css';

const inDevel = () => {
  return (
    <div className="teaDetail">
      <div className={styles.container}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <h1>Co připravujeme a kdo jsme</h1>
          <Stack spacing={2}>
            <p className="intro">
              Čajový deník vznikl jako nápad jedné nadšenkyně do čajů a čajové
              kultury. Ona nadšenkyně se zároveň snaží proniknout do tajů
              webového vývoje, tak tento nápad přinesla do{' '}
              <span>React Girls</span>, kde dostala podporu ve formě mentoringu.
              Mentorka dala projektu opravdu mnoho. Bez této podpory by Čajový
              deník asi nikdy nespatřil světlo světa.
            </p>

            <p className="intro">
              Čajový deník je stále ve fázi vývoje. Všichni, kdo se na vývoji
              podílí, tak činí ve svém volném čase, proto prosíme uživatele a
              uživatelky o shovívavost. Můžete se ale těšit na následujíci
              funkcionality:
            </p>
            <ul className="intro">
              <li>Přihlašování emailovou adresou</li>
              <li>Deník: možnost přidávat si zápisy z čajových degustací</li>
              <li>Losování čajů podle kritérií</li>
              <li>Blog plný informací o čaji</li>
              <li>
                {' '}
                ... a mnoho dalších funkcionalit, které na první pohled nejsou
                vidět, ale značně vylepší chování a vzhled aplikace.
              </li>
            </ul>
            <p className="intro">
              Děkujeme, že jste s námi a přejeme spoustu krásných chvil s čajem.
            </p>
            <div className="spacer"></div>
          </Stack>

          <Navigation />
        </Stack>
      </div>
    </div>
  );
};

export default inDevel;
