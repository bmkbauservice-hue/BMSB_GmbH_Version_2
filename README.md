# BMSB GmbH – Version 2

Modernes React/Vite/Tailwind-Grundgerüst für die BMSB Bau- und Industrieservice GmbH.


## Aktuell eingetragene Firmendaten

- Firma: BMSB Bau- und Industrieservice GmbH
- Geschäftsführer: Albert Ernst Schymik
- Sitz: Berlin
- Stammkapital: 25.000 €
- Anschrift: Unter den Linden 26–30, 10117 Berlin
- E-Mail: info@bmsb-gmbh.com
- Noch offen: Telefon, Handelsregister/HRB, Registergericht, USt-IdNr. und vollständige Leistungsübersicht

## Enthalten

- React + Vite
- Tailwind CSS über den offiziellen Vite-Plugin-Weg
- Responsive Header + Mobile-Menü
- Hero-Bereich
- Leistungen
- Besucherzähler-Komponente
- Projekt-/Referenzbereich
- Über-uns-Bereich
- CTA/Kontaktbereich
- Footer
- BMSB-Logo bereits eingebunden
- Struktur für viele Bilder vorbereitet
- Reduced-Motion-Unterstützung
- Basis-SEO in `index.html`

## Start

```bash
npm install
npm run dev
```

Dann die im Terminal angezeigte lokale Adresse öffnen.

## Bilder effizient verwalten

Empfohlene Struktur:

```text
public/images/
├── brand/
├── hero/
├── projects/
└── services/
```

Für die echten Website-Bilder später möglichst:

1. große Fotos als AVIF oder WebP exportieren,
2. mehrere Größen verwenden (z. B. 640 / 1280 / 1920 px),
3. Bilder unterhalb des sichtbaren Bereichs mit `loading="lazy"` laden,
4. immer `width` und `height` bzw. feste Seitenverhältnisse reservieren,
5. keine 6–15 MB großen Originalfotos direkt auf die Website legen.

Für sehr viele Referenzen ist später ein CMS sinnvoll, statt jede Karte direkt im JSX einzutragen.

## Besucherzähler

Aktuell läuft ohne Backend ein lokaler **Demo-Zähler** im Browser.

Für einen echten globalen Besucherzähler muss `VITE_VISITOR_API_URL` auf einen kleinen API-Endpunkt zeigen, der z. B. Folgendes zurückgibt:

```json
{ "count": 1234 }
```

Damit bleibt das Frontend unabhängig davon, ob später Supabase, Cloudflare, ein eigener Server oder eine andere Datenbank verwendet wird.

## Sinnvolle nächste Ausbaustufen

- echtes Hero-Foto / Video
- animierte Scroll-Reveals
- Projektfilter
- Projekt-Detailseiten
- Kontaktformular mit E-Mail-Versand und Spam-Schutz
- Impressum / Datenschutz
- Cookie-/Consent-Lösung nur falls technisch benötigt
- CMS für Projekte und Bilder
- echte Besucherstatistik
- Lighthouse-/Core-Web-Vitals-Optimierung
- strukturierte Daten für Google
- Open-Graph-Bilder für WhatsApp/Facebook/LinkedIn
