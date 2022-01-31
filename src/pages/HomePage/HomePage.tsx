import { useTranslation } from 'react-i18next';
function Home(): JSX.Element {
  const { t } = useTranslation();

  return <h2>{t('main_page')}</h2>;
}
export default Home;
