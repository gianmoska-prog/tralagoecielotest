const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const pageLinks = Array.from(document.querySelectorAll("[data-page-link]"));
const pages = Array.from(document.querySelectorAll("[data-page]"));
const main = document.getElementById("main");
const videoModal = document.querySelector("[data-video-modal]");
const openVideoButtons = Array.from(
  document.querySelectorAll("[data-open-video]"),
);
const closeVideoButton = document.querySelector("[data-close-video]");
const videoFrame = document.querySelector("[data-video-frame]");
const mapFrame = document.querySelector("[data-map-frame]");
const mapActivate = document.querySelector("[data-map-activate]");
const enquiryForm = document.querySelector("[data-enquiry-form]");
const formStatus = document.querySelector("[data-form-status]");
const wineModal = document.querySelector("[data-wine-modal]");
const wineDialog = document.querySelector(".wine-dialog");
const wineLabel = document.querySelector(".wine-label");
const closeWine = document.querySelector("[data-close-wine]");
const carouselTrack = document.querySelector("[data-carousel-track]");
const carouselSlides = Array.from(document.querySelectorAll(".carousel-slide"));
const carouselPrev = document.querySelector("[data-carousel-prev]");
const carouselNext = document.querySelector("[data-carousel-next]");
const carouselCount = document.querySelector("[data-carousel-count]");
const carouselDots = document.querySelector("[data-carousel-dots]");
let carouselIndex = 0,
  lastFocus = null,
  menuLastFocus = null,
  carouselTouchStartX = 0,
  carouselTouchStartY = 0;

const LANG_META = {
  it: {
    code: "IT",
    flagClass: "flag-it",
    html: "it",
    title: "Tra Lago e Cielo — Agriturismo sul Lago di Bracciano",
  },
  en: {
    code: "EN",
    flagClass: "flag-gb",
    html: "en",
    title: "Tra Lago e Cielo — Agriturismo on Lake Bracciano",
  },
  es: {
    code: "ES",
    flagClass: "flag-es",
    html: "es",
    title: "Tra Lago e Cielo — Agroturismo en el Lago de Bracciano",
  },
  fr: {
    code: "FR",
    flagClass: "flag-fr",
    html: "fr",
    title: "Tra Lago e Cielo — Agritourisme sur le lac de Bracciano",
  },
  de: {
    code: "DE",
    flagClass: "flag-de",
    html: "de",
    title: "Tra Lago e Cielo — Agriturismo am Bracciano-See",
  },
};
const I18N = {
  en: {
    html: "html",
    "Tra Lago e Cielo — Agriturismo sul Lago di Bracciano":
      "Tra Lago e Cielo — Agriturismo sul Lago di Bracciano",
    "Tra Lago e Cielo": "Tra Lago e Cielo",
    "Bracciano · Roma": "Bracciano · Roma",
    Home: "Home",
    Agriturismo: "Agriturismo",
    Matrimoni: "Weddings",
    "Produzione vini": "Wine production",
    Contatti: "Contact",
    IT: "IT",
    Italiano: "Italiano",
    EN: "EN",
    English: "English",
    ES: "ES",
    Español: "Español",
    FR: "FR",
    Français: "Français",
    DE: "DE",
    Deutsch: "Deutsch",
    "01": "01",
    "02": "02",
    "03": "03",
    "04": "04",
    "05": "05",
    "Chiama ora": "Call now",
    "E-mail": "E-mail",
    "Tra Lago e Cielo — agriturismo, matrimoni ed eventi privati sul Lago di Bracciano":
      "Tra Lago e Cielo — agriturismo, matrimoni ed eventi privati sul Lago di Bracciano",
    "Agriturismo per matrimoni, eventi e degustazioni con vista sul Lago di Bracciano.":
      "Agriturismo for weddings, events and tastings overlooking Lake Bracciano.",
    "Scopri la tenuta": "Discover the estate",
    "Agriturismo · Matrimoni · Eventi privati":
      "Agriturismo · Weddings · Private events",
    "La tenuta, il lago, il ritmo della campagna.":
      "The estate, the lake, the rhythm of the countryside.",
    "Vista lago, giardino, piscina e salone raccolti in un percorso essenziale, per capire il carattere del luogo prima di visitarlo.":
      "Lake view, garden, pool and reception hall gathered into a concise path to understand the place before visiting it.",
    "Tra lago e cielo": "Between lake and sky",
    "Un agriturismo affacciato sul lago, immerso nel verde.":
      "An agriturismo overlooking the lake, immersed in greenery.",
    "Tra Lago e Cielo deve il suo nome allo skyline che abbraccia il lago, Anguillara, Trevignano e il Castello Odescalchi di Bracciano. Il parco, la piscina e gli spazi interni costruiscono una location semplice, accogliente e scenografica.":
      "Tra Lago e Cielo takes its name from the skyline embracing the lake, Anguillara, Trevignano and Bracciano’s Castello Odescalchi. The park, pool and interiors create a simple, welcoming and scenic location.",
    Paesaggio: "Landscape",
    "Il lago come respiro.": "The lake as a breath.",
    "Lo sguardo arriva fino al lago e al profilo di Bracciano: è la prima immagine che accompagna l'arrivo degli ospiti.":
      "The view reaches the lake and Bracciano’s profile: the first image that greets guests on arrival.",
    Giardino: "Garden",
    "Verde e ombra.": "Greenery and shade.",
    "Prati ampi, piante autoctone e fiori accompagnano accoglienza, aperitivi e momenti all'aperto.":
      "Wide lawns, native plants and flowers frame welcomes, aperitifs and outdoor moments.",
    Spazi: "Spaces",
    "Piscina, terrazza e salone.": "Pool, terrace and reception hall.",
    "Salone, terrazza, piscina e giardino permettono di alternare interni ed esterni secondo la giornata e la stagione.":
      "The hall, terrace, pool and garden allow indoor and outdoor moments to alternate according to the day and season.",
    Video: "Video",
    "La tenuta in movimento.": "The estate in motion.",
    "Un modo rapido per vedere il luogo in movimento, tra paesaggio, verde e spazi esterni.":
      "A quick way to see the place in motion, between landscape, greenery and outdoor spaces.",
    "Guarda il video": "Watch the video",
    "Guarda il paesaggio, il giardino e gli spazi esterni in movimento.":
      "Watch the landscape, garden and outdoor spaces in motion.",
    Galleria: "Gallery",
    "Piscina, giardino, salone e vedute sul lago.":
      "Pool, garden, reception hall and lake views.",
    "Immagini raccolte della piscina, del giardino, del salone e delle vedute sul Lago di Bracciano.":
      "A selection of images of the pool, garden, hall and views over Lake Bracciano.",
    "Il lago come sfondo naturale della tenuta":
      "The lake as the estate’s natural backdrop",
    "Piscina e vista sul Lago di Bracciano":
      "Pool and view over Lake Bracciano",
    "Riflessi, acqua e profilo del paesaggio":
      "Reflections, water and the profile of the landscape",
    "Orizzonte, piscina e atmosfera del luogo":
      "Horizon, pool and atmosphere of the place",
    "‹": "‹",
    "›": "›",
    "01 / 04": "01 / 04",
    "Organizza una visita": "Arrange a visit",
    "Matrimoni ed eventi": "Weddings and events",
    "Un solo matrimonio al giorno, una giornata più raccolta.":
      "One wedding per day, a more private celebration.",
    "Cerimonie civili reali in villa, aperitivi all'aperto, momenti conviviali nel salone e ricevimenti con vista sul lago.":
      "Official civil ceremonies in the villa, outdoor aperitifs, convivial moments in the hall and receptions with lake views.",
    "Spazi e capienza": "Spaces and capacity",
    "Spazi concreti, atmosfera naturale.":
      "Practical spaces, natural atmosphere.",
    "Il giardino di 40.000 mq confina con il parco di Bracciano-Martignano. Il salone accoglie fino a 110 persone, mentre terrazza, piscina e prato permettono aperitivi, accoglienza e momenti all'aperto.":
      "The 40,000 sqm garden borders the Bracciano-Martignano park. The hall welcomes up to 110 people, while the terrace, pool and lawn allow aperitifs, arrivals and outdoor moments.",
    "40.000": "40.000",
    "mq di giardino confinante con il parco di Bracciano-Martignano.":
      "sqm of garden bordering the Bracciano-Martignano park.",
    110: "110",
    "persone nella capienza del salone.": "people in the hall capacity.",
    1: "1",
    "matrimonio al giorno per eventi in esclusiva.":
      "wedding per day for exclusive events.",
    Villa: "Villa",
    "con piscina, terrazza, parcheggio interno e servizi aggiuntivi su richiesta.":
      "with pool, terrace, internal parking and additional services on request.",
    Cerimonia: "Ceremony",
    "Possibilità di rito civile reale in villa con cerimoniere comunale.":
      "Possibility of an official civil ceremony in the villa with a municipal celebrant.",
    Aperitivo: "Aperitif",
    "Giardino, piscina e vista lago per accogliere gli ospiti prima del ricevimento.":
      "Garden, pool and lake view to welcome guests before the reception.",
    Ricevimento: "Reception",
    "Il salone consente momenti conviviali all'interno; terrazza, piscina e prato accolgono gli eventi all'aperto.":
      "The hall allows convivial indoor moments; terrace, pool and lawn host outdoor events.",
    Sopralluogo: "Site visit",
    "Per disponibilità, menu e servizi aggiuntivi, il passaggio naturale è un contatto diretto con la struttura.":
      "For availability, menus and additional services, the natural next step is direct contact with the venue.",
    "Richiedi sopralluogo": "Request a site visit",
    Chiama: "Call",
    "Una cornice naturale per una giornata raccolta.":
      "A natural setting for an intimate day.",
    "Il paesaggio fa già molto: l'allestimento deve accompagnarlo, non sovrastarlo.":
      "The landscape already does much of the work: the setting should accompany it, not overpower it.",
    "Tre etichette, una terra.": "Three labels, one land.",
    "Vermentino, Merlot e Chardonnay presentati con origine, annata e informazioni essenziali in modo chiaro.":
      "Vermentino, Merlot and Chardonnay presented clearly with origin, vintage and essential information.",
    "Annata 2024": "2024 vintage",
    "Tre etichette, informazioni chiare.": "Three labels, clear information.",
    "Le etichette possono accompagnare degustazioni e momenti conviviali su prenotazione. Qui sono raccolte le informazioni essenziali: nome, annata, categoria, produttore e origine indicata.":
      "The labels can accompany tastings and convivial moments by reservation. Here you will find the essentials: name, vintage, category, producer and stated origin.",
    "Richiedi una degustazione": "Request a tasting",
    "Vino Vermentino IGP": "Vermentino IGP wine",
    Vermentino: "Vermentino",
    "Sabatino · Annata 2024": "Sabatino · 2024 vintage",
    "Apri scheda": "Open details",
    "Vino Merlot IGP": "Merlot IGP wine",
    Merlot: "Merlot",
    "Nero Fonte Lupo · Annata 2024": "Nero Fonte Lupo · 2024 vintage",
    "Vino Chardonnay IGP": "Chardonnay IGP wine",
    Chardonnay: "Chardonnay",
    "Riflesso del Lago · Annata 2024": "Riflesso del Lago · 2024 vintage",
    "Origine e responsabilità": "Origin and responsibility",
    "Origine indicata in etichetta.": "Origin stated on the label.",
    "Le tre etichette riportano la produzione e l'imbottigliamento a cura di":
      "The three labels state production and bottling by",
    "Azienda Agricola Rosalba Cutolo": "Azienda Agricola Rosalba Cutolo",
    ", Via Tassoni 4, Tarquinia, Viterbo.":
      ", Via Tassoni 4, Tarquinia, Viterbo.",
    Produzione: "Production",
    "Sede indicata": "Stated address",
    "Via Tassoni 4 · Tarquinia · Viterbo":
      "Via Tassoni 4 · Tarquinia · Viterbo",
    "Paese di produzione": "Country of production",
    "Prodotto in Italia": "Made in Italy",
    "Bevi sempre con moderazione": "Always drink in moderation",
    "Non consumare in gravidanza": "Do not consume during pregnancy",
    "Non bere alla guida": "Do not drink and drive",
    "Vietato ai minori di 18 anni": "Forbidden to under-18s",
    "Ingredienti, allergeni e dichiarazione nutrizionale sono indicati nelle rispettive schede tecniche delle etichette.":
      "Ingredients, allergens and nutritional declaration are indicated in each label’s technical sheet.",
    "Contatti, indirizzo e indicazioni in un solo punto.":
      "Contacts, address and directions in one place.",
    "Recapiti, social e mappa per richiedere informazioni, prenotare una visita o raggiungere la struttura.":
      "Contact details, social links and map to request information, book a visit or reach the venue.",
    "Contatti e dove siamo": "Contact and location",
    "Scegli il canale più comodo.": "Choose the most convenient channel.",
    "Telefono, email, social e indirizzo sono raccolti qui per rendere più semplice ogni richiesta: matrimoni, eventi, degustazioni, visite e indicazioni stradali.":
      "Phone, email, social links and address are gathered here to make every request simpler: weddings, events, tastings, visits and directions.",
    IG: "IG",
    Instagram: "Instagram",
    "Foto, aggiornamenti e contatto diretto tramite Instagram":
      "Photos, updates and direct contact via Instagram",
    FB: "FB",
    Facebook: "Facebook",
    "Pagina Facebook e contatto social": "Facebook page and social contact",
    "@": "@",
    "info@tralagoecielo.it": "info@tralagoecielo.it",
    "☎": "☎",
    Telefono: "Telephone",
    "328 8989566": "328 8989566",
    "Recapiti diretti": "Direct contacts",
    "Informazioni essenziali.": "Essential information.",
    Indirizzo: "Address",
    "Via della Lobbra 1b": "Via della Lobbra 1b",
    "Bracciano 00062 · Roma": "Bracciano 00062 · Roma",
    Email: "Email",
    Disponibilità: "Availability",
    "Per matrimoni, eventi, degustazioni e visite su prenotazione.":
      "For weddings, events, tastings and visits by reservation.",
    "Scrivi ora": "Write now",
    "Interagisci con la mappa": "Interact with the map",
    "Come arrivare": "Getting here",
    "Bracciano, tra Roma e il lago.": "Bracciano, between Rome and the lake.",
    "La struttura si trova in Via della Lobbra 1b, a Bracciano, vicino al Lago di Bracciano.":
      "The venue is located at Via della Lobbra 1b, in Bracciano, near Lake Bracciano.",
    "Apri mappa": "Open map",
    "Tra Lago e Cielo · Bracciano · Roma":
      "Tra Lago e Cielo · Bracciano · Roma",
    "Via della Lobbra 1b ·": "Via della Lobbra 1b ·",
    "Apri su YouTube": "Open on YouTube",
    "×": "×",
    "Tra Lago e Cielo · Annata 2024": "Tra Lago e Cielo · Annata 2024",
    "Scheda essenziale": "Essential sheet",
    "Consumo responsabile · Bevi sempre con moderazione.":
      "Responsible consumption · Always drink in moderation.",
    "Navigazione principale": "Main navigation",
    "Seleziona lingua": "Select language",
    "Apri menu": "Open menu",
    "Tra Lago e Cielo · Agriturismo Bracciano":
      "Tra Lago e Cielo · Agriturismo Bracciano",
    "Guarda il video Tra Lago e Cielo": "Guarda il video Tra Lago e Cielo",
    "Vista del Lago di Bracciano dalla tenuta":
      "Vista del Lago di Bracciano dalla tenuta",
    "Piscina con vista sul Lago di Bracciano":
      "Piscina con vista sul Lago di Bracciano",
    "Alberi e riflessi d'acqua presso la tenuta":
      "Alberi e riflessi d'acqua presso la tenuta",
    "Paesaggio lacustre e bordo piscina": "Paesaggio lacustre e bordo piscina",
    "Immagine precedente": "Immagine precedente",
    "Immagine successiva": "Immagine successiva",
    "Seleziona immagine": "Seleziona immagine",
    "Percorso indicativo dell’evento": "Percorso indicativo dell’evento",
    "Piscina e lago presso Tra Lago e Cielo":
      "Piscina e lago presso Tra Lago e Cielo",
    "Dettagli visivi della tenuta": "Dettagli visivi della tenuta",
    "Alberi e riflessi d'acqua nella tenuta":
      "Alberi e riflessi d'acqua nella tenuta",
    "Scorcio della piscina e del giardino":
      "Scorcio della piscina e del giardino",
    "Informazioni di origine e consumo responsabile":
      "Informazioni di origine e consumo responsabile",
    "Mappa Tra Lago e Cielo": "Mappa Tra Lago e Cielo",
    "Video Tra Lago e Cielo": "Video Tra Lago e Cielo",
    "Chiudi video": "Close video",
    Chiudi: "Close",
    "Chiudi menu": "Close menu",
    Nome: "Name",
    Categoria: "Category",
    Annata: "Vintage",
    Produttore: "Producer",
    "Etichetta 2024 prodotta e imbottigliata da Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.":
      "2024 label produced and bottled by Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.",
    "Vai all'immagine": "Vai all'immagine",
    "Vai all'immagine 1": "Vai all'immagine 1",
    "Vai all'immagine 2": "Vai all'immagine 2",
    "Vai all'immagine 3": "Vai all'immagine 3",
    "Vai all'immagine 4": "Vai all'immagine 4",
  },
  es: {
    html: "html",
    "Tra Lago e Cielo — Agriturismo sul Lago di Bracciano":
      "Tra Lago e Cielo — Agroturismo en el Lago de Bracciano",
    "Tra Lago e Cielo": "Tra Lago e Cielo",
    "Bracciano · Roma": "Bracciano · Roma",
    Home: "Inicio",
    Agriturismo: "Agroturismo",
    Matrimoni: "Bodas",
    "Produzione vini": "Producción de vinos",
    Contatti: "Contacto",
    IT: "IT",
    Italiano: "Italiano",
    EN: "EN",
    English: "English",
    ES: "ES",
    Español: "Español",
    FR: "FR",
    Français: "Français",
    DE: "DE",
    Deutsch: "Deutsch",
    "01": "01",
    "02": "02",
    "03": "03",
    "04": "04",
    "05": "05",
    "Chiama ora": "Llamar ahora",
    "E-mail": "E-mail",
    "Tra Lago e Cielo — agriturismo, matrimoni ed eventi privati sul Lago di Bracciano":
      "Tra Lago e Cielo — agroturismo, bodas y eventos privados en el Lago de Bracciano",
    "Agriturismo per matrimoni, eventi e degustazioni con vista sul Lago di Bracciano.":
      "Agroturismo para bodas, eventos y degustaciones con vista al Lago de Bracciano.",
    "Scopri la tenuta": "Descubre la finca",
    "Agriturismo · Matrimoni · Eventi privati":
      "Agroturismo · Bodas · Eventos privados",
    "La tenuta, il lago, il ritmo della campagna.":
      "La finca, el lago, el ritmo del campo.",
    "Vista lago, giardino, piscina e salone raccolti in un percorso essenziale, per capire il carattere del luogo prima di visitarlo.":
      "Vista al lago, jardín, piscina y salón reunidos en un recorrido esencial para entender el carácter del lugar antes de visitarlo.",
    "Tra lago e cielo": "Entre el lago y el cielo",
    "Un agriturismo affacciato sul lago, immerso nel verde.":
      "Un agroturismo con vistas al lago, rodeado de naturaleza.",
    "Tra Lago e Cielo deve il suo nome allo skyline che abbraccia il lago, Anguillara, Trevignano e il Castello Odescalchi di Bracciano. Il parco, la piscina e gli spazi interni costruiscono una location semplice, accogliente e scenografica.":
      "Tra Lago e Cielo debe su nombre al horizonte que abraza el lago, Anguillara, Trevignano y el Castillo Odescalchi de Bracciano. El parque, la piscina y los espacios interiores crean una localización sencilla, acogedora y escénica.",
    Paesaggio: "Paisaje",
    "Il lago come respiro.": "El lago como respiro.",
    "Lo sguardo arriva fino al lago e al profilo di Bracciano: è la prima immagine che accompagna l'arrivo degli ospiti.":
      "La mirada llega hasta el lago y el perfil de Bracciano: es la primera imagen que acompaña la llegada de los invitados.",
    Giardino: "Jardín",
    "Verde e ombra.": "Verde y sombra.",
    "Prati ampi, piante autoctone e fiori accompagnano accoglienza, aperitivi e momenti all'aperto.":
      "Amplios prados, plantas autóctonas y flores acompañan la bienvenida, los aperitivos y los momentos al aire libre.",
    Spazi: "Espacios",
    "Piscina, terrazza e salone.": "Piscina, terraza y salón.",
    "Salone, terrazza, piscina e giardino permettono di alternare interni ed esterni secondo la giornata e la stagione.":
      "El salón, la terraza, la piscina y el jardín permiten alternar interiores y exteriores según el día y la estación.",
    Video: "Vídeo",
    "La tenuta in movimento.": "La finca en movimiento.",
    "Un modo rapido per vedere il luogo in movimento, tra paesaggio, verde e spazi esterni.":
      "Una forma rápida de ver el lugar en movimiento, entre paisaje, vegetación y espacios exteriores.",
    "Guarda il video": "Ver el vídeo",
    "Guarda il paesaggio, il giardino e gli spazi esterni in movimento.":
      "Mira el paisaje, el jardín y los espacios exteriores en movimiento.",
    Galleria: "Galería",
    "Piscina, giardino, salone e vedute sul lago.":
      "Piscina, jardín, salón y vistas al lago.",
    "Immagini raccolte della piscina, del giardino, del salone e delle vedute sul Lago di Bracciano.":
      "Una selección de imágenes de la piscina, el jardín, el salón y las vistas al Lago de Bracciano.",
    "Il lago come sfondo naturale della tenuta":
      "El lago como fondo natural de la finca",
    "Piscina e vista sul Lago di Bracciano":
      "Piscina y vista al Lago de Bracciano",
    "Riflessi, acqua e profilo del paesaggio":
      "Reflejos, agua y perfil del paisaje",
    "Orizzonte, piscina e atmosfera del luogo":
      "Horizonte, piscina y atmósfera del lugar",
    "‹": "‹",
    "›": "›",
    "01 / 04": "01 / 04",
    "Organizza una visita": "Organiza una visita",
    "Matrimoni ed eventi": "Bodas y eventos",
    "Un solo matrimonio al giorno, una giornata più raccolta.":
      "Una sola boda al día, una jornada más íntima.",
    "Cerimonie civili reali in villa, aperitivi all'aperto, momenti conviviali nel salone e ricevimenti con vista sul lago.":
      "Ceremonias civiles oficiales en la villa, aperitivos al aire libre, momentos de convivencia en el salón y recepciones con vistas al lago.",
    "Spazi e capienza": "Espacios y capacidad",
    "Spazi concreti, atmosfera naturale.":
      "Espacios concretos, atmósfera natural.",
    "Il giardino di 40.000 mq confina con il parco di Bracciano-Martignano. Il salone accoglie fino a 110 persone, mentre terrazza, piscina e prato permettono aperitivi, accoglienza e momenti all'aperto.":
      "El jardín de 40.000 m² limita con el parque de Bracciano-Martignano. El salón acoge hasta 110 personas, mientras que la terraza, la piscina y el prado permiten aperitivos, bienvenida y momentos al aire libre.",
    "40.000": "40.000",
    "mq di giardino confinante con il parco di Bracciano-Martignano.":
      "m² de jardín junto al parque de Bracciano-Martignano.",
    110: "110",
    "persone nella capienza del salone.": "personas de capacidad en el salón.",
    1: "1",
    "matrimonio al giorno per eventi in esclusiva.":
      "boda al día para eventos en exclusiva.",
    Villa: "Villa",
    "con piscina, terrazza, parcheggio interno e servizi aggiuntivi su richiesta.":
      "con piscina, terraza, aparcamiento interno y servicios adicionales bajo petición.",
    Cerimonia: "Ceremonia",
    "Possibilità di rito civile reale in villa con cerimoniere comunale.":
      "Posibilidad de ceremonia civil oficial en la villa con celebrante municipal.",
    Aperitivo: "Aperitivo",
    "Giardino, piscina e vista lago per accogliere gli ospiti prima del ricevimento.":
      "Jardín, piscina y vista al lago para recibir a los invitados antes de la recepción.",
    Ricevimento: "Recepción",
    "Il salone consente momenti conviviali all'interno; terrazza, piscina e prato accolgono gli eventi all'aperto.":
      "El salón permite momentos de convivencia en el interior; la terraza, la piscina y el prado acogen eventos al aire libre.",
    Sopralluogo: "Visita previa",
    "Per disponibilità, menu e servizi aggiuntivi, il passaggio naturale è un contatto diretto con la struttura.":
      "Para disponibilidad, menús y servicios adicionales, el paso natural es contactar directamente con la estructura.",
    "Richiedi sopralluogo": "Solicitar visita",
    Chiama: "Llamar",
    "Una cornice naturale per una giornata raccolta.":
      "Un marco natural para una jornada íntima.",
    "Il paesaggio fa già molto: l'allestimento deve accompagnarlo, non sovrastarlo.":
      "El paisaje ya hace mucho: la decoración debe acompañarlo, no imponerse.",
    "Tre etichette, una terra.": "Tres etiquetas, una tierra.",
    "Vermentino, Merlot e Chardonnay presentati con origine, annata e informazioni essenziali in modo chiaro.":
      "Vermentino, Merlot y Chardonnay presentados con origen, añada e información esencial de forma clara.",
    "Annata 2024": "Añada 2024",
    "Tre etichette, informazioni chiare.": "Tres etiquetas, información clara.",
    "Le etichette possono accompagnare degustazioni e momenti conviviali su prenotazione. Qui sono raccolte le informazioni essenziali: nome, annata, categoria, produttore e origine indicata.":
      "Las etiquetas pueden acompañar degustaciones y momentos de convivencia con reserva. Aquí se reúne la información esencial: nombre, añada, categoría, productor y origen indicado.",
    "Richiedi una degustazione": "Solicitar una degustación",
    "Vino Vermentino IGP": "Vino Vermentino IGP",
    Vermentino: "Vermentino",
    "Sabatino · Annata 2024": "Sabatino · Añada 2024",
    "Apri scheda": "Abrir ficha",
    "Vino Merlot IGP": "Vino Merlot IGP",
    Merlot: "Merlot",
    "Nero Fonte Lupo · Annata 2024": "Nero Fonte Lupo · Añada 2024",
    "Vino Chardonnay IGP": "Vino Chardonnay IGP",
    Chardonnay: "Chardonnay",
    "Riflesso del Lago · Annata 2024": "Riflesso del Lago · Añada 2024",
    "Origine e responsabilità": "Origen y responsabilidad",
    "Origine indicata in etichetta.": "Origen indicado en la etiqueta.",
    "Le tre etichette riportano la produzione e l'imbottigliamento a cura di":
      "Las tres etiquetas indican producción y embotellado a cargo de",
    "Azienda Agricola Rosalba Cutolo": "Azienda Agricola Rosalba Cutolo",
    ", Via Tassoni 4, Tarquinia, Viterbo.":
      ", Via Tassoni 4, Tarquinia, Viterbo.",
    Produzione: "Producción",
    "Sede indicata": "Dirección indicada",
    "Via Tassoni 4 · Tarquinia · Viterbo":
      "Via Tassoni 4 · Tarquinia · Viterbo",
    "Paese di produzione": "País de producción",
    "Prodotto in Italia": "Producto de Italia",
    "Bevi sempre con moderazione": "Bebe siempre con moderación",
    "Non consumare in gravidanza": "No consumir durante el embarazo",
    "Non bere alla guida": "No beber y conducir",
    "Vietato ai minori di 18 anni": "Prohibido a menores de 18 años",
    "Ingredienti, allergeni e dichiarazione nutrizionale sono indicati nelle rispettive schede tecniche delle etichette.":
      "Ingredientes, alérgenos y declaración nutricional se indican en las respectivas fichas técnicas de las etiquetas.",
    "Contatti, indirizzo e indicazioni in un solo punto.":
      "Contacto, dirección e indicaciones en un solo lugar.",
    "Recapiti, social e mappa per richiedere informazioni, prenotare una visita o raggiungere la struttura.":
      "Datos de contacto, redes sociales y mapa para solicitar información, reservar una visita o llegar al lugar.",
    "Contatti e dove siamo": "Contacto y ubicación",
    "Scegli il canale più comodo.": "Elige el canal más cómodo.",
    "Telefono, email, social e indirizzo sono raccolti qui per rendere più semplice ogni richiesta: matrimoni, eventi, degustazioni, visite e indicazioni stradali.":
      "Teléfono, email, redes sociales y dirección están reunidos aquí para simplificar cualquier solicitud: bodas, eventos, degustaciones, visitas e indicaciones.",
    IG: "IG",
    Instagram: "Instagram",
    "Foto, aggiornamenti e contatto diretto tramite Instagram":
      "Fotos, novedades y contacto directo por Instagram",
    FB: "FB",
    Facebook: "Facebook",
    "Pagina Facebook e contatto social": "Página de Facebook y contacto social",
    "@": "@",
    "info@tralagoecielo.it": "info@tralagoecielo.it",
    "☎": "☎",
    Telefono: "Teléfono",
    "328 8989566": "328 8989566",
    "Recapiti diretti": "Contactos directos",
    "Informazioni essenziali.": "Información esencial.",
    Indirizzo: "Dirección",
    "Via della Lobbra 1b": "Via della Lobbra 1b",
    "Bracciano 00062 · Roma": "Bracciano 00062 · Roma",
    Email: "Email",
    Disponibilità: "Disponibilidad",
    "Per matrimoni, eventi, degustazioni e visite su prenotazione.":
      "Para bodas, eventos, degustaciones y visitas con reserva.",
    "Scrivi ora": "Escribir ahora",
    "Interagisci con la mappa": "Interactuar con el mapa",
    "Come arrivare": "Cómo llegar",
    "Bracciano, tra Roma e il lago.": "Bracciano, entre Roma y el lago.",
    "La struttura si trova in Via della Lobbra 1b, a Bracciano, vicino al Lago di Bracciano.":
      "La estructura se encuentra en Via della Lobbra 1b, en Bracciano, cerca del Lago de Bracciano.",
    "Apri mappa": "Abrir mapa",
    "Tra Lago e Cielo · Bracciano · Roma":
      "Tra Lago e Cielo · Bracciano · Roma",
    "Via della Lobbra 1b ·": "Via della Lobbra 1b ·",
    "Apri su YouTube": "Abrir en YouTube",
    "×": "×",
    "Tra Lago e Cielo · Annata 2024": "Tra Lago e Cielo · Añada 2024",
    "Scheda essenziale": "Ficha esencial",
    "Consumo responsabile · Bevi sempre con moderazione.":
      "Consumo responsable · Bebe siempre con moderación.",
    "Navigazione principale": "Navegación principal",
    "Seleziona lingua": "Seleccionar idioma",
    "Apri menu": "Abrir menú",
    "Tra Lago e Cielo · Agriturismo Bracciano":
      "Tra Lago e Cielo · Agroturismo Bracciano",
    "Guarda il video Tra Lago e Cielo": "Ver el vídeo de Tra Lago e Cielo",
    "Vista del Lago di Bracciano dalla tenuta":
      "Vista del Lago de Bracciano desde la finca",
    "Piscina con vista sul Lago di Bracciano":
      "Piscina con vista al Lago de Bracciano",
    "Alberi e riflessi d'acqua presso la tenuta":
      "Árboles y reflejos de agua en la finca",
    "Paesaggio lacustre e bordo piscina": "Paisaje lacustre y borde de piscina",
    "Immagine precedente": "Imagen anterior",
    "Immagine successiva": "Imagen siguiente",
    "Seleziona immagine": "Seleccionar imagen",
    "Percorso indicativo dell’evento": "Recorrido indicativo del evento",
    "Piscina e lago presso Tra Lago e Cielo":
      "Piscina y lago en Tra Lago e Cielo",
    "Dettagli visivi della tenuta": "Detalles visuales de la finca",
    "Alberi e riflessi d'acqua nella tenuta":
      "Árboles y reflejos de agua en la finca",
    "Scorcio della piscina e del giardino": "Vista de la piscina y del jardín",
    "Informazioni di origine e consumo responsabile":
      "Información de origen y consumo responsable",
    "Mappa Tra Lago e Cielo": "Mapa de Tra Lago e Cielo",
    "Video Tra Lago e Cielo": "Vídeo de Tra Lago e Cielo",
    "Chiudi video": "Cerrar vídeo",
    Chiudi: "Cerrar",
    "Chiudi menu": "Cerrar menú",
    Nome: "Nombre",
    Categoria: "Categoría",
    Annata: "Añada",
    Produttore: "Productor",
    "Etichetta 2024 prodotta e imbottigliata da Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.":
      "Etiqueta 2024 producida y embotellada por Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.",
    "Vai all'immagine": "Ir a la imagen",
    "Vai all'immagine 1": "Ir a la imagen 1",
    "Vai all'immagine 2": "Ir a la imagen 2",
    "Vai all'immagine 3": "Ir a la imagen 3",
    "Vai all'immagine 4": "Ir a la imagen 4",
  },
  fr: {
    html: "html",
    "Tra Lago e Cielo — Agriturismo sul Lago di Bracciano":
      "Tra Lago e Cielo — Agritourisme sur le lac de Bracciano",
    "Tra Lago e Cielo": "Tra Lago e Cielo",
    "Bracciano · Roma": "Bracciano · Roma",
    Home: "Accueil",
    Agriturismo: "Agritourisme",
    Matrimoni: "Mariages",
    "Produzione vini": "Production de vins",
    Contatti: "Contact",
    IT: "IT",
    Italiano: "Italiano",
    EN: "EN",
    English: "English",
    ES: "ES",
    Español: "Español",
    FR: "FR",
    Français: "Français",
    DE: "DE",
    Deutsch: "Deutsch",
    "01": "01",
    "02": "02",
    "03": "03",
    "04": "04",
    "05": "05",
    "Chiama ora": "Appeler",
    "E-mail": "E-mail",
    "Tra Lago e Cielo — agriturismo, matrimoni ed eventi privati sul Lago di Bracciano":
      "Tra Lago e Cielo — agritourisme, mariages et événements privés sur le lac de Bracciano",
    "Agriturismo per matrimoni, eventi e degustazioni con vista sul Lago di Bracciano.":
      "Agritourisme pour mariages, événements et dégustations avec vue sur le lac de Bracciano.",
    "Scopri la tenuta": "Découvrir le domaine",
    "Agriturismo · Matrimoni · Eventi privati":
      "Agritourisme · Mariages · Événements privés",
    "La tenuta, il lago, il ritmo della campagna.":
      "Le domaine, le lac, le rythme de la campagne.",
    "Vista lago, giardino, piscina e salone raccolti in un percorso essenziale, per capire il carattere del luogo prima di visitarlo.":
      "Vue sur le lac, jardin, piscine et salle réunis dans un parcours essentiel pour comprendre le caractère du lieu avant la visite.",
    "Tra lago e cielo": "Entre lac et ciel",
    "Un agriturismo affacciato sul lago, immerso nel verde.":
      "Un agritourisme face au lac, entouré de verdure.",
    "Tra Lago e Cielo deve il suo nome allo skyline che abbraccia il lago, Anguillara, Trevignano e il Castello Odescalchi di Bracciano. Il parco, la piscina e gli spazi interni costruiscono una location semplice, accogliente e scenografica.":
      "Tra Lago e Cielo doit son nom à la ligne d’horizon qui embrasse le lac, Anguillara, Trevignano et le château Odescalchi de Bracciano. Le parc, la piscine et les espaces intérieurs composent un lieu simple, accueillant et scénographique.",
    Paesaggio: "Paysage",
    "Il lago come respiro.": "Le lac comme respiration.",
    "Lo sguardo arriva fino al lago e al profilo di Bracciano: è la prima immagine che accompagna l'arrivo degli ospiti.":
      "Le regard porte jusqu’au lac et au profil de Bracciano : c’est la première image qui accompagne l’arrivée des invités.",
    Giardino: "Jardin",
    "Verde e ombra.": "Verdure et ombre.",
    "Prati ampi, piante autoctone e fiori accompagnano accoglienza, aperitivi e momenti all'aperto.":
      "De vastes pelouses, des plantes locales et des fleurs accompagnent l’accueil, les apéritifs et les moments en plein air.",
    Spazi: "Espaces",
    "Piscina, terrazza e salone.": "Piscine, terrasse et salle.",
    "Salone, terrazza, piscina e giardino permettono di alternare interni ed esterni secondo la giornata e la stagione.":
      "La salle, la terrasse, la piscine et le jardin permettent d’alterner intérieur et extérieur selon la journée et la saison.",
    Video: "Vidéo",
    "La tenuta in movimento.": "Le domaine en mouvement.",
    "Un modo rapido per vedere il luogo in movimento, tra paesaggio, verde e spazi esterni.":
      "Une manière rapide de voir le lieu en mouvement, entre paysage, verdure et espaces extérieurs.",
    "Guarda il video": "Voir la vidéo",
    "Guarda il paesaggio, il giardino e gli spazi esterni in movimento.":
      "Découvrez le paysage, le jardin et les espaces extérieurs en mouvement.",
    Galleria: "Galerie",
    "Piscina, giardino, salone e vedute sul lago.":
      "Piscine, jardin, salle et vues sur le lac.",
    "Immagini raccolte della piscina, del giardino, del salone e delle vedute sul Lago di Bracciano.":
      "Une sélection d’images de la piscine, du jardin, de la salle et des vues sur le lac de Bracciano.",
    "Il lago come sfondo naturale della tenuta":
      "Le lac comme décor naturel du domaine",
    "Piscina e vista sul Lago di Bracciano":
      "Piscine et vue sur le lac de Bracciano",
    "Riflessi, acqua e profilo del paesaggio":
      "Reflets, eau et profil du paysage",
    "Orizzonte, piscina e atmosfera del luogo":
      "Horizon, piscine et atmosphère du lieu",
    "‹": "‹",
    "›": "›",
    "01 / 04": "01 / 04",
    "Organizza una visita": "Organiser une visite",
    "Matrimoni ed eventi": "Mariages et événements",
    "Un solo matrimonio al giorno, una giornata più raccolta.":
      "Un seul mariage par jour, une journée plus intime.",
    "Cerimonie civili reali in villa, aperitivi all'aperto, momenti conviviali nel salone e ricevimenti con vista sul lago.":
      "Cérémonies civiles officielles dans la villa, apéritifs en plein air, moments conviviaux dans la salle et réceptions avec vue sur le lac.",
    "Spazi e capienza": "Espaces et capacité",
    "Spazi concreti, atmosfera naturale.":
      "Des espaces concrets, une atmosphère naturelle.",
    "Il giardino di 40.000 mq confina con il parco di Bracciano-Martignano. Il salone accoglie fino a 110 persone, mentre terrazza, piscina e prato permettono aperitivi, accoglienza e momenti all'aperto.":
      "Le jardin de 40 000 m² borde le parc de Bracciano-Martignano. La salle accueille jusqu’à 110 personnes, tandis que la terrasse, la piscine et la pelouse permettent apéritifs, accueil et moments en plein air.",
    "40.000": "40.000",
    "mq di giardino confinante con il parco di Bracciano-Martignano.":
      "m² de jardin attenant au parc de Bracciano-Martignano.",
    110: "110",
    "persone nella capienza del salone.":
      "personnes de capacité dans la salle.",
    1: "1",
    "matrimonio al giorno per eventi in esclusiva.":
      "mariage par jour pour des événements en exclusivité.",
    Villa: "Villa",
    "con piscina, terrazza, parcheggio interno e servizi aggiuntivi su richiesta.":
      "avec piscine, terrasse, parking interne et services supplémentaires sur demande.",
    Cerimonia: "Cérémonie",
    "Possibilità di rito civile reale in villa con cerimoniere comunale.":
      "Possibilité de cérémonie civile officielle dans la villa avec officier municipal.",
    Aperitivo: "Apéritif",
    "Giardino, piscina e vista lago per accogliere gli ospiti prima del ricevimento.":
      "Jardin, piscine et vue sur le lac pour accueillir les invités avant la réception.",
    Ricevimento: "Réception",
    "Il salone consente momenti conviviali all'interno; terrazza, piscina e prato accolgono gli eventi all'aperto.":
      "La salle permet des moments conviviaux à l’intérieur ; terrasse, piscine et pelouse accueillent les événements en plein air.",
    Sopralluogo: "Visite sur place",
    "Per disponibilità, menu e servizi aggiuntivi, il passaggio naturale è un contatto diretto con la struttura.":
      "Pour disponibilités, menus et services supplémentaires, l’étape naturelle est un contact direct avec l’établissement.",
    "Richiedi sopralluogo": "Demander une visite",
    Chiama: "Appeler",
    "Una cornice naturale per una giornata raccolta.":
      "Un cadre naturel pour une journée intime.",
    "Il paesaggio fa già molto: l'allestimento deve accompagnarlo, non sovrastarlo.":
      "Le paysage fait déjà beaucoup : l’aménagement doit l’accompagner, non le dominer.",
    "Tre etichette, una terra.": "Trois étiquettes, une terre.",
    "Vermentino, Merlot e Chardonnay presentati con origine, annata e informazioni essenziali in modo chiaro.":
      "Vermentino, Merlot et Chardonnay présentés clairement avec origine, millésime et informations essentielles.",
    "Annata 2024": "Millésime 2024",
    "Tre etichette, informazioni chiare.":
      "Trois étiquettes, des informations claires.",
    "Le etichette possono accompagnare degustazioni e momenti conviviali su prenotazione. Qui sono raccolte le informazioni essenziali: nome, annata, categoria, produttore e origine indicata.":
      "Les étiquettes peuvent accompagner dégustations et moments conviviaux sur réservation. Vous trouverez ici les informations essentielles : nom, millésime, catégorie, producteur et origine indiquée.",
    "Richiedi una degustazione": "Demander une dégustation",
    "Vino Vermentino IGP": "Vin Vermentino IGP",
    Vermentino: "Vermentino",
    "Sabatino · Annata 2024": "Sabatino · Millésime 2024",
    "Apri scheda": "Ouvrir la fiche",
    "Vino Merlot IGP": "Vin Merlot IGP",
    Merlot: "Merlot",
    "Nero Fonte Lupo · Annata 2024": "Nero Fonte Lupo · Millésime 2024",
    "Vino Chardonnay IGP": "Vin Chardonnay IGP",
    Chardonnay: "Chardonnay",
    "Riflesso del Lago · Annata 2024": "Riflesso del Lago · Millésime 2024",
    "Origine e responsabilità": "Origine et responsabilité",
    "Origine indicata in etichetta.": "Origine indiquée sur l’étiquette.",
    "Le tre etichette riportano la produzione e l'imbottigliamento a cura di":
      "Les trois étiquettes indiquent une production et une mise en bouteille par",
    "Azienda Agricola Rosalba Cutolo": "Azienda Agricola Rosalba Cutolo",
    ", Via Tassoni 4, Tarquinia, Viterbo.":
      ", Via Tassoni 4, Tarquinia, Viterbo.",
    Produzione: "Production",
    "Sede indicata": "Adresse indiquée",
    "Via Tassoni 4 · Tarquinia · Viterbo":
      "Via Tassoni 4 · Tarquinia · Viterbo",
    "Paese di produzione": "Pays de production",
    "Prodotto in Italia": "Produit en Italie",
    "Bevi sempre con moderazione": "Buvez toujours avec modération",
    "Non consumare in gravidanza": "Ne pas consommer pendant la grossesse",
    "Non bere alla guida": "Ne pas boire avant de conduire",
    "Vietato ai minori di 18 anni": "Interdit aux moins de 18 ans",
    "Ingredienti, allergeni e dichiarazione nutrizionale sono indicati nelle rispettive schede tecniche delle etichette.":
      "Ingrédients, allergènes et déclaration nutritionnelle sont indiqués dans les fiches techniques respectives des étiquettes.",
    "Contatti, indirizzo e indicazioni in un solo punto.":
      "Contacts, adresse et indications en un seul endroit.",
    "Recapiti, social e mappa per richiedere informazioni, prenotare una visita o raggiungere la struttura.":
      "Coordonnées, réseaux sociaux et carte pour demander des informations, réserver une visite ou rejoindre le lieu.",
    "Contatti e dove siamo": "Contacts et accès",
    "Scegli il canale più comodo.": "Choisissez le canal le plus pratique.",
    "Telefono, email, social e indirizzo sono raccolti qui per rendere più semplice ogni richiesta: matrimoni, eventi, degustazioni, visite e indicazioni stradali.":
      "Téléphone, e-mail, réseaux sociaux et adresse sont réunis ici pour simplifier toute demande : mariages, événements, dégustations, visites et indications routières.",
    IG: "IG",
    Instagram: "Instagram",
    "Foto, aggiornamenti e contatto diretto tramite Instagram":
      "Photos, actualités et contact direct via Instagram",
    FB: "FB",
    Facebook: "Facebook",
    "Pagina Facebook e contatto social": "Page Facebook et contact social",
    "@": "@",
    "info@tralagoecielo.it": "info@tralagoecielo.it",
    "☎": "☎",
    Telefono: "Téléphone",
    "328 8989566": "328 8989566",
    "Recapiti diretti": "Coordonnées directes",
    "Informazioni essenziali.": "Informations essentielles.",
    Indirizzo: "Adresse",
    "Via della Lobbra 1b": "Via della Lobbra 1b",
    "Bracciano 00062 · Roma": "Bracciano 00062 · Roma",
    Email: "E-mail",
    Disponibilità: "Disponibilité",
    "Per matrimoni, eventi, degustazioni e visite su prenotazione.":
      "Pour mariages, événements, dégustations et visites sur réservation.",
    "Scrivi ora": "Écrire maintenant",
    "Interagisci con la mappa": "Interagir avec la carte",
    "Come arrivare": "Comment arriver",
    "Bracciano, tra Roma e il lago.": "Bracciano, entre Rome et le lac.",
    "La struttura si trova in Via della Lobbra 1b, a Bracciano, vicino al Lago di Bracciano.":
      "L’établissement se trouve Via della Lobbra 1b, à Bracciano, près du lac de Bracciano.",
    "Apri mappa": "Ouvrir la carte",
    "Tra Lago e Cielo · Bracciano · Roma":
      "Tra Lago e Cielo · Bracciano · Roma",
    "Via della Lobbra 1b ·": "Via della Lobbra 1b ·",
    "Apri su YouTube": "Ouvrir sur YouTube",
    "×": "×",
    "Tra Lago e Cielo · Annata 2024": "Tra Lago e Cielo · Millésime 2024",
    "Scheda essenziale": "Fiche essentielle",
    "Consumo responsabile · Bevi sempre con moderazione.":
      "Consommation responsable · Buvez toujours avec modération.",
    "Navigazione principale": "Navigation principale",
    "Seleziona lingua": "Sélectionner la langue",
    "Apri menu": "Ouvrir le menu",
    "Tra Lago e Cielo · Agriturismo Bracciano":
      "Tra Lago e Cielo · Agritourisme Bracciano",
    "Guarda il video Tra Lago e Cielo": "Voir la vidéo de Tra Lago e Cielo",
    "Vista del Lago di Bracciano dalla tenuta":
      "Vue du lac de Bracciano depuis le domaine",
    "Piscina con vista sul Lago di Bracciano":
      "Piscine avec vue sur le lac de Bracciano",
    "Alberi e riflessi d'acqua presso la tenuta":
      "Arbres et reflets d’eau près du domaine",
    "Paesaggio lacustre e bordo piscina": "Paysage lacustre et bord de piscine",
    "Immagine precedente": "Image précédente",
    "Immagine successiva": "Image suivante",
    "Seleziona immagine": "Sélectionner l’image",
    "Percorso indicativo dell’evento": "Parcours indicatif de l’événement",
    "Piscina e lago presso Tra Lago e Cielo":
      "Piscine et lac à Tra Lago e Cielo",
    "Dettagli visivi della tenuta": "Détails visuels du domaine",
    "Alberi e riflessi d'acqua nella tenuta":
      "Arbres et reflets d’eau dans le domaine",
    "Scorcio della piscina e del giardino": "Vue de la piscine et du jardin",
    "Informazioni di origine e consumo responsabile":
      "Informations d’origine et consommation responsable",
    "Mappa Tra Lago e Cielo": "Carte de Tra Lago e Cielo",
    "Video Tra Lago e Cielo": "Vidéo Tra Lago e Cielo",
    "Chiudi video": "Fermer la vidéo",
    Chiudi: "Fermer",
    "Chiudi menu": "Fermer le menu",
    Nome: "Nom",
    Categoria: "Catégorie",
    Annata: "Millésime",
    Produttore: "Producteur",
    "Etichetta 2024 prodotta e imbottigliata da Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.":
      "Étiquette 2024 produite et mise en bouteille par Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.",
    "Vai all'immagine": "Aller à l’image",
    "Vai all'immagine 1": "Aller à l’image 1",
    "Vai all'immagine 2": "Aller à l’image 2",
    "Vai all'immagine 3": "Aller à l’image 3",
    "Vai all'immagine 4": "Aller à l’image 4",
  },
  de: {
    html: "html",
    "Tra Lago e Cielo — Agriturismo sul Lago di Bracciano":
      "Tra Lago e Cielo — Agriturismo am Bracciano-See",
    "Tra Lago e Cielo": "Tra Lago e Cielo",
    "Bracciano · Roma": "Bracciano · Roma",
    Home: "Start",
    Agriturismo: "Agriturismo",
    Matrimoni: "Hochzeiten",
    "Produzione vini": "Weinproduktion",
    Contatti: "Kontakt",
    IT: "IT",
    Italiano: "Italiano",
    EN: "EN",
    English: "English",
    ES: "ES",
    Español: "Español",
    FR: "FR",
    Français: "Français",
    DE: "DE",
    Deutsch: "Deutsch",
    "01": "01",
    "02": "02",
    "03": "03",
    "04": "04",
    "05": "05",
    "Chiama ora": "Jetzt anrufen",
    "E-mail": "E-Mail",
    "Tra Lago e Cielo — agriturismo, matrimoni ed eventi privati sul Lago di Bracciano":
      "Tra Lago e Cielo — Agriturismo, Hochzeiten und private Veranstaltungen am Bracciano-See",
    "Agriturismo per matrimoni, eventi e degustazioni con vista sul Lago di Bracciano.":
      "Agriturismo für Hochzeiten, Veranstaltungen und Verkostungen mit Blick auf den Bracciano-See.",
    "Scopri la tenuta": "Das Anwesen entdecken",
    "Agriturismo · Matrimoni · Eventi privati":
      "Agriturismo · Hochzeiten · Private Veranstaltungen",
    "La tenuta, il lago, il ritmo della campagna.":
      "Das Anwesen, der See, der Rhythmus der Landschaft.",
    "Vista lago, giardino, piscina e salone raccolti in un percorso essenziale, per capire il carattere del luogo prima di visitarlo.":
      "Seeblick, Garten, Pool und Saal in einem wesentlichen Rundgang, um den Charakter des Ortes vor dem Besuch zu erfassen.",
    "Tra lago e cielo": "Zwischen See und Himmel",
    "Un agriturismo affacciato sul lago, immerso nel verde.":
      "Ein Agriturismo mit Blick auf den See, eingebettet ins Grüne.",
    "Tra Lago e Cielo deve il suo nome allo skyline che abbraccia il lago, Anguillara, Trevignano e il Castello Odescalchi di Bracciano. Il parco, la piscina e gli spazi interni costruiscono una location semplice, accogliente e scenografica.":
      "Tra Lago e Cielo verdankt seinen Namen der Silhouette, die den See, Anguillara, Trevignano und das Castello Odescalchi von Bracciano umfasst. Park, Pool und Innenräume schaffen einen einfachen, einladenden und atmosphärischen Ort.",
    Paesaggio: "Landschaft",
    "Il lago come respiro.": "Der See als Atemzug.",
    "Lo sguardo arriva fino al lago e al profilo di Bracciano: è la prima immagine che accompagna l'arrivo degli ospiti.":
      "Der Blick reicht bis zum See und zur Silhouette von Bracciano: Es ist das erste Bild, das die Ankunft der Gäste begleitet.",
    Giardino: "Garten",
    "Verde e ombra.": "Grün und Schatten.",
    "Prati ampi, piante autoctone e fiori accompagnano accoglienza, aperitivi e momenti all'aperto.":
      "Weite Wiesen, heimische Pflanzen und Blumen begleiten Empfang, Aperitifs und Momente im Freien.",
    Spazi: "Räume",
    "Piscina, terrazza e salone.": "Pool, Terrasse und Saal.",
    "Salone, terrazza, piscina e giardino permettono di alternare interni ed esterni secondo la giornata e la stagione.":
      "Saal, Terrasse, Pool und Garten ermöglichen je nach Tag und Jahreszeit den Wechsel zwischen Innen- und Außenbereichen.",
    Video: "Video",
    "La tenuta in movimento.": "Das Anwesen in Bewegung.",
    "Un modo rapido per vedere il luogo in movimento, tra paesaggio, verde e spazi esterni.":
      "Eine schnelle Möglichkeit, den Ort in Bewegung zu sehen – zwischen Landschaft, Grün und Außenbereichen.",
    "Guarda il video": "Video ansehen",
    "Guarda il paesaggio, il giardino e gli spazi esterni in movimento.":
      "Sehen Sie Landschaft, Garten und Außenbereiche in Bewegung.",
    Galleria: "Galerie",
    "Piscina, giardino, salone e vedute sul lago.":
      "Pool, Garten, Saal und Ausblicke auf den See.",
    "Immagini raccolte della piscina, del giardino, del salone e delle vedute sul Lago di Bracciano.":
      "Eine Auswahl von Bildern des Pools, des Gartens, des Saals und der Ausblicke auf den Bracciano-See.",
    "Il lago come sfondo naturale della tenuta":
      "Der See als natürliche Kulisse des Anwesens",
    "Piscina e vista sul Lago di Bracciano":
      "Pool und Blick auf den Bracciano-See",
    "Riflessi, acqua e profilo del paesaggio":
      "Reflexe, Wasser und Landschaftsprofil",
    "Orizzonte, piscina e atmosfera del luogo":
      "Horizont, Pool und Atmosphäre des Ortes",
    "‹": "‹",
    "›": "›",
    "01 / 04": "01 / 04",
    "Organizza una visita": "Besuch planen",
    "Matrimoni ed eventi": "Hochzeiten und Veranstaltungen",
    "Un solo matrimonio al giorno, una giornata più raccolta.":
      "Nur eine Hochzeit pro Tag, ein privaterer Anlass.",
    "Cerimonie civili reali in villa, aperitivi all'aperto, momenti conviviali nel salone e ricevimenti con vista sul lago.":
      "Offizielle standesamtliche Zeremonien in der Villa, Aperitifs im Freien, gesellige Momente im Saal und Empfänge mit Seeblick.",
    "Spazi e capienza": "Räume und Kapazität",
    "Spazi concreti, atmosfera naturale.":
      "Konkrete Räume, natürliche Atmosphäre.",
    "Il giardino di 40.000 mq confina con il parco di Bracciano-Martignano. Il salone accoglie fino a 110 persone, mentre terrazza, piscina e prato permettono aperitivi, accoglienza e momenti all'aperto.":
      "Der 40.000 m² große Garten grenzt an den Park von Bracciano-Martignano. Der Saal bietet Platz für bis zu 110 Personen, während Terrasse, Pool und Wiese Aperitifs, Empfang und Momente im Freien ermöglichen.",
    "40.000": "40.000",
    "mq di giardino confinante con il parco di Bracciano-Martignano.":
      "m² Garten angrenzend an den Park von Bracciano-Martignano.",
    110: "110",
    "persone nella capienza del salone.": "Personen Kapazität im Saal.",
    1: "1",
    "matrimonio al giorno per eventi in esclusiva.":
      "Hochzeit pro Tag für exklusive Veranstaltungen.",
    Villa: "Villa",
    "con piscina, terrazza, parcheggio interno e servizi aggiuntivi su richiesta.":
      "mit Pool, Terrasse, internem Parkplatz und zusätzlichen Leistungen auf Anfrage.",
    Cerimonia: "Zeremonie",
    "Possibilità di rito civile reale in villa con cerimoniere comunale.":
      "Möglichkeit einer offiziellen standesamtlichen Zeremonie in der Villa mit kommunalem Zeremonienleiter.",
    Aperitivo: "Aperitif",
    "Giardino, piscina e vista lago per accogliere gli ospiti prima del ricevimento.":
      "Garten, Pool und Seeblick, um die Gäste vor dem Empfang zu begrüßen.",
    Ricevimento: "Empfang",
    "Il salone consente momenti conviviali all'interno; terrazza, piscina e prato accolgono gli eventi all'aperto.":
      "Der Saal ermöglicht gesellige Momente im Innenbereich; Terrasse, Pool und Wiese nehmen Veranstaltungen im Freien auf.",
    Sopralluogo: "Besichtigung",
    "Per disponibilità, menu e servizi aggiuntivi, il passaggio naturale è un contatto diretto con la struttura.":
      "Für Verfügbarkeit, Menüs und Zusatzleistungen ist der direkte Kontakt mit der Struktur der natürliche nächste Schritt.",
    "Richiedi sopralluogo": "Besichtigung anfragen",
    Chiama: "Anrufen",
    "Una cornice naturale per una giornata raccolta.":
      "Ein natürlicher Rahmen für einen ruhigen, privaten Tag.",
    "Il paesaggio fa già molto: l'allestimento deve accompagnarlo, non sovrastarlo.":
      "Die Landschaft leistet bereits viel: Die Gestaltung soll sie begleiten, nicht überlagern.",
    "Tre etichette, una terra.": "Drei Etiketten, ein Land.",
    "Vermentino, Merlot e Chardonnay presentati con origine, annata e informazioni essenziali in modo chiaro.":
      "Vermentino, Merlot und Chardonnay klar präsentiert mit Herkunft, Jahrgang und wesentlichen Informationen.",
    "Annata 2024": "Jahrgang 2024",
    "Tre etichette, informazioni chiare.":
      "Drei Etiketten, klare Informationen.",
    "Le etichette possono accompagnare degustazioni e momenti conviviali su prenotazione. Qui sono raccolte le informazioni essenziali: nome, annata, categoria, produttore e origine indicata.":
      "Die Etiketten können Verkostungen und gesellige Momente nach Reservierung begleiten. Hier finden Sie die wichtigsten Informationen: Name, Jahrgang, Kategorie, Produzent und angegebene Herkunft.",
    "Richiedi una degustazione": "Verkostung anfragen",
    "Vino Vermentino IGP": "Vermentino IGP Wein",
    Vermentino: "Vermentino",
    "Sabatino · Annata 2024": "Sabatino · Jahrgang 2024",
    "Apri scheda": "Details öffnen",
    "Vino Merlot IGP": "Merlot IGP Wein",
    Merlot: "Merlot",
    "Nero Fonte Lupo · Annata 2024": "Nero Fonte Lupo · Jahrgang 2024",
    "Vino Chardonnay IGP": "Chardonnay IGP Wein",
    Chardonnay: "Chardonnay",
    "Riflesso del Lago · Annata 2024": "Riflesso del Lago · Jahrgang 2024",
    "Origine e responsabilità": "Herkunft und Verantwortung",
    "Origine indicata in etichetta.": "Auf dem Etikett angegebene Herkunft.",
    "Le tre etichette riportano la produzione e l'imbottigliamento a cura di":
      "Die drei Etiketten nennen Produktion und Abfüllung durch",
    "Azienda Agricola Rosalba Cutolo": "Azienda Agricola Rosalba Cutolo",
    ", Via Tassoni 4, Tarquinia, Viterbo.":
      ", Via Tassoni 4, Tarquinia, Viterbo.",
    Produzione: "Produktion",
    "Sede indicata": "Angegebener Sitz",
    "Via Tassoni 4 · Tarquinia · Viterbo":
      "Via Tassoni 4 · Tarquinia · Viterbo",
    "Paese di produzione": "Produktionsland",
    "Prodotto in Italia": "Hergestellt in Italien",
    "Bevi sempre con moderazione": "Immer in Maßen trinken",
    "Non consumare in gravidanza":
      "Nicht während der Schwangerschaft konsumieren",
    "Non bere alla guida": "Nicht trinken und fahren",
    "Vietato ai minori di 18 anni": "Für Personen unter 18 Jahren verboten",
    "Ingredienti, allergeni e dichiarazione nutrizionale sono indicati nelle rispettive schede tecniche delle etichette.":
      "Zutaten, Allergene und Nährwertangaben sind in den jeweiligen technischen Datenblättern der Etiketten angegeben.",
    "Contatti, indirizzo e indicazioni in un solo punto.":
      "Kontakt, Adresse und Wegbeschreibung an einem Ort.",
    "Recapiti, social e mappa per richiedere informazioni, prenotare una visita o raggiungere la struttura.":
      "Kontaktdaten, soziale Medien und Karte, um Informationen anzufragen, einen Besuch zu buchen oder den Ort zu erreichen.",
    "Contatti e dove siamo": "Kontakt und Lage",
    "Scegli il canale più comodo.": "Wählen Sie den bequemsten Kanal.",
    "Telefono, email, social e indirizzo sono raccolti qui per rendere più semplice ogni richiesta: matrimoni, eventi, degustazioni, visite e indicazioni stradali.":
      "Telefon, E-Mail, soziale Medien und Adresse sind hier gesammelt, um jede Anfrage zu erleichtern: Hochzeiten, Veranstaltungen, Verkostungen, Besuche und Wegbeschreibungen.",
    IG: "IG",
    Instagram: "Instagram",
    "Foto, aggiornamenti e contatto diretto tramite Instagram":
      "Fotos, Neuigkeiten und direkter Kontakt über Instagram",
    FB: "FB",
    Facebook: "Facebook",
    "Pagina Facebook e contatto social":
      "Facebook-Seite und Kontakt über soziale Medien",
    "@": "@",
    "info@tralagoecielo.it": "info@tralagoecielo.it",
    "☎": "☎",
    Telefono: "Telefon",
    "328 8989566": "328 8989566",
    "Recapiti diretti": "Direkte Kontakte",
    "Informazioni essenziali.": "Wesentliche Informationen.",
    Indirizzo: "Adresse",
    "Via della Lobbra 1b": "Via della Lobbra 1b",
    "Bracciano 00062 · Roma": "Bracciano 00062 · Roma",
    Email: "E-Mail",
    Disponibilità: "Verfügbarkeit",
    "Per matrimoni, eventi, degustazioni e visite su prenotazione.":
      "Für Hochzeiten, Veranstaltungen, Verkostungen und Besuche nach Reservierung.",
    "Scrivi ora": "Jetzt schreiben",
    "Interagisci con la mappa": "Mit der Karte interagieren",
    "Come arrivare": "Anfahrt",
    "Bracciano, tra Roma e il lago.": "Bracciano, zwischen Rom und dem See.",
    "La struttura si trova in Via della Lobbra 1b, a Bracciano, vicino al Lago di Bracciano.":
      "Die Struktur befindet sich in der Via della Lobbra 1b in Bracciano, nahe dem Bracciano-See.",
    "Apri mappa": "Karte öffnen",
    "Tra Lago e Cielo · Bracciano · Roma":
      "Tra Lago e Cielo · Bracciano · Roma",
    "Via della Lobbra 1b ·": "Via della Lobbra 1b ·",
    "Apri su YouTube": "Auf YouTube öffnen",
    "×": "×",
    "Tra Lago e Cielo · Annata 2024": "Tra Lago e Cielo · Jahrgang 2024",
    "Scheda essenziale": "Kurzübersicht",
    "Consumo responsabile · Bevi sempre con moderazione.":
      "Verantwortungsvoller Konsum · Immer in Maßen trinken.",
    "Navigazione principale": "Hauptnavigation",
    "Seleziona lingua": "Sprache auswählen",
    "Apri menu": "Menü öffnen",
    "Tra Lago e Cielo · Agriturismo Bracciano":
      "Tra Lago e Cielo · Agriturismo Bracciano",
    "Guarda il video Tra Lago e Cielo": "Video von Tra Lago e Cielo ansehen",
    "Vista del Lago di Bracciano dalla tenuta":
      "Blick vom Anwesen auf den Bracciano-See",
    "Piscina con vista sul Lago di Bracciano":
      "Pool mit Blick auf den Bracciano-See",
    "Alberi e riflessi d'acqua presso la tenuta":
      "Bäume und Wasserreflexe am Anwesen",
    "Paesaggio lacustre e bordo piscina": "Seenlandschaft und Poolrand",
    "Immagine precedente": "Vorheriges Bild",
    "Immagine successiva": "Nächstes Bild",
    "Seleziona immagine": "Bild auswählen",
    "Percorso indicativo dell’evento":
      "Beispielhafter Ablauf der Veranstaltung",
    "Piscina e lago presso Tra Lago e Cielo":
      "Pool und See bei Tra Lago e Cielo",
    "Dettagli visivi della tenuta": "Visuelle Details des Anwesens",
    "Alberi e riflessi d'acqua nella tenuta":
      "Bäume und Wasserreflexe im Anwesen",
    "Scorcio della piscina e del giardino": "Blick auf Pool und Garten",
    "Informazioni di origine e consumo responsabile":
      "Informationen zu Herkunft und verantwortungsvollem Konsum",
    "Mappa Tra Lago e Cielo": "Karte von Tra Lago e Cielo",
    "Video Tra Lago e Cielo": "Video Tra Lago e Cielo",
    "Chiudi video": "Video schließen",
    Chiudi: "Schließen",
    "Chiudi menu": "Menü schließen",
    Nome: "Name",
    Categoria: "Kategorie",
    Annata: "Jahrgang",
    Produttore: "Produzent",
    "Etichetta 2024 prodotta e imbottigliata da Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.":
      "Etikett 2024 produziert und abgefüllt von Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.",
    "Vai all'immagine": "Zum Bild gehen",
    "Vai all'immagine 1": "Zum Bild 1 gehen",
    "Vai all'immagine 2": "Zum Bild 2 gehen",
    "Vai all'immagine 3": "Zum Bild 3 gehen",
    "Vai all'immagine 4": "Zum Bild 4 gehen",
  },
};
let currentLang = localStorage.getItem("tlec-language") || "it";
const originalTextNodes = [];
const originalAttrs = [];
let activeWineKey = null;
function translated(source) {
  return currentLang === "it" ? source : I18N[currentLang]?.[source] || source;
}

const EXTRA_I18N = {
  en: {
    "Vista del Lago di Bracciano e del giardino":
      "View of Lake Bracciano and the garden",
    "Lago, giardino e vista dalla tenuta":
      "Lake, garden and views from the estate",
    "Piscina al tramonto con vista sul lago":
      "Pool at sunset overlooking the lake",
    "La piscina nelle ore più quiete della giornata":
      "The pool in the quietest hours of the day",
    "Esterni della villa con prato e vista lago":
      "Villa exterior with lawn and lake view",
    "La villa, il prato e il profilo del lago":
      "The villa, the lawn and the line of the lake",
    "Salone interno allestito per ricevimenti":
      "Interior hall set for receptions",
    "Il salone interno preparato per il ricevimento":
      "The interior hall prepared for the reception",
    "Cerimonia all’aperto nel giardino della tenuta":
      "Outdoor ceremony in the estate garden",
    "Dettaglio dell’allestimento per una cerimonia all’aperto":
      "Detail of the setting for an outdoor ceremony",
    "Sedute per una cerimonia nel giardino":
      "Seating for a ceremony in the garden",
    "Momento degli sposi durante il ricevimento":
      "A moment with the couple during the reception",
    "Sposi al tramonto nella tenuta": "The couple at sunset on the estate",
  },
  es: {
    "Vista del Lago di Bracciano e del giardino":
      "Vista del Lago de Bracciano y del jardín",
    "Lago, giardino e vista dalla tenuta":
      "Lago, jardín y vistas desde la finca",
    "Piscina al tramonto con vista sul lago":
      "Piscina al atardecer con vista al lago",
    "La piscina nelle ore più quiete della giornata":
      "La piscina en las horas más tranquilas del día",
    "Esterni della villa con prato e vista lago":
      "Exterior de la villa con césped y vista al lago",
    "La villa, il prato e il profilo del lago":
      "La villa, el césped y el perfil del lago",
    "Salone interno allestito per ricevimenti":
      "Salón interior preparado para recepciones",
    "Il salone interno preparato per il ricevimento":
      "El salón interior preparado para la recepción",
    "Cerimonia all’aperto nel giardino della tenuta":
      "Ceremonia al aire libre en el jardín de la finca",
    "Dettaglio dell’allestimento per una cerimonia all’aperto":
      "Detalle del montaje para una ceremonia al aire libre",
    "Sedute per una cerimonia nel giardino":
      "Asientos para una ceremonia en el jardín",
    "Momento degli sposi durante il ricevimento":
      "Un momento de los novios durante la recepción",
    "Sposi al tramonto nella tenuta": "Los novios al atardecer en la finca",
  },
  fr: {
    "Vista del Lago di Bracciano e del giardino":
      "Vue sur le lac de Bracciano et le jardin",
    "Lago, giardino e vista dalla tenuta":
      "Lac, jardin et vue depuis le domaine",
    "Piscina al tramonto con vista sul lago":
      "Piscine au coucher du soleil avec vue sur le lac",
    "La piscina nelle ore più quiete della giornata":
      "La piscine aux heures les plus calmes de la journée",
    "Esterni della villa con prato e vista lago":
      "Extérieurs de la villa avec pelouse et vue sur le lac",
    "La villa, il prato e il profilo del lago":
      "La villa, la pelouse et la ligne du lac",
    "Salone interno allestito per ricevimenti":
      "Salle intérieure préparée pour les réceptions",
    "Il salone interno preparato per il ricevimento":
      "La salle intérieure préparée pour la réception",
    "Cerimonia all’aperto nel giardino della tenuta":
      "Cérémonie en plein air dans le jardin du domaine",
    "Dettaglio dell’allestimento per una cerimonia all’aperto":
      "Détail de l’aménagement pour une cérémonie en plein air",
    "Sedute per una cerimonia nel giardino":
      "Assises pour une cérémonie dans le jardin",
    "Momento degli sposi durante il ricevimento":
      "Un moment des mariés pendant la réception",
    "Sposi al tramonto nella tenuta":
      "Les mariés au coucher du soleil dans le domaine",
  },
  de: {
    "Vista del Lago di Bracciano e del giardino":
      "Blick auf den Bracciano-See und den Garten",
    "Lago, giardino e vista dalla tenuta":
      "See, Garten und Aussicht vom Anwesen",
    "Piscina al tramonto con vista sul lago":
      "Pool bei Sonnenuntergang mit Blick auf den See",
    "La piscina nelle ore più quiete della giornata":
      "Der Pool in den ruhigsten Stunden des Tages",
    "Esterni della villa con prato e vista lago":
      "Außenbereich der Villa mit Rasen und Seeblick",
    "La villa, il prato e il profilo del lago":
      "Die Villa, der Rasen und die Linie des Sees",
    "Salone interno allestito per ricevimenti":
      "Innenraum für Empfänge vorbereitet",
    "Il salone interno preparato per il ricevimento":
      "Der Innenraum für den Empfang vorbereitet",
    "Cerimonia all’aperto nel giardino della tenuta":
      "Zeremonie im Freien im Garten des Anwesens",
    "Dettaglio dell’allestimento per una cerimonia all’aperto":
      "Detail der Gestaltung für eine Zeremonie im Freien",
    "Sedute per una cerimonia nel giardino":
      "Sitzplätze für eine Zeremonie im Garten",
    "Momento degli sposi durante il ricevimento":
      "Ein Moment des Brautpaares während des Empfangs",
    "Sposi al tramonto nella tenuta":
      "Das Brautpaar bei Sonnenuntergang auf dem Anwesen",
  },
};
Object.keys(EXTRA_I18N).forEach((lang) =>
  Object.assign(I18N[lang] || {}, EXTRA_I18N[lang]),
);
const V19_I18N = {
  en: {
    "Vai al contenuto": "Skip to content",
    "Navigazione mobile": "Mobile navigation",
    "Richiedi disponibilità": "Request availability",
    "Punti di forza della tenuta": "Estate highlights",
    "In esclusiva": "Exclusive use",
    "Un solo matrimonio al giorno, per vivere gli spazi con maggiore libertà.":
      "One wedding per day, so the spaces can be enjoyed with greater freedom.",
    "Dentro e fuori": "Indoors and outdoors",
    "Salone, terrazza, piscina e giardino permettono di adattare la giornata.":
      "Hall, terrace, pool and garden allow the day to adapt.",
    Sopralluoghi: "Site visits",
    "Visite su prenotazione per verificare spazi, disponibilità e servizi.":
      "Visits by appointment to review spaces, availability and services.",
    "Domande frequenti": "Frequently asked questions",
    "Le informazioni utili prima di contattarci.":
      "Useful information before contacting us.",
    "Quante persone può accogliere il salone?":
      "How many people can the hall accommodate?",
    "La capienza indicata per il salone è fino a 110 persone. Per configurazioni, allestimenti e servizi è consigliato un sopralluogo.":
      "The stated hall capacity is up to 110 people. A site visit is recommended to discuss layouts, settings and services.",
    "È possibile celebrare il rito civile in villa?":
      "Can a civil ceremony be held at the villa?",
    "La struttura indica la possibilità di rito civile reale in villa con cerimoniere comunale. Disponibilità e procedure vanno confermate per la data scelta.":
      "The venue states that an official civil ceremony with a municipal celebrant is possible. Availability and procedures must be confirmed for the chosen date.",
    "Gli eventi si svolgono in esclusiva?": "Are events held exclusively?",
    "È previsto un solo matrimonio al giorno, così da dedicare gli spazi all'evento.":
      "Only one wedding is scheduled per day, allowing the spaces to be dedicated to the event.",
    "È disponibile un'alternativa in caso di maltempo?":
      "Is there an alternative in case of bad weather?",
    "Il salone offre uno spazio interno. La soluzione più adatta dipende dal numero degli ospiti e dall'allestimento, da definire direttamente con la struttura.":
      "The hall provides an indoor space. The most suitable arrangement depends on guest numbers and the setup, to be agreed directly with the venue.",
    "Come si richiede un sopralluogo?": "How can I request a site visit?",
    "È possibile inviare una richiesta dalla pagina Contatti oppure chiamare il 328 8989566.":
      "Send a request from the Contact page or call +39 328 8989566.",
    "Visualizza la mappa": "View the map",
    "La mappa è fornita da Google. Caricandola, il browser si collegherà ai servizi di Google secondo la relativa informativa.":
      "The map is provided by Google. Loading it connects your browser to Google services under Google's policy.",
    "Carica Google Maps": "Load Google Maps",
    "Raccontaci la tua richiesta.": "Tell us about your enquiry.",
    "Compila i dettagli essenziali: prepareremo un messaggio ordinato da inviare a Tra Lago e Cielo. Per ora l'invio utilizza il programma e-mail del dispositivo.":
      "Enter the essential details and we will prepare a structured message for Tra Lago e Cielo. For now, it is sent through your device's email app.",
    "Tipo di richiesta": "Enquiry type",
    Seleziona: "Select",
    Matrimonio: "Wedding",
    "Evento privato": "Private event",
    Degustazione: "Tasting",
    "Visita alla tenuta": "Estate visit",
    "Altre informazioni": "Other information",
    "Data o periodo preferito": "Preferred date or period",
    "Nome e cognome": "Full name",
    "Numero indicativo di ospiti": "Approximate number of guests",
    Messaggio: "Message",
    "Ho letto l'informativa privacy e acconsento all'uso dei dati per rispondere alla richiesta.":
      "I have read the privacy notice and agree to the use of my data to answer this enquiry.",
    "Prepara l'e-mail": "Prepare email",
    "Non salviamo i dati inseriti in questo sito.":
      "We do not store the data entered on this site.",
    "Apertura del programma e-mail in corso…": "Opening your email app…",
    "Cookie e servizi esterni": "Cookies and external services",
    "Immagine precedente": "Previous image",
    "Immagine successiva": "Next image",
    "Seleziona immagine": "Select image",
    "Percorso indicativo dell’evento": "Indicative event flow",
    "Dettagli visivi della tenuta": "Visual details of the estate",
    "Informazioni di origine e consumo responsabile":
      "Origin and responsible consumption information",
    "Mappa Tra Lago e Cielo": "Tra Lago e Cielo map",
    "Guarda il video Tra Lago e Cielo": "Watch the Tra Lago e Cielo video",
  },
  es: {
    "Vai al contenuto": "Saltar al contenido",
    "Navigazione mobile": "Navegación móvil",
    "Richiedi disponibilità": "Consultar disponibilidad",
    "Punti di forza della tenuta": "Puntos fuertes de la finca",
    "In esclusiva": "Uso exclusivo",
    "Dentro e fuori": "Interior y exterior",
    Sopralluoghi: "Visitas",
    "Domande frequenti": "Preguntas frecuentes",
    "Le informazioni utili prima di contattarci.":
      "Información útil antes de contactarnos.",
    "Quante persone può accogliere il salone?":
      "¿Cuántas personas puede acoger el salón?",
    "È possibile celebrare il rito civile in villa?":
      "¿Es posible celebrar una ceremonia civil en la villa?",
    "Gli eventi si svolgono in esclusiva?":
      "¿Los eventos se celebran en exclusiva?",
    "È disponibile un'alternativa in caso di maltempo?":
      "¿Hay una alternativa en caso de mal tiempo?",
    "Come si richiede un sopralluogo?": "¿Cómo se solicita una visita?",
    "Visualizza la mappa": "Ver el mapa",
    "Carica Google Maps": "Cargar Google Maps",
    "Raccontaci la tua richiesta.": "Cuéntanos tu solicitud.",
    "Tipo di richiesta": "Tipo de solicitud",
    Seleziona: "Seleccionar",
    Matrimonio: "Boda",
    "Evento privato": "Evento privado",
    Degustazione: "Degustación",
    "Visita alla tenuta": "Visita a la finca",
    "Altre informazioni": "Otra información",
    "Data o periodo preferito": "Fecha o periodo preferido",
    "Nome e cognome": "Nombre completo",
    "Numero indicativo di ospiti": "Número aproximado de invitados",
    Messaggio: "Mensaje",
    "Prepara l'e-mail": "Preparar correo",
    "Non salviamo i dati inseriti in questo sito.":
      "No guardamos los datos introducidos en este sitio.",
    "Apertura del programma e-mail in corso…":
      "Abriendo la aplicación de correo…",
    "Cookie e servizi esterni": "Cookies y servicios externos",
    "Immagine precedente": "Imagen anterior",
    "Immagine successiva": "Imagen siguiente",
    "Seleziona immagine": "Seleccionar imagen",
    "Percorso indicativo dell’evento": "Desarrollo orientativo del evento",
    "Dettagli visivi della tenuta": "Detalles visuales de la finca",
    "Informazioni di origine e consumo responsabile":
      "Información de origen y consumo responsable",
    "Mappa Tra Lago e Cielo": "Mapa de Tra Lago e Cielo",
    "Guarda il video Tra Lago e Cielo": "Ver el vídeo de Tra Lago e Cielo",
  },
  fr: {
    "Vai al contenuto": "Aller au contenu",
    "Navigazione mobile": "Navigation mobile",
    "Richiedi disponibilità": "Demander les disponibilités",
    "Punti di forza della tenuta": "Atouts du domaine",
    "In esclusiva": "Usage exclusif",
    "Dentro e fuori": "Intérieur et extérieur",
    Sopralluoghi: "Visites",
    "Domande frequenti": "Questions fréquentes",
    "Le informazioni utili prima di contattarci.":
      "Informations utiles avant de nous contacter.",
    "Quante persone può accogliere il salone?":
      "Combien de personnes la salle peut-elle accueillir ?",
    "È possibile celebrare il rito civile in villa?":
      "Peut-on célébrer une cérémonie civile à la villa ?",
    "Gli eventi si svolgono in esclusiva?":
      "Les événements sont-ils organisés en exclusivité ?",
    "È disponibile un'alternativa in caso di maltempo?":
      "Existe-t-il une solution en cas de mauvais temps ?",
    "Come si richiede un sopralluogo?": "Comment demander une visite ?",
    "Visualizza la mappa": "Voir la carte",
    "Carica Google Maps": "Charger Google Maps",
    "Raccontaci la tua richiesta.": "Parlez-nous de votre demande.",
    "Tipo di richiesta": "Type de demande",
    Seleziona: "Sélectionner",
    Matrimonio: "Mariage",
    "Evento privato": "Événement privé",
    Degustazione: "Dégustation",
    "Visita alla tenuta": "Visite du domaine",
    "Altre informazioni": "Autres informations",
    "Data o periodo preferito": "Date ou période souhaitée",
    "Nome e cognome": "Nom et prénom",
    "Numero indicativo di ospiti": "Nombre approximatif d'invités",
    Messaggio: "Message",
    "Prepara l'e-mail": "Préparer l'e-mail",
    "Non salviamo i dati inseriti in questo sito.":
      "Nous ne conservons pas les données saisies sur ce site.",
    "Apertura del programma e-mail in corso…":
      "Ouverture de l'application e-mail…",
    "Cookie e servizi esterni": "Cookies et services externes",
    "Immagine precedente": "Image précédente",
    "Immagine successiva": "Image suivante",
    "Seleziona immagine": "Choisir une image",
    "Percorso indicativo dell’evento": "Déroulement indicatif de l'événement",
    "Dettagli visivi della tenuta": "Détails visuels du domaine",
    "Informazioni di origine e consumo responsabile":
      "Informations sur l'origine et la consommation responsable",
    "Mappa Tra Lago e Cielo": "Carte de Tra Lago e Cielo",
    "Guarda il video Tra Lago e Cielo": "Voir la vidéo de Tra Lago e Cielo",
  },
  de: {
    "Vai al contenuto": "Zum Inhalt springen",
    "Navigazione mobile": "Mobile Navigation",
    "Richiedi disponibilità": "Verfügbarkeit anfragen",
    "Punti di forza della tenuta": "Vorzüge des Anwesens",
    "In esclusiva": "Exklusive Nutzung",
    "Dentro e fuori": "Drinnen und draußen",
    Sopralluoghi: "Besichtigungen",
    "Domande frequenti": "Häufig gestellte Fragen",
    "Le informazioni utili prima di contattarci.":
      "Nützliche Informationen vor Ihrer Kontaktaufnahme.",
    "Quante persone può accogliere il salone?":
      "Wie viele Personen fasst der Saal?",
    "È possibile celebrare il rito civile in villa?":
      "Kann eine standesamtliche Zeremonie in der Villa stattfinden?",
    "Gli eventi si svolgono in esclusiva?":
      "Finden Veranstaltungen exklusiv statt?",
    "È disponibile un'alternativa in caso di maltempo?":
      "Gibt es eine Alternative bei schlechtem Wetter?",
    "Come si richiede un sopralluogo?":
      "Wie kann eine Besichtigung angefragt werden?",
    "Visualizza la mappa": "Karte anzeigen",
    "Carica Google Maps": "Google Maps laden",
    "Raccontaci la tua richiesta.": "Erzählen Sie uns von Ihrer Anfrage.",
    "Tipo di richiesta": "Art der Anfrage",
    Seleziona: "Auswählen",
    Matrimonio: "Hochzeit",
    "Evento privato": "Private Veranstaltung",
    Degustazione: "Verkostung",
    "Visita alla tenuta": "Besuch des Anwesens",
    "Altre informazioni": "Weitere Informationen",
    "Data o periodo preferito": "Bevorzugtes Datum oder Zeitraum",
    "Nome e cognome": "Vor- und Nachname",
    "Numero indicativo di ospiti": "Ungefähre Gästezahl",
    Messaggio: "Nachricht",
    "Prepara l'e-mail": "E-Mail vorbereiten",
    "Non salviamo i dati inseriti in questo sito.":
      "Wir speichern die auf dieser Website eingegebenen Daten nicht.",
    "Apertura del programma e-mail in corso…": "E-Mail-App wird geöffnet…",
    "Cookie e servizi esterni": "Cookies und externe Dienste",
    "Immagine precedente": "Vorheriges Bild",
    "Immagine successiva": "Nächstes Bild",
    "Seleziona immagine": "Bild auswählen",
    "Percorso indicativo dell’evento": "Beispielhafter Veranstaltungsablauf",
    "Dettagli visivi della tenuta": "Visuelle Details des Anwesens",
    "Informazioni di origine e consumo responsabile":
      "Informationen zu Herkunft und verantwortungsvollem Konsum",
    "Mappa Tra Lago e Cielo": "Karte von Tra Lago e Cielo",
    "Guarda il video Tra Lago e Cielo": "Video von Tra Lago e Cielo ansehen",
  },
};
Object.keys(V19_I18N).forEach((lang) =>
  Object.assign(I18N[lang] || {}, V19_I18N[lang]),
);
const V19_LONG_I18N = {
  es: {
    "Un solo matrimonio al giorno, per vivere gli spazi con maggiore libertà.":
      "Una sola boda al día para disfrutar de los espacios con mayor libertad.",
    "Salone, terrazza, piscina e giardino permettono di adattare la giornata.":
      "Salón, terraza, piscina y jardín permiten adaptar la jornada.",
    "Visite su prenotazione per verificare spazi, disponibilità e servizi.":
      "Visitas con cita previa para conocer espacios, disponibilidad y servicios.",
    "La capienza indicata per il salone è fino a 110 persone. Per configurazioni, allestimenti e servizi è consigliato un sopralluogo.":
      "La capacidad indicada del salón es de hasta 110 personas. Se recomienda una visita para hablar de distribución, montaje y servicios.",
    "La struttura indica la possibilità di rito civile reale in villa con cerimoniere comunale. Disponibilità e procedure vanno confermate per la data scelta.":
      "El lugar indica la posibilidad de una ceremonia civil oficial con representante municipal. La disponibilidad y el procedimiento deben confirmarse para la fecha elegida.",
    "È previsto un solo matrimonio al giorno, così da dedicare gli spazi all'evento.":
      "Se celebra una sola boda al día, reservando los espacios para el evento.",
    "Il salone offre uno spazio interno. La soluzione più adatta dipende dal numero degli ospiti e dall'allestimento, da definire direttamente con la struttura.":
      "El salón ofrece un espacio interior. La solución adecuada depende del número de invitados y del montaje, a acordar con el lugar.",
    "È possibile inviare una richiesta dalla pagina Contatti oppure chiamare il 328 8989566.":
      "Puede enviar una solicitud desde la página Contacto o llamar al +39 328 8989566.",
    "La mappa è fornita da Google. Caricandola, il browser si collegherà ai servizi di Google secondo la relativa informativa.":
      "El mapa lo proporciona Google. Al cargarlo, el navegador se conectará a sus servicios según la política de Google.",
    "Compila i dettagli essenziali: prepareremo un messaggio ordinato da inviare a Tra Lago e Cielo. Per ora l'invio utilizza il programma e-mail del dispositivo.":
      "Complete los datos esenciales y prepararemos un mensaje ordenado para Tra Lago e Cielo. Por ahora se envía mediante la aplicación de correo del dispositivo.",
    "Ho letto l'informativa privacy e acconsento all'uso dei dati per rispondere alla richiesta.":
      "He leído la política de privacidad y acepto el uso de mis datos para responder a esta solicitud.",
    "Es. giugno 2027": "Ej. junio de 2027",
    "Es. 80": "Ej. 80",
    "Aggiungi ciò che può aiutarci a capire la richiesta.":
      "Añada cualquier detalle que nos ayude a entender la solicitud.",
  },
  fr: {
    "Un solo matrimonio al giorno, per vivere gli spazi con maggiore libertà.":
      "Un seul mariage par jour pour profiter plus librement des espaces.",
    "Salone, terrazza, piscina e giardino permettono di adattare la giornata.":
      "Salle, terrasse, piscine et jardin permettent d'adapter la journée.",
    "Visite su prenotazione per verificare spazi, disponibilità e servizi.":
      "Visites sur rendez-vous pour découvrir les espaces, disponibilités et services.",
    "La capienza indicata per il salone è fino a 110 persone. Per configurazioni, allestimenti e servizi è consigliato un sopralluogo.":
      "La capacité annoncée de la salle est de 110 personnes. Une visite est recommandée pour discuter de la disposition, de la décoration et des services.",
    "La struttura indica la possibilità di rito civile reale in villa con cerimoniere comunale. Disponibilità e procedure vanno confermate per la data scelta.":
      "Le lieu indique qu'une cérémonie civile officielle avec un représentant municipal est possible. Disponibilité et démarches doivent être confirmées pour la date choisie.",
    "È previsto un solo matrimonio al giorno, così da dedicare gli spazi all'evento.":
      "Un seul mariage est prévu par jour afin de dédier les espaces à l'événement.",
    "Il salone offre uno spazio interno. La soluzione più adatta dipende dal numero degli ospiti e dall'allestimento, da definire direttamente con la struttura.":
      "La salle offre un espace intérieur. La solution dépend du nombre d'invités et de l'aménagement, à définir avec le lieu.",
    "È possibile inviare una richiesta dalla pagina Contatti oppure chiamare il 328 8989566.":
      "Envoyez une demande depuis la page Contact ou appelez le +39 328 8989566.",
    "La mappa è fornita da Google. Caricandola, il browser si collegherà ai servizi di Google secondo la relativa informativa.":
      "La carte est fournie par Google. Son chargement connecte le navigateur aux services Google selon leur politique.",
    "Compila i dettagli essenziali: prepareremo un messaggio ordinato da inviare a Tra Lago e Cielo. Per ora l'invio utilizza il programma e-mail del dispositivo.":
      "Renseignez les informations essentielles et nous préparerons un message structuré pour Tra Lago e Cielo. Pour l'instant, il est envoyé via l'application e-mail de l'appareil.",
    "Ho letto l'informativa privacy e acconsento all'uso dei dati per rispondere alla richiesta.":
      "J'ai lu la politique de confidentialité et j'accepte l'utilisation de mes données pour répondre à cette demande.",
    "Es. giugno 2027": "Ex. juin 2027",
    "Es. 80": "Ex. 80",
    "Aggiungi ciò che può aiutarci a capire la richiesta.":
      "Ajoutez tout détail utile pour comprendre votre demande.",
  },
  de: {
    "Un solo matrimonio al giorno, per vivere gli spazi con maggiore libertà.":
      "Nur eine Hochzeit pro Tag, damit die Räume frei genutzt werden können.",
    "Salone, terrazza, piscina e giardino permettono di adattare la giornata.":
      "Saal, Terrasse, Pool und Garten ermöglichen eine flexible Gestaltung des Tages.",
    "Visite su prenotazione per verificare spazi, disponibilità e servizi.":
      "Besichtigungen nach Terminvereinbarung zu Räumen, Verfügbarkeit und Leistungen.",
    "La capienza indicata per il salone è fino a 110 persone. Per configurazioni, allestimenti e servizi è consigliato un sopralluogo.":
      "Die angegebene Saalkapazität beträgt bis zu 110 Personen. Für Bestuhlung, Gestaltung und Leistungen wird eine Besichtigung empfohlen.",
    "La struttura indica la possibilità di rito civile reale in villa con cerimoniere comunale. Disponibilità e procedure vanno confermate per la data scelta.":
      "Der Veranstaltungsort nennt die Möglichkeit einer offiziellen standesamtlichen Trauung mit kommunaler Begleitung. Verfügbarkeit und Ablauf sind für den Termin zu bestätigen.",
    "È previsto un solo matrimonio al giorno, così da dedicare gli spazi all'evento.":
      "Pro Tag ist nur eine Hochzeit vorgesehen, sodass die Räume der Veranstaltung vorbehalten sind.",
    "Il salone offre uno spazio interno. La soluzione più adatta dipende dal numero degli ospiti e dall'allestimento, da definire direttamente con la struttura.":
      "Der Saal bietet einen Innenraum. Die passende Lösung hängt von Gästezahl und Gestaltung ab und wird direkt mit dem Veranstaltungsort abgestimmt.",
    "È possibile inviare una richiesta dalla pagina Contatti oppure chiamare il 328 8989566.":
      "Senden Sie eine Anfrage über die Kontaktseite oder rufen Sie +39 328 8989566 an.",
    "La mappa è fornita da Google. Caricandola, il browser si collegherà ai servizi di Google secondo la relativa informativa.":
      "Die Karte wird von Google bereitgestellt. Beim Laden verbindet sich der Browser gemäß der Google-Richtlinie mit Google-Diensten.",
    "Compila i dettagli essenziali: prepareremo un messaggio ordinato da inviare a Tra Lago e Cielo. Per ora l'invio utilizza il programma e-mail del dispositivo.":
      "Tragen Sie die wichtigsten Angaben ein; daraus wird eine strukturierte Nachricht an Tra Lago e Cielo erstellt. Der Versand erfolgt derzeit über die E-Mail-App des Geräts.",
    "Ho letto l'informativa privacy e acconsento all'uso dei dati per rispondere alla richiesta.":
      "Ich habe die Datenschutzerklärung gelesen und stimme der Nutzung meiner Daten zur Beantwortung dieser Anfrage zu.",
    "Es. giugno 2027": "Z. B. Juni 2027",
    "Es. 80": "Z. B. 80",
    "Aggiungi ciò che può aiutarci a capire la richiesta.":
      "Fügen Sie Angaben hinzu, die uns helfen, Ihre Anfrage zu verstehen.",
  },
};
Object.keys(V19_LONG_I18N).forEach((lang) =>
  Object.assign(I18N[lang] || {}, V19_LONG_I18N[lang]),
);
const V19_FRAGMENT_I18N = {
  en: {
    "Ho letto l'": "I have read the",
    "informativa privacy": "privacy notice",
    "e acconsento all'uso dei dati per rispondere alla richiesta.":
      "and agree to the use of my data to answer this enquiry.",
    "Es. giugno 2027": "E.g. June 2027",
    "Es. 80": "E.g. 80",
    "Aggiungi ciò che può aiutarci a capire la richiesta.":
      "Add anything that may help us understand your enquiry.",
    "Tra Lago e Cielo, agriturismo e tenuta per matrimoni, eventi privati, degustazioni e cerimonie con vista sul Lago di Bracciano.":
      "Tra Lago e Cielo, an agriturismo and estate for weddings, private events, tastings and ceremonies overlooking Lake Bracciano.",
  },
  es: {
    "Ho letto l'": "He leído la",
    "informativa privacy": "política de privacidad",
    "e acconsento all'uso dei dati per rispondere alla richiesta.":
      "y acepto el uso de mis datos para responder a esta solicitud.",
    "Tra Lago e Cielo, agriturismo e tenuta per matrimoni, eventi privati, degustazioni e cerimonie con vista sul Lago di Bracciano.":
      "Tra Lago e Cielo, agroturismo y finca para bodas, eventos privados, degustaciones y ceremonias con vistas al Lago de Bracciano.",
  },
  fr: {
    "Ho letto l'": "J'ai lu la",
    "informativa privacy": "politique de confidentialité",
    "e acconsento all'uso dei dati per rispondere alla richiesta.":
      "et j'accepte l'utilisation de mes données pour répondre à cette demande.",
    "Tra Lago e Cielo, agriturismo e tenuta per matrimoni, eventi privati, degustazioni e cerimonie con vista sul Lago di Bracciano.":
      "Tra Lago e Cielo, agritourisme et domaine pour mariages, événements privés, dégustations et cérémonies avec vue sur le lac de Bracciano.",
  },
  de: {
    "Ho letto l'": "Ich habe die",
    "informativa privacy": "Datenschutzerklärung",
    "e acconsento all'uso dei dati per rispondere alla richiesta.":
      "gelesen und stimme der Nutzung meiner Daten zur Beantwortung dieser Anfrage zu.",
    "Tra Lago e Cielo, agriturismo e tenuta per matrimoni, eventi privati, degustazioni e cerimonie con vista sul Lago di Bracciano.":
      "Tra Lago e Cielo, Agriturismo und Anwesen für Hochzeiten, private Veranstaltungen, Verkostungen und Zeremonien mit Blick auf den Bracciano-See.",
  },
};
Object.keys(V19_FRAGMENT_I18N).forEach((lang) =>
  Object.assign(I18N[lang] || {}, V19_FRAGMENT_I18N[lang]),
);

function collectI18nSources() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (["SCRIPT", "STYLE"].includes(node.parentElement?.tagName))
          return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    },
  );
  while (walker.nextNode())
    originalTextNodes.push({
      node: walker.currentNode,
      source: walker.currentNode.nodeValue,
    });
  document
    .querySelectorAll("[aria-label],img[alt],[title],[placeholder]")
    .forEach((el) => {
      ["aria-label", "alt", "title", "placeholder"].forEach((attr) => {
        if (el.hasAttribute(attr))
          originalAttrs.push({ el, attr, source: el.getAttribute(attr) });
      });
    });
}
function applyLanguage(lang) {
  currentLang = LANG_META[lang] ? lang : "it";
  localStorage.setItem("tlec-language", currentLang);
  document.documentElement.lang = LANG_META[currentLang].html;
  originalTextNodes.forEach((item) => {
    const lead = item.source.match(/^\s*/)[0],
      trail = item.source.match(/\s*$/)[0],
      core = item.source.trim();
    item.node.nodeValue = lead + translated(core) + trail;
  });
  originalAttrs.forEach((item) =>
    item.el.setAttribute(item.attr, translated(item.source)),
  );
  document
    .querySelectorAll("[data-current-lang-code]")
    .forEach((el) => (el.textContent = LANG_META[currentLang].code));
  document.querySelectorAll("[data-current-lang-flag]").forEach((el) => {
    el.className = "lang-flag flag-icon " + LANG_META[currentLang].flagClass;
    el.setAttribute("aria-hidden", "true");
  });
  document
    .querySelectorAll("[data-lang-option]")
    .forEach((btn) =>
      btn.setAttribute(
        "aria-checked",
        btn.dataset.langOption === currentLang ? "true" : "false",
      ),
    );
  document
    .querySelectorAll("[data-lang-toggle]")
    .forEach((btn) =>
      btn.setAttribute("aria-label", translated("Seleziona lingua")),
    );
  document
    .querySelectorAll("[data-i18n-carousel-dot]")
    .forEach((dot) =>
      dot.setAttribute(
        "aria-label",
        translated(`Vai all'immagine ${dot.dataset.i18nCarouselDot}`),
      ),
    );
  menuToggle?.setAttribute(
    "aria-label",
    mobileMenu.classList.contains("is-open")
      ? translated("Chiudi menu")
      : translated("Apri menu"),
  );
  updatePageMetadata(currentPage());
  if (wineModal?.classList.contains("is-open") && activeWineKey)
    openWine(activeWineKey, true);
}
function closeLanguageMenus() {
  document.querySelectorAll("[data-language-switcher]").forEach((sw) => {
    sw.classList.remove("is-open");
    sw.querySelector("[data-lang-toggle]")?.setAttribute(
      "aria-expanded",
      "false",
    );
  });
}

const wines = {
  vermentino: {
    title: "Vermentino",
    wineName: "Sabatino",
    classification: "Vino Vermentino IGP",
    producer: "Azienda Agricola Rosalba Cutolo",
    experience:
      "Etichetta 2024 prodotta e imbottigliata da Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.",
  },
  merlot: {
    title: "Merlot",
    wineName: "Nero Fonte Lupo",
    classification: "Vino Merlot IGP",
    producer: "Azienda Agricola Rosalba Cutolo",
    experience:
      "Etichetta 2024 prodotta e imbottigliata da Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.",
  },
  chardonnay: {
    title: "Chardonnay",
    wineName: "Riflesso del Lago",
    classification: "Vino Chardonnay IGP",
    producer: "Azienda Agricola Rosalba Cutolo",
    experience:
      "Etichetta 2024 prodotta e imbottigliata da Azienda Agricola Rosalba Cutolo, Tarquinia, Viterbo.",
  },
};
function currentPage() {
  return document.querySelector(".page.is-active")?.dataset.page || "home";
}
const PAGE_SLUGS = {
  home: "",
  agriturismo: "agriturismo/",
  matrimoni: "matrimoni/",
  vino: "vini/",
  contatti: "contatti/",
};
const PAGE_LABELS = {
  home: "Home",
  agriturismo: "Agriturismo",
  matrimoni: "Matrimoni",
  vino: "Produzione vini",
  contatti: "Contatti",
};
const PAGE_DESCRIPTIONS = {
  home: "Tra Lago e Cielo, agriturismo e tenuta per matrimoni, eventi privati, degustazioni e cerimonie con vista sul Lago di Bracciano.",
  agriturismo:
    "Vista lago, giardino, piscina e salone raccolti in un percorso essenziale, per capire il carattere del luogo prima di visitarlo.",
  matrimoni:
    "Cerimonie civili reali in villa, aperitivi all'aperto, momenti conviviali nel salone e ricevimenti con vista sul lago.",
  vino: "Vermentino, Merlot e Chardonnay presentati con origine, annata e informazioni essenziali in modo chiaro.",
  contatti:
    "Recapiti, social e mappa per richiedere informazioni, prenotare una visita o raggiungere la struttura.",
};
function pageFromLocation() {
  const hashPage = normalizedPageId(location.hash.replace(/^#/, ""));
  if (pages.some((page) => page.dataset.page === hashPage)) return hashPage;
  const path = location.pathname.replace(/\/+$/, "").split("/").pop() || "";
  return (
    Object.entries(PAGE_SLUGS).find(([, slug]) =>
      slug ? slug.replace(/\/$/, "") === path : path === "",
    )?.[0] || "home"
  );
}
function updatePageMetadata(pageId) {
  const id = PAGE_SLUGS[pageId] !== undefined ? pageId : "home";
  const label = translated(PAGE_LABELS[id]);
  const title =
    id === "home"
      ? LANG_META[currentLang].title
      : `${label} | Tra Lago e Cielo`;
  const description = translated(PAGE_DESCRIPTIONS[id]);
  const canonicalUrl = `https://tralagoecielo.it/${PAGE_SLUGS[id]}`;
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", title);
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", description);
  document
    .querySelector('meta[property="og:url"]')
    ?.setAttribute("content", canonicalUrl);
  document
    .querySelector('meta[name="twitter:title"]')
    ?.setAttribute("content", title);
  document
    .querySelector('meta[name="twitter:description"]')
    ?.setAttribute("content", description);
  document
    .querySelector('link[rel="canonical"]')
    ?.setAttribute("href", canonicalUrl);
}
function normalizedPageId(id) {
  return ["paesaggio", "video", "galleria"].includes(id)
    ? "agriturismo"
    : id === "dove-siamo"
      ? "contatti"
      : id;
}
let headerScrolled = null;
function setHeaderState(knownScrollY = null) {
  const scrolled = (knownScrollY ?? window.scrollY) > 18;
  if (scrolled === headerScrolled) return;
  headerScrolled = scrolled;
  header?.classList.toggle("is-scrolled", scrolled);
}
function closeMenu() {
  document.body.classList.remove("is-locked");
  mobileMenu.classList.remove("is-open");
  mobileMenu.setAttribute("aria-hidden", "true");
  mobileMenu.inert = true;
  header.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", translated("Apri menu"));
  main.inert = false;
  menuLastFocus?.focus?.();
}
function openMenu() {
  menuLastFocus = document.activeElement;
  document.body.classList.add("is-locked");
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  mobileMenu.inert = false;
  header.classList.add("is-open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", translated("Chiudi menu"));
  main.inert = true;
  requestAnimationFrame(() => mobileMenu.querySelector("a, button")?.focus());
}
function showPage(id, push = true, targetUrl = null) {
  const targetId = normalizedPageId(id);
  const next = pages.find((p) => p.dataset.page === targetId) || pages[0];
  if (push && next.dataset.page === currentPage()) {
    if (targetUrl && new URL(targetUrl, location.href).hash === "#richiesta") {
      document.getElementById("richiesta")?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
    closeMenu();
    return;
  }
  pages.forEach((page) => {
    const isTarget = page === next;
    page.classList.toggle("is-active", isTarget);
    page.toggleAttribute("hidden", !isTarget);
  });
  pageLinks.forEach((link) => {
    const active =
      normalizedPageId(link.dataset.pageLink) === next.dataset.page;
    link.classList.toggle("is-active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  closeMenu();
  if (next.dataset.page === "agriturismo") {
    carouselIndex = 0;
    updateCarousel();
  }
  const destination =
    targetUrl || new URL(PAGE_SLUGS[next.dataset.page], document.baseURI).href;
  if (push) history.pushState({ page: next.dataset.page }, "", destination);
  const anchor = new URL(destination, location.href).hash;
  if (anchor === "#richiesta") {
    requestAnimationFrame(() =>
      document.getElementById("richiesta")?.scrollIntoView(),
    );
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  updatePageMetadata(next.dataset.page);
  setHeaderState(0);
  requestAnimationFrame(() => main?.focus({ preventScroll: true }));
}
function updateCarousel() {
  if (!carouselTrack || !carouselSlides.length) return;
  carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
  if (carouselCount)
    carouselCount.textContent = `${String(carouselIndex + 1).padStart(2, "0")} / ${String(carouselSlides.length).padStart(2, "0")}`;
  carouselSlides.forEach((slide, index) =>
    slide.classList.toggle("is-active", index === carouselIndex),
  );
  carouselDots?.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    const active = index === carouselIndex;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-current", active ? "true" : "false");
  });
}
function moveCarousel(direction) {
  if (!carouselSlides.length) return;
  carouselIndex =
    (carouselIndex + direction + carouselSlides.length) % carouselSlides.length;
  updateCarousel();
}
if (carouselDots && carouselSlides.length) {
  carouselSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot";
    dot.setAttribute("data-i18n-carousel-dot", String(index + 1));
    dot.setAttribute("aria-label", translated(`Vai all'immagine ${index + 1}`));
    dot.addEventListener("click", () => {
      carouselIndex = index;
      updateCarousel();
    });
    carouselDots.appendChild(dot);
  });
  carouselPrev?.addEventListener("click", () => moveCarousel(-1));
  carouselNext?.addEventListener("click", () => moveCarousel(1));
  updateCarousel();
}
document
  .querySelector("[data-carousel]")
  ?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") moveCarousel(-1);
    if (event.key === "ArrowRight") moveCarousel(1);
  });
document.querySelector(".carousel-stage")?.addEventListener(
  "touchstart",
  (event) => {
    carouselTouchStartX = event.changedTouches[0].clientX;
    carouselTouchStartY = event.changedTouches[0].clientY;
  },
  { passive: true },
);
document.querySelector(".carousel-stage")?.addEventListener(
  "touchend",
  (event) => {
    const dx = event.changedTouches[0].clientX - carouselTouchStartX;
    const dy = event.changedTouches[0].clientY - carouselTouchStartY;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.4)
      moveCarousel(dx < 0 ? 1 : -1);
  },
  { passive: true },
);
function openVideo() {
  if (!videoModal || !videoFrame) return;
  lastFocus = document.activeElement;
  videoFrame.innerHTML = `<iframe src='https://www.youtube-nocookie.com/embed/_mcQXXFZLag?autoplay=1&rel=0&modestbranding=1&playsinline=1' title='Tra Lago e Cielo video' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>`;
  videoModal.classList.add("is-open");
  videoModal.setAttribute("aria-hidden", "false");
  videoModal.inert = false;
  document.body.classList.add("is-locked");
  main.inert = true;
  header.inert = true;
  closeVideoButton?.focus();
}
function closeVideo() {
  if (!videoModal || !videoFrame) return;
  videoModal.classList.remove("is-open");
  videoModal.setAttribute("aria-hidden", "true");
  videoModal.inert = true;
  videoFrame.innerHTML = "";
  document.body.classList.remove("is-locked");
  main.inert = false;
  header.inert = false;
  lastFocus?.focus?.();
}
function openWine(key) {
  const wine = wines[key];
  if (!wine) return;
  lastFocus = document.activeElement;
  wineModal.querySelector("[data-wine-class]").textContent =
    wine.classification;
  wineModal.querySelector("[data-wine-title]").textContent = wine.title;
  wineModal.querySelector("[data-wine-name]").textContent = wine.wineName;
  wineModal.querySelector("[data-wine-heading]").textContent =
    wine.title + " · Annata 2024";
  wineModal.querySelector("[data-wine-experience]").textContent =
    wine.experience ||
    "Un’etichetta della tenuta, pensata per degustazioni e momenti conviviali.";
  if (wineLabel) wineLabel.className = "wine-label is-" + key;
  const modalBottle = wineModal.querySelector("[data-wine-bottle]");
  if (modalBottle) modalBottle.className = "wine-modal-bottle is-" + key;
  wineModal.querySelector("[data-wine-details]").innerHTML = [
    ["Nome", wine.wineName],
    ["Categoria", wine.classification],
    ["Annata", "2024"],
    ["Produttore", wine.producer],
  ]
    .map(
      (item) =>
        `<div class='detail'><span>${item[0]}</span><strong>${item[1]}</strong></div>`,
    )
    .join("");
  wineModal.classList.add("is-open");
  wineModal.setAttribute("aria-hidden", "false");
  wineModal.inert = false;
  document.body.classList.add("is-locked");
  main.inert = true;
  header.inert = true;
  closeWine.focus();
}
function closeWineModal() {
  wineModal.classList.remove("is-open");
  wineModal.setAttribute("aria-hidden", "true");
  wineModal.inert = true;
  document.body.classList.remove("is-locked");
  main.inert = false;
  header.inert = false;
  lastFocus?.focus?.();
}
pageLinks.forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(link.dataset.pageLink, true, link.href);
  }),
);
openVideoButtons.forEach((button) =>
  button.addEventListener("click", openVideo),
);
closeVideoButton?.addEventListener("click", closeVideo);
videoModal?.addEventListener("click", (event) => {
  if (event.target === videoModal) closeVideo();
});
mapActivate?.addEventListener("click", () => {
  if (!mapFrame?.dataset.mapSrc) return;
  const iframe = document.createElement("iframe");
  iframe.title = translated("Mappa Tra Lago e Cielo");
  iframe.loading = "lazy";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.src = mapFrame.dataset.mapSrc;
  mapFrame.replaceChildren(iframe);
  mapFrame.classList.add("is-interactive");
});
enquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!enquiryForm.reportValidity()) return;
  const data = new FormData(enquiryForm);
  const subject = `Richiesta ${data.get("type")} - Tra Lago e Cielo`;
  const body = [
    `Tipo di richiesta: ${data.get("type")}`,
    `Data o periodo: ${data.get("date") || "Non indicato"}`,
    `Nome: ${data.get("name")}`,
    `Ospiti: ${data.get("guests") || "Non indicato"}`,
    `E-mail: ${data.get("email")}`,
    `Telefono: ${data.get("phone") || "Non indicato"}`,
    "",
    String(data.get("message") || ""),
  ].join("\n");
  if (formStatus)
    formStatus.textContent = translated(
      "Apertura del programma e-mail in corso…",
    );
  location.href = `mailto:info@tralagoecielo.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
document
  .querySelectorAll("[data-wine]")
  .forEach((button) =>
    button.addEventListener("click", () => openWine(button.dataset.wine)),
  );
menuToggle.addEventListener("click", () =>
  menuToggle.getAttribute("aria-expanded") === "true"
    ? closeMenu()
    : openMenu(),
);
closeWine.addEventListener("click", closeWineModal);
wineModal.addEventListener("click", (event) => {
  if (event.target === wineModal) closeWineModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (videoModal?.classList.contains("is-open")) closeVideo();
    else if (wineModal.classList.contains("is-open")) closeWineModal();
    else if (mobileMenu.classList.contains("is-open")) closeMenu();
  }
  if (event.key === "Tab" && videoModal?.classList.contains("is-open")) {
    const focusable = Array.from(
      videoModal.querySelectorAll("a[href], button:not([disabled]), iframe"),
    );
    if (!focusable.length) return;
    const first = focusable[0],
      last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  if (event.key === "Tab" && wineModal.classList.contains("is-open")) {
    const focusable = Array.from(
      wineDialog.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    if (!focusable.length) return;
    const first = focusable[0],
      last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
  if (event.key === "Tab" && mobileMenu.classList.contains("is-open")) {
    const focusable = [
      menuToggle,
      ...Array.from(
        mobileMenu.querySelectorAll("a[href], button:not([disabled])"),
      ),
    ];
    if (!focusable.length) return;
    const first = focusable[0],
      last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
window.addEventListener("scroll", () => setHeaderState(), { passive: true });
window.addEventListener("popstate", () => showPage(pageFromLocation(), false));
pages.forEach((page) =>
  page.toggleAttribute("hidden", !page.classList.contains("is-active")),
);
showPage(pageFromLocation(), false, location.href);
setHeaderState(0);

/* v14 language behaviour */
document.querySelectorAll("[data-language-switcher]").forEach((sw) => {
  const toggle = sw.querySelector("[data-lang-toggle]");
  toggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = sw.classList.contains("is-open");
    closeLanguageMenus();
    sw.classList.toggle("is-open", !open);
    toggle.setAttribute("aria-expanded", !open ? "true" : "false");
  });
  sw.querySelectorAll("[data-lang-option]").forEach((btn) =>
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      applyLanguage(btn.dataset.langOption);
      closeLanguageMenus();
    }),
  );
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("[data-language-switcher]")) closeLanguageMenus();
});
const originalOpenWine = openWine;
openWine = function (key, rerenderOnly = false) {
  activeWineKey = key;
  originalOpenWine(key);
  wineModal.querySelector("[data-wine-class]").textContent = translated(
    wines[key]?.classification || "",
  );
  wineModal.querySelector("[data-wine-heading]").textContent =
    (wines[key]?.title || "") + " · " + translated("Annata 2024");
  wineModal.querySelector("[data-wine-experience]").textContent = translated(
    wines[key]?.experience || "",
  );
  wineModal.querySelector("[data-wine-details]").innerHTML = [
    [translated("Nome"), wines[key].wineName],
    [translated("Categoria"), translated(wines[key].classification)],
    [translated("Annata"), "2024"],
    [translated("Produttore"), wines[key].producer],
  ]
    .map(
      (item) =>
        `<div class='detail'><span>${item[0]}</span><strong>${item[1]}</strong></div>`,
    )
    .join("");
  if (rerenderOnly) {
    wineModal.classList.add("is-open");
  }
};
collectI18nSources();
applyLanguage(currentLang);
