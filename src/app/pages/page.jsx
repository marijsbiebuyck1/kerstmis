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
          <Button
            label="Opendoen"
            onClick={() => {
              window.history.pushState({}, '', '/memory')
              window.dispatchEvent(new Event('popstate'))
            }}
          />
          <SecondaryButton
            label="Niet opendoen #saai"
            onClick={() => {
              // navigate to the new page using history API and notify router
              window.history.pushState({}, '', '/niet-opendoen')
              // dispatch a generic popstate event (some mobile browsers don't support PopStateEvent constructor)
              window.dispatchEvent(new Event('popstate'))
            }}
          />
        </div>

      </div>
    </div>
  );
}
