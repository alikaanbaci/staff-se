import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {useHistorySelector} from '@docusaurus/theme-common';
import {translate} from '@docusaurus/Translate';

import styles from './styles.module.css';

type Props = {mobile?: boolean};

// Navbar'daki TR/EN segment toggle. Varsayılan localeDropdown ile aynı URL
// mantığını kullanır: aynı sayfanın diğer dildeki karşılığına gider.
export default function LocaleToggle({mobile}: Props): ReactNode {
  const {
    i18n: {currentLocale, locales, localeConfigs},
  } = useDocusaurusContext();
  const {createUrl} = useAlternatePageUtils();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);

  return (
    <div
      role="group"
      aria-label={translate({
        id: 'theme.navbar.mobileLanguageDropdown.label',
        message: 'Diller',
      })}
      className={clsx(styles.toggle, mobile ? styles.mobile : styles.desktop)}>
      {locales.map((locale) => {
        const active = locale === currentLocale;
        return (
          <a
            key={locale}
            href={`${createUrl({locale, fullyQualified: false})}${search}${hash}`}
            target="_self"
            lang={localeConfigs[locale]?.htmlLang}
            aria-current={active ? 'true' : undefined}
            title={localeConfigs[locale]?.label}
            className={clsx(styles.option, active && styles.active)}>
            {locale.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
