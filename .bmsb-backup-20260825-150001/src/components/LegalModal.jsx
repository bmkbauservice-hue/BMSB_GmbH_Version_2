import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";

const externalLinkClass =
  "font-semibold text-sky-700 underline decoration-sky-400/50 underline-offset-4 transition hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200";

function Impressum() {
  return (
    <div className="space-y-7 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">
      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          Angaben gemäß § 5 DDG
        </h3>
        <p className="mt-2">
          BMSB Bau- und Industrieservice GmbH
          <br />
          Unter den Linden 26–30
          <br />
          10117 Berlin
          <br />
          Deutschland
        </p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          Vertretungsberechtigte Person
        </h3>
        <p className="mt-2">Geschäftsführer: Albert Ernst Schymik</p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          Kontakt
        </h3>
        <p className="mt-2">
          Telefon: <a className={externalLinkClass} href="tel:+493085625715">+49 30 85625715</a>
          <br />
          Mobil: <a className={externalLinkClass} href="tel:+4915735983260">+49 1573 5983260</a>
          <br />
          Fax: +49 30 85625716
          <br />
          E-Mail: <a className={externalLinkClass} href="mailto:info@bmsb-gmbh.com">info@bmsb-gmbh.com</a>
        </p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          Registereintrag
        </h3>
        <p className="mt-2">
          Registergericht: Amtsgericht Charlottenburg
          <br />
          Registernummer: HRB 180463 B
        </p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          Umsatzsteuer-Identifikationsnummer
        </h3>
        <p className="mt-2">
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />
          DE 308385043
        </p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          Verbraucherstreitbeilegung
        </h3>
        <p className="mt-2">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>
    </div>
  );
}

function Datenschutz() {
  return (
    <div className="space-y-7 text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">
      <p>
        Mit dieser Datenschutzerklärung informieren wir darüber, welche
        personenbezogenen Daten beim Besuch dieser Website verarbeitet werden.
      </p>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          1. Verantwortlicher
        </h3>
        <p className="mt-2">
          BMSB Bau- und Industrieservice GmbH
          <br />
          Unter den Linden 26–30, 10117 Berlin
          <br />
          Geschäftsführer: Albert Ernst Schymik
          <br />
          E-Mail: <a className={externalLinkClass} href="mailto:info@bmsb-gmbh.com">info@bmsb-gmbh.com</a>
          <br />
          Telefon: <a className={externalLinkClass} href="tel:+493085625715">+49 30 85625715</a>
        </p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          2. Hosting über GitHub Pages
        </h3>
        <p className="mt-2">
          Diese Website wird über GitHub Pages bereitgestellt. Anbieter ist die
          GitHub B.V., Vijzelstraat 68-72, 1017 HL Amsterdam, Niederlande; die
          technische Infrastruktur kann außerdem durch GitHub, Inc., 88 Colin P
          Kelly Jr Street, San Francisco, CA 94107, USA, betrieben werden.
        </p>
        <p className="mt-2">
          Beim Aufruf der Website verarbeitet der Hosting-Anbieter technisch
          erforderliche Verbindungsdaten, insbesondere IP-Adresse, Datum und
          Uhrzeit des Abrufs, aufgerufene URL, Referrer, Browser- und
          Geräteinformationen. Die Verarbeitung dient der sicheren und
          störungsfreien Bereitstellung der Website und erfolgt auf Grundlage
          unseres berechtigten Interesses gemäß Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p className="mt-2">
          Eine Verarbeitung in Drittländern, insbesondere den USA, kann nicht
          ausgeschlossen werden. GitHub informiert über eingesetzte
          Übermittlungsmechanismen in seiner{" "}
          <a
            className={externalLinkClass}
            href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
            target="_blank"
            rel="noreferrer"
          >
            Datenschutzerklärung
          </a>
          .
        </p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          3. Kontaktaufnahme
        </h3>
        <p className="mt-2">
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre
          Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen.
          Soweit Ihre Anfrage auf einen Vertrag oder vorvertragliche Maßnahmen
          gerichtet ist, beruht die Verarbeitung auf Art. 6 Abs. 1 lit. b DSGVO,
          andernfalls auf unserem berechtigten Interesse an der Bearbeitung Ihrer
          Anfrage gemäß Art. 6 Abs. 1 lit. f DSGVO. Gesetzliche
          Aufbewahrungspflichten bleiben unberührt.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          4. Darstellungseinstellung
        </h3>
        <p className="mt-2">
          Für die Auswahl zwischen Hell- und Dunkelmodus wird ausschließlich die
          Einstellung „bmsb-theme“ im lokalen Speicher Ihres Browsers abgelegt.
          Sie enthält keine Kennung und dient nicht der Analyse oder Werbung. Die
          Einstellung bleibt auf Ihrem Gerät gespeichert, bis Sie sie über die
          Browserdaten löschen.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          5. Cookies, Analyse und externe Medien
        </h3>
        <p className="mt-2">
          Wir setzen keine eigenen Cookies, keine Analyse- oder Marketingdienste
          und keine extern eingebetteten Schriftarten, Karten, Videos oder
          Social-Media-Plugins ein. Einwilligungspflichtiges Tracking findet auf
          dieser Website nicht statt.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          6. Speicherdauer
        </h3>
        <p className="mt-2">
          Wir speichern personenbezogene Daten nur so lange, wie es für den
          jeweiligen Zweck erforderlich ist oder gesetzliche
          Aufbewahrungspflichten bestehen. Auf die Speicherdauer technischer
          Protokolldaten des Hosting-Anbieters haben wir keinen unmittelbaren
          Einfluss.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-black text-[#1a2a4f] dark:text-white">
          7. Ihre Rechte
        </h3>
        <p className="mt-2">
          Ihnen stehen nach Maßgabe der DSGVO insbesondere Rechte auf Auskunft,
          Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch zu. Eine erteilte Einwilligung
          können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>
        <p className="mt-2">
          Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde
          beschweren. Für Berlin: Berliner Beauftragte für Datenschutz und
          Informationsfreiheit, Alt-Moabit 59–61, 10555 Berlin, E-Mail:{" "}
          <a className={externalLinkClass} href="mailto:mailbox@datenschutz-berlin.de">
            mailbox@datenschutz-berlin.de
          </a>
          .
        </p>
      </section>

      <p className="border-t border-slate-200 pt-5 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
        Stand: 25. August 2026
      </p>
    </div>
  );
}

export default function LegalModal({ page, onClose }) {
  const titleId = useId();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!page) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [page, onClose]);

  if (!page) return null;

  const isImpressum = page === "impressum";
  const title = isImpressum ? "Impressum" : "Datenschutzerklärung";

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-sky-300/25 bg-white p-6 shadow-2xl dark:bg-slate-900 sm:p-10"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 grid size-11 cursor-pointer place-items-center rounded-full border border-slate-300 text-slate-700 transition hover:border-sky-400 hover:text-sky-500 hover:shadow-[0_0_18px_rgba(96,165,250,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-600 dark:text-slate-200 dark:hover:border-sky-300 dark:hover:text-sky-300"
          aria-label={`${title} schließen`}
        >
          <X size={22} />
        </button>

        <p className="text-xs font-black tracking-[0.22em] text-sky-600 uppercase dark:text-sky-300">
          BMSB Bau- und Industrieservice GmbH
        </p>
        <h2
          id={titleId}
          className="mt-3 mb-8 pr-14 text-3xl font-black tracking-tight text-[#1a2a4f] dark:text-white sm:text-4xl"
        >
          {title}
        </h2>

        {isImpressum ? <Impressum /> : <Datenschutz />}
      </article>
    </div>
  );
}
