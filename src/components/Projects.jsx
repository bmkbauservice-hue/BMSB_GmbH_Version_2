import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, Images, X } from "lucide-react";

const galleryBaseUrl = `${import.meta.env.BASE_URL}images/gallery/`;

const gallery = Array.from({ length: 50 }, (_, index) => {
  const number = index + 1;
  const imageNumber = String(number).padStart(2, "0");

  if (number <= 9) {
    return {
      src: `${galleryBaseUrl}bmsb-projekt-${imageNumber}.jpg`,
      category: "Hochbau",
      title: "Hochbau und Rohbau",
    };
  }

  if (number <= 19) {
    return {
      src: `${galleryBaseUrl}bmsb-projekt-${imageNumber}.jpg`,
      category: "Betonbau",
      title: "Beton- und Treppenbau",
    };
  }

  if (number <= 46) {
    return {
      src: `${galleryBaseUrl}bmsb-projekt-${imageNumber}.jpg`,
      category: "Infrastruktur",
      title: "Infrastruktur und Ingenieurbau",
    };
  }

  return {
    src: `${galleryBaseUrl}bmsb-projekt-${imageNumber}.jpg`,
    category: "Holzbau",
    title: "Holzbau und Ausbau",
  };
});

const filters = ["Alle", "Hochbau", "Betonbau", "Infrastruktur", "Holzbau"];

export default function Projects() {
  const [filter, setFilter] = useState("Alle");
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredGallery = useMemo(
    () =>
      filter === "Alle"
        ? gallery
        : gallery.filter((image) => image.category === filter),
    [filter],
  );

  const visibleGallery = showAll ? filteredGallery : filteredGallery.slice(0, 12);

  useEffect(() => {
    if (selectedImage === null) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowLeft") {
        setSelectedImage((current) =>
          current === 0 ? filteredGallery.length - 1 : current - 1,
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedImage((current) =>
          current === filteredGallery.length - 1 ? 0 : current + 1,
        );
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, filteredGallery.length]);

  function changeFilter(nextFilter) {
    setFilter(nextFilter);
    setShowAll(false);
    setSelectedImage(null);
  }

  return (
    <section id="projekte" className="bg-sky-50/70 py-20 transition-colors duration-300 dark:bg-slate-900/60 lg:py-24">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-4 text-base font-black uppercase tracking-[0.14em] text-sky-500 sm:text-lg">
              <span className="h-0.5 w-9 bg-sky-500" /> Einblicke in unsere Arbeit
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase italic tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Unsere <span className="text-sky-500">Galerie</span>
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-slate-600 dark:text-slate-300">
            Echte Aufnahmen aus Hochbau, Betonbau, Infrastruktur und Ausbau –
            zuverlässig umgesetzt und sauber dokumentiert.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3" aria-label="Galerie filtern">
          {filters.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => changeFilter(label)}
              className={`rounded-md border-2 px-5 py-2.5 text-xs font-black uppercase tracking-[0.08em] transition ${
                filter === label
                  ? "border-sky-500 bg-sky-500 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleGallery.map((image, index) => {
            const fullIndex = filteredGallery.indexOf(image);

            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(fullIndex)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 border-white bg-slate-200 text-left shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_18px_42px_rgba(14,165,233,0.18)] dark:border-slate-800 dark:bg-slate-800"
                aria-label={`${image.title} – Bild ${index + 1} vergrößern`}
              >
                <img
                  src={image.src}
                  alt={`${image.title} – Referenzfoto der BMSB GmbH`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 text-sky-600 opacity-0 shadow-lg transition group-hover:opacity-100">
                  <Expand size={18} />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-sky-300">
                    {image.category}
                  </span>
                  <span className="mt-1 block text-lg font-black">{image.title}</span>
                </span>
              </button>
            );
          })}
        </div>

        {!showAll && filteredGallery.length > 12 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex min-h-13 items-center gap-3 rounded-md border-2 border-sky-500 bg-white px-7 text-xs font-black uppercase tracking-[0.08em] text-sky-600 transition hover:-translate-y-0.5 hover:bg-sky-500 hover:text-white dark:bg-slate-900 dark:text-sky-300"
            >
              <Images size={19} /> Alle {filteredGallery.length} Bilder anzeigen
            </button>
          </div>
        )}
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Vergrößerte Galerieansicht"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 grid size-12 place-items-center rounded-full border border-white/30 bg-white/10 text-white transition hover:border-sky-400 hover:bg-sky-500 sm:right-8 sm:top-8"
            aria-label="Galerie schließen"
          >
            <X size={25} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((current) =>
                current === 0 ? filteredGallery.length - 1 : current - 1,
              );
            }}
            className="absolute left-2 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-sky-500 sm:left-8 sm:size-13"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft size={28} />
          </button>

          <figure
            className="max-h-[88vh] max-w-[min(1200px,86vw)]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={filteredGallery[selectedImage].src}
              alt={`${filteredGallery[selectedImage].title} – Referenzfoto der BMSB GmbH`}
              className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-white">
              <span className="text-xs font-black uppercase tracking-[0.18em] text-sky-300">
                {filteredGallery[selectedImage].category}
              </span>
              <span className="mx-3 text-white/40">•</span>
              <span className="font-bold">{filteredGallery[selectedImage].title}</span>
              <span className="ml-3 text-sm text-white/50">
                {selectedImage + 1} / {filteredGallery.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((current) =>
                current === filteredGallery.length - 1 ? 0 : current + 1,
              );
            }}
            className="absolute right-2 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-sky-500 sm:right-8 sm:size-13"
            aria-label="Nächstes Bild"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}
