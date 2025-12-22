'use client';

import styles from '../page.module.css';
import Button from '../../components/Button.jsx';
import SecondaryButton from '../../components/SecondaryButton.jsx';
import illustratie from '/illustratie.svg';
import achtergrond from '/achtergrond.svg';

export default function Page() {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${achtergrond})` }}>
      <div className={styles.heroInner}>
        <h2 className={styles.title}>Bye Bye!</h2>

        <img src={illustratie} alt="Illustratie" className={styles.illustration} />

  

        <div className={styles.buttons}>
          <Button
            label="Marijs een kusje geven"
            onClick={() => {
              window.dispatchEvent(new Event('popstate'))
            }}
          />
          <SecondaryButton
            label="Opnieuw spelen"
            onClick={() => {
              // navigate to the new page using history API and notify router
              window.history.pushState({}, '', '/page')
              // dispatch a generic popstate event (some mobile browsers don't support PopStateEvent constructor)
              window.dispatchEvent(new Event('popstate'))
            }}
          />
        </div>

      </div>
    </div>
  );
}
