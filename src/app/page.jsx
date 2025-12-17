'use client';

import styles from './page.module.css';
import Button from '../components/Button.jsx';
import SecondaryButton from '../components/SecondaryButton.jsx';
import illustratie from '/illustratie.svg';
import achtergrond from '/achtergrond.svg';

export default function Page() {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${achtergrond})` }}>
      <div className={styles.heroInner}>
        <h1 className={styles.title}>Allo!</h1>

        <img src={illustratie} alt="Illustratie" className={styles.illustration} />

        <p className={styles.lead}>Ik wil m'n cadeautje:</p>

        <div className={styles.buttons}>
          <Button label="Opendoen" onClick={() => alert('Opengemaakt!')} />
          <SecondaryButton label="Niet opendoen #saai" onClick={() => alert('Misschien later')} />
        </div>

      </div>
    </div>
  );
}
