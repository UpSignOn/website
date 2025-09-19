import Link from "next/link";
import { getDictionary } from "../../../../translations/translations";
import styles from "../page.module.css";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.resources.technicalExplanations,
    description: t.resources.technicalExplanationsMetaDesc,
    alternates: {
      canonical: "https://upsignon.eu/fr/resources/tech-articles",
      languages: {
        fr: "https://upsignon.eu/fr/resources/tech-articles",
        en: "https://upsignon.eu/en/resources/tech-articles",
      },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  return (
    <div className={styles.article}>
      <h1>{t.resources.technicalExplanations}</h1>
      <Link className={styles.techArticle} href="/resources/tech-articles/pro-vs-perso">
        {t.resources.generalDesignPrinciples}
      </Link>
      <Link className={styles.techArticle} href="/resources/tech-articles/browser-extension-security">
        {t.resources.browserExtensionSecurity}
      </Link>
      <Link className={styles.techArticle} href="/resources/tech-articles/protected-clipboard-behaviour">
        {t.techResources.protectedClipboardBehaviour.title}
      </Link>
      <Link
        className={styles.techArticle}
        href="https://github.com/rgsystemes/upsignon-pro-server/blob/production/doc/Install.md"
        target="_blank"
      >
        {t.resources.onPremDoc}
      </Link>
    </div>
  );
}
