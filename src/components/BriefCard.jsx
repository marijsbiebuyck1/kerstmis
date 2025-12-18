'use client'

import React from 'react'
import styles from './BriefCard.module.css'

export default function BriefCard() {
  return (
    <article className={styles.card} role="article" aria-label="Brief aan Thibault">
      <div className={styles.inner}>
        <h2 className={styles.title}>Liefste Thibault</h2>

        <div className={styles.content}>
          <p>
            Ik maakte voor jou deze leuke app. En wees maar zeker dat ik op deze code uitgebreid gevloekt heb. </p>
       <p> Maar alles om jou een uniek cadeautje te geven. En ik hoop dat ik nog heel veel leuke dingen met jou kan beleven.
          </p>

          <p>
            Super blij dat jij in m’n leven gekomen bent. Je bent de liefste persoon die ik ooit heb gekend.
          </p>

          <p>
            Ik ben super trots op jou, je bent alles wat ik dit jaar wou!
          </p>

          <p>
            Merry Christmas, love you &lt;3
          </p>

          <p className={styles.signature}>
            Je Kapoentje, Marijs
          </p>
        </div>
      </div>
    </article>
  )
}
