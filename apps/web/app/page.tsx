import useTranslation from 'next-translate/useTranslation'

export default function Page(): JSX.Element {
  const { t } = useTranslation();
    return (
    <p className="text-red-400">{t("hello")}</p>
    );
}
