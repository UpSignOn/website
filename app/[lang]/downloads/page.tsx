import { getDictionary } from "../../../translations/translations";
import styles from "./page.module.css";
import EdgeImg from "../../../public/icons/Edge.svg";
import SafariImg from "../../../public/icons/Safari.svg";
import AppleImg from "../../../public/icons/Apple.svg";
import AndroidImg from "../../../public/icons/Android.svg";
import WindowsImg from "../../../public/icons/Windows.svg";
import TuxImg from "../../../public/icons/Tux.svg";
import FirefoxImg from "../../../public/icons/Firefox.svg";
import ChromeImg from "../../../public/icons/Chrome.svg";
import BraveImg from "../../../public/icons/Brave.svg";
import OperaImg from "../../../public/icons/Opera.svg";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  return {
    title: t.downloads.pageTitle,
    description: t.downloads.metaDescription,
    alternates: {
      canonical: "https://upsignon.eu/fr/downloads",
      languages: {
        fr: "https://upsignon.eu/fr/downloads",
        en: "https://upsignon.eu/en/downloads",
      },
    },
  };
}
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  return (
    <div className={styles.content}>
      <h1>{t.downloads.pageTitle}</h1>
      <section className={styles.downloadSection}>
        <h2>{t.downloads.appTitle}</h2>
        <table className={styles.downloadTable}>
          <tbody>
            <tr>
              <td className={styles.platformHeader}>
                <AppleLogo />
              </td>
              <td>iOS / macOS</td>
              <td>
                <Link
                  className={styles.buttonLink}
                  href="https://apps.apple.com/us/app/upsignon/id1474805603?l=fr"
                  target="_blank"
                >
                  App Store
                </Link>
              </td>
            </tr>
            <tr>
              <td className={styles.platformHeader}>
                <AndroidLogo />
              </td>
              <td>Android / ChromeOS</td>
              <td>
                <Link
                  className={styles.buttonLink}
                  href="https://play.google.com/store/apps/details?id=eu.upsignon&hl=fr&gl=US"
                  target="_blank"
                >
                  Google Play
                </Link>
              </td>
            </tr>
            <tr>
              <td className={styles.platformHeader}>
                <WindowsLogo />
              </td>
              <td>Windows</td>
              <td>
                <Link
                  className={styles.buttonLink}
                  href="https://www.microsoft.com/fr-fr/p/upsignon/9n811tstg52w"
                  target="_blank"
                >
                  Microsoft Store
                </Link>
                <Link href="/downloads/windows">{t.downloads.windowsOtherOptions}</Link>
              </td>
            </tr>
            <tr>
              <td className={styles.platformHeader}>
                <LinuxLogo />
              </td>
              <td>Linux</td>
              <td>
                <Link className={styles.buttonLink} href="https://snapcraft.io/upsignon" download>
                  Snap
                </Link>
                <Link href="/downloads/linux">{t.downloads.linuxOtherOptions}</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className={styles.downloadSection}>
        <h2>{t.downloads.browserExtensionTitle}</h2>
        <table className={styles.downloadTable}>
          <tbody>
            <tr>
              <td className={styles.platformHeader}>
                <FirefoxLogo />
              </td>
              <td>Mozilla Firefox</td>
              <td>
                <Link
                  className={styles.buttonLink}
                  href="https://addons.mozilla.org/af/firefox/addon/upsignon/"
                  target="_blank"
                >
                  Firefox Add-Ons
                </Link>
              </td>
            </tr>
            <tr>
              <td className={styles.platformHeader}>
                <ChromeLogo />
              </td>
              <td>
                <div>{t.downloads.chromiumBrowsers}</div>
                <div className={styles.secondaryLogos}>
                  <BraveLogo />
                  <OperaLogo />
                  <EdgeLogoAlt />
                </div>
              </td>
              <td>
                <Link
                  className={styles.buttonLink}
                  href="https://chromewebstore.google.com/detail/upsignon/ikddeecpbbbnfmnkldhnhjlljddnjbon"
                  target="_blank"
                >
                  Chrome Web Store
                </Link>
              </td>
            </tr>
            <tr>
              <td className={styles.platformHeader}>
                <EdgeLogo />
              </td>
              <td>Microsoft Edge</td>
              <td>
                <Link
                  className={styles.buttonLink}
                  href="https://microsoftedge.microsoft.com/addons/detail/upsignon/jhglfkcppgkgenonjpoopfbobcdlffgg"
                  target="_blank"
                >
                  Microsoft Edge
                </Link>
              </td>
            </tr>
            <tr>
              <td className={styles.platformHeader}>
                <SafariLogo />
              </td>
              <td>Safari (macOS)</td>
              <td>{t.downloads.safariIncludedInApp}</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <Link
                  href="https://github.com/rgsystemes/upsignon-pro-server/blob/production/doc/GPO_deployment.md"
                  target="_blank"
                >
                  {t.downloads.extensionGPO}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

function AppleLogo() {
  return (
    <div className={styles.platformLogo}>
      <Image src={AppleImg} alt="Apple" width="50" />
    </div>
  );
}

function AndroidLogo() {
  return (
    <div className={styles.platformLogo}>
      <Image src={AndroidImg} alt="Android" width="50" />
    </div>
  );
}

function WindowsLogo() {
  return (
    <div className={styles.platformLogo}>
      <Image src={WindowsImg} alt="Windows" width="50" />
    </div>
  );
}

function LinuxLogo() {
  return (
    <div className={styles.platformLogo}>
      <Image src={TuxImg} alt="Linux" width="50" />
    </div>
  );
}

function FirefoxLogo() {
  return (
    <div className={styles.platformLogo}>
      <Image src={FirefoxImg} alt="Firefox" width="50" />
    </div>
  );
}

function SafariLogo() {
  return (
    <div className={styles.platformLogo}>
      <Image src={SafariImg} alt="Safari (macOS)" width="50" />
    </div>
  );
}

function EdgeLogo() {
  return (
    <div className={styles.platformLogo}>
      <Image src={EdgeImg} alt="Microsoft Edge" width="50" />
    </div>
  );
}

function EdgeLogoAlt() {
  return (
    <div className={styles.platformLogo}>
      <Image src={EdgeImg} alt="Microsoft Edge" width="30" />
    </div>
  );
}
function ChromeLogo() {
  return (
    <div className={styles.platformLogo}>
      <Image src={ChromeImg} alt="Google Chrome" width="50" />
    </div>
  );
}
function BraveLogo() {
  return (
    <div className={styles.platformLogo}>
      <Image src={BraveImg} alt="Brave" width="30" />
    </div>
  );
}
function OperaLogo() {
  return (
    <div className={styles.platformLogo}>
      <Image src={OperaImg} alt="Opera" width="30" />
    </div>
  );
}
