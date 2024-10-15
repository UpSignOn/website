import { Metadata } from "next";
import styles from "./page.module.css";
import { PriceSimulator } from "./priceSimulator";
import { ContactLaterButton } from "../components/contactLaterButton/contactLaterButton";
import { ContactUsButton } from "../components/contactUsButton/contactUsButton";
import { getDictionary } from "../../../translations/translations";
import { FreeTrialButton } from "../components/freeTrialButton/freeTrial";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const t = getDictionary(params.lang);
  return {
    title: t.menu.pricing,
    description: t.pricing.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/pricing",
      languages: {
        fr: "https://upsignon.eu/fr/pricing",
        en: "https://upsignon.eu/en/pricing",
      },
    },
  };
}
export default function Page({ params }: { params: { lang: string } }) {
  const t = getDictionary(params.lang);
  return (
    <div className={styles.content}>
      <h1>{t.menu.pricing}</h1>
      <div className={styles.pricingsContainer}>
        <div className={styles.persoPricing}>
          <h3 className={styles.pricingTitlePerso}>{t.pricing.persoPricing.t}</h3>
          <div className={styles.persoPrice}>{t.pricing.persoPricing.free}</div>
          <a href="/downloads" className={styles.downloadAction}>
            {t.pricing.persoPricing.downloadAction}
          </a>
          <div className={styles.pricingDetails}>{t.pricing.persoPricing.details}</div>
          <div>🙏🙏</div>
        </div>
        <div className={styles.proPricing}>
          <h3 className={styles.pricingTitlePro}>{t.pricing.proPricing.t}</h3>
          <div className={styles.proPrice}>
            18€ <span className={styles.proPriceUnit}>{t.pricing.proPricing.licencePriceUnit}</span>
          </div>
          <div className={styles.priceDetail}>{t.pricing.proPricing.licenceOver1000}</div>
          <div className={styles.priceDetail}>{t.pricing.proPricing.licenceOver12000}</div>
          <div className={styles.priceDetail}>{t.pricing.proPricing.licence3YearsReduction}</div>
          <div className={styles.selfHostingTitle}>{t.pricing.proPricing.onPremOption}</div>
          <FreeTrialButton lang={params.lang} className={styles.proPricingActionButton} />

          <div className={styles.pricingDetails}>{t.pricing.proPricing.saasDetails}</div>
          <div className={styles.pricingDetails}>{t.pricing.proPricing.onPremDetails}</div>
        </div>
      </div>
      <PriceSimulator lang={params.lang} />
      <h1>{t.pricing.distribTitle}</h1>
      <p className={styles.distribDetails}>{t.pricing.distribDetails}</p>
    </div>
  );
}
