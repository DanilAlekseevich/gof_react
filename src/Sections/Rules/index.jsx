import React from 'react';

import { Title } from '../../components/Title';
import { Rule } from '../../components/Rule';
import styles from './Rules.module.scss';

export function Rules() {
  const rules = [
    {
      id: 1,
      title: 'Со скольки можно заехать в дом?',
      descr: 'Заезд в дома осуществляется в 14:00, выезд и сдача дома в 12:00?',
    },
    {
      id: 2,
      title: 'Как производится оплата?',
      descr: 'Заезд в дома осуществляется в 14:00, выезд и сдача дома в 12:00?',
    },
    {
      id: 3,
      title: 'Как забронировать дом?',
      descr: 'Заезд в дома осуществляется в 14:00, выезд и сдача дома в 12:00?',
    },
    {
      id: 4,
      title: 'Со скольки лет можно бронировать в дом?',
      descr: 'Заезд в дома осуществляется в 14:00, выезд и сдача дома в 12:00?',
    },
    {
      id: 5,
      title: 'Можно ли курить в домах?',
      descr: 'Заезд в дома осуществляется в 14:00, выезд и сдача дома в 12:00?',
    },
    {
      id: 6,
      title: 'Есть ли у вас мангал?',
      descr: 'Заезд в дома осуществляется в 14:00, выезд и сдача дома в 12:00?',
    },
  ];

  return (
    <section className={styles.rules} id="rules">
      <div className="container">
        <Title text="Правила пребывания" />
        <div className={styles.rulesWrapper}>
          {rules.map((rule) => (
            <Rule key={rule.id} {...rule} />
          ))}
        </div>
      </div>
    </section>
  );
}
