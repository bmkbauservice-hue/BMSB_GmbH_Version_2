BMSB Bau- und Industrieservice GmbH

Wir bauen Lösungen. Schaffen Werte.

Moderne Unternehmenswebsite für Bauprojekte, Industrieservice, Instandhaltung und professionelle Baudienstleistungen.

</div>

Über das Projekt

Diese Website präsentiert die BMSB Bau- und Industrieservice GmbH mit ihren Leistungen, Stärken und ausgewählten Einblicken in die tägliche Arbeit. Das Design verbindet eine klare technische Optik mit den BMSB-Markenfarben und ist für Desktop, Tablet und Smartphone optimiert.

Die Website befindet sich aktuell in der Weiterentwicklung. Inhalte, Bilder sowie rechtliche Angaben können zentral im Projekt ergänzt und aktualisiert werden.

Leistungen

Industrieservice – technische Unterstützung, Montage, Betreuung und zuverlässiger Service für industrielle Anlagen und Betriebe

Baudienstleistungen – professionelle Bauleistungen für Gewerbe, Industrie und anspruchsvolle Projekte

Instandhaltung – Wartung, Reparatur und Werterhalt mit kurzen Wegen und klarer Kommunikation

Sicherheit und Qualität – strukturierte Abläufe und verlässliche Qualitätsstandards für nachhaltige Ergebnisse

Stärken der Website

responsives Layout für Desktop, Tablet und Smartphone

heller und dunkler Darstellungsmodus

große Startseite mit Hero-Bild und klaren Handlungsaufforderungen

übersichtliche Darstellung der Leistungen und Unternehmensstärken

filterbare Projektgalerie mit 50 Aufnahmen

Bildansicht mit Lightbox

responsive Navigation mit mobilem Menü

vorbereitetes Kontakt- und Anfrageelement

Demo-Besucherzähler mit Anschlussmöglichkeit für ein späteres Backend

reduzierte Animationen für Nutzer mit entsprechender Systemeinstellung

Verwendete Technologien

Technologie

Verwendung

React 19

Aufbau der Benutzeroberfläche

Vite 7

Entwicklungsserver und Produktions-Build

Tailwind CSS 4

Layout, Farben und responsive Gestaltung

Lucide React

Icons für Navigation, Leistungen und Stärken

Projekt lokal starten

Voraussetzung ist eine aktuelle Version von Node.js mit npm.

cd "/home/muju/Schreibtisch/Umschulung/BMSB GmbH/BMSB_GmbH_Version_2"
npm install
npm run dev

Anschließend die von Vite angezeigte Adresse im Browser öffnen, normalerweise:

http://localhost:5173

Verfügbare Befehle

Befehl

Funktion

npm run dev

startet den lokalen Entwicklungsserver

npm run build

erstellt die optimierte Produktionsversion im Ordner dist

npm run preview

zeigt den fertigen Produktions-Build lokal an

Projektstruktur

BMSB_GmbH_Version_2/
├── public/
│   └── images/
│       ├── brand/       # Logo und Markenbilder
│       ├── gallery/     # Bilder der Projektgalerie
│       ├── hero/        # großes Startseitenbild
│       ├── projects/    # weitere Projektbilder
│       └── services/    # Bilder für Leistungsbereiche
├── src/
│   ├── components/      # Seitenbereiche und UI-Komponenten
│   ├── data/            # Firmen- und Website-Inhalte
│   ├── services/        # technische Dienste, z. B. Besucherzähler
│   ├── styles/          # globale Gestaltung
│   ├── App.jsx          # Zusammensetzung der Website
│   └── main.jsx         # Einstiegspunkt der React-Anwendung
├── index.html
├── package.json
└── vite.config.js

Inhalte bearbeiten

Firmendaten

Die zentralen Angaben zur Firma befinden sich in:

src/data/companyData.js

Seitentexte und weitere Inhaltsdaten befinden sich in:

src/data/siteData.js

Logo

Das freigestellte BMSB-Logo liegt unter:

public/images/brand/bmsb-logo-clean.png

Header und Footer greifen auf diese Datei zu. Beim Austausch sollte der Dateiname beibehalten werden, damit keine Anpassung im Quellcode nötig ist.

Galerie

Die Galeriebilder liegen unter:

public/images/gallery/

Die aktuell eingebundenen Dateien heißen:

bmsb-projekt-01.jpg bis bmsb-projekt-50.jpg

Filter, Reihenfolge, Kategorien und die Anzahl der angezeigten Bilder werden in folgender Datei verwaltet:

src/components/Projects.jsx

Ein Bild sollte nicht nur aus dem Ordner gelöscht werden. Auch der entsprechende Eintrag beziehungsweise der erwartete Nummernbereich in Projects.jsx muss angepasst werden, damit keine leere oder fehlerhafte Kachel erscheint.

Website vorübergehend teilen

Für eine kurzfristige Vorschau über den eigenen Computer kann zuerst Vite gestartet werden:

npm run dev -- --host 0.0.0.0

In einem zweiten Terminal kann anschließend ein temporärer Cloudflare-Tunnel geöffnet werden:

cloudflared tunnel --url http://localhost:5173

Der Computer, der Vite-Server und der Tunnel müssen während der Vorschau eingeschaltet bleiben. Die erzeugte trycloudflare.com-Adresse ist nur vorübergehend und kann sich nach einem Neustart ändern.

Produktions-Build

Vor einer Veröffentlichung sollte die Website geprüft und anschließend gebaut werden:

npm run build
npm run preview

Die veröffentlichungsfertigen Dateien befinden sich danach im Ordner dist.

Firmendaten

BMSB Bau- und Industrieservice GmbHUnter den Linden 26–3010117 Berlin

Geschäftsführer: Albert Ernst SchymikE-Mail: info@bmsb-gmbh.com

Noch zu ergänzen

Telefonnummer

Handelsregisternummer und Registergericht

Umsatzsteuer-Identifikationsnummer

vollständiges Impressum

Datenschutzerklärung

produktive Verarbeitung des Kontaktformulars

echtes Statistik-Backend für den Besucherzähler

Hinweis: Vor der öffentlichen Veröffentlichung müssen Impressum, Datenschutz und sämtliche Unternehmensangaben rechtlich geprüft und vervollständigt werden.

Nutzungsrechte

Quellcode, Bilder, Logo und Inhalte dieses Projekts sind für die Website der BMSB Bau- und Industrieservice GmbH bestimmt. Eine Weiterverwendung durch Dritte ist nur mit ausdrücklicher Genehmigung gestattet.

<div align="center">
  © 2026 BMSB Bau- und Industrieservice GmbH
</div>
