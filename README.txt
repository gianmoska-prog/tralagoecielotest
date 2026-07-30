Tra Lago e Cielo premium prototype package v4

Open index.html in a browser. The package is self-contained for local preview except for Google Fonts, Google Maps, and the YouTube video modal.

Patch v4 health-check fixes:
- corrected local image dimensions in HTML
- converted the hero logo from PNG to smaller transparent WebP
- confirmed all local asset paths resolve correctly
- added early no-js/js class handling plus a no-JS fallback
- removed duplicate page-in keyframe definition
- consolidated the repeated root token block
- added a specific top-offset rule for the Contatti page under the fixed header
- added strict-origin referrer policy to the injected YouTube iframe
- kept the stable page visibility system intact to avoid reintroducing the previous blank-space bug

Known external dependencies:
- Google Fonts
- Google Maps iframe
- YouTube iframe injected on video play

For final production, confirm image rights and replace any placeholder/generated crops with the owner’s best photography.


Versione v6: contatti e mappa unificati in una sola pagina, rimosso il popup contatti, affinata la palette della scheda vino e corretta la gerarchia tipografica del titolo nel pannello etichetta.

Versione v7: rimosso il bottone ridondante “Richiedi informazioni” dall’header; aggiunto al contenuto Produzione vini un pannello elegante con origine, produttore, sede indicata e consumo responsabile.

Versione v8: Paesaggio, Video e Galleria sono stati unificati nella nuova sezione Agriturismo; Matrimoni segue Agriturismo; la scheda origine vini è stata riorganizzata con Made in Italy su riga ampia e bandiera italiana discreta.

Versione v9: logo principale sostituito con asset SVG locale (assets/img/logo-tra-lago-e-cielo.svg); rimosso il precedente logo WebP non più referenziato.

Versione v10: ridotto e riequilibrato il logo nella hero, uniformato il colore SVG al tono ivory del sito e ammorbiditi ombra, testo e CTA della home.
Versione v16:
- Esteso il sistema multilingua a copertura completa per Italiano, English, Español, Français e Deutsch.
- Tradotte le stringhe visibili, le etichette aria, gli alt delle immagini, le etichette dinamiche del modal vini e le label generate del carosello.
- Conservati intenzionalmente nomi propri, indirizzi, numeri, etichette dei vini e nomi delle lingue.


Versione v17: integrate fotografie fornite dall'archivio del sito originale. Banner vino mantenuto invariato (barili) come richiesto. Immagini selezionate per home, agriturismo, matrimoni, contatti, carosello e mood strip. Asset inutilizzati rimossi dopo tracciamento riferimenti.

Versione v19: passaggio da prototipo a pacchetto production-oriented. Corretto il menu responsive; aggiunti CTA, form guidato, FAQ, pagine legali, route reali, metadata social/SEO, sitemap, robots, 404, font locali, social card, privacy gating per Maps/YouTube, traduzioni e accessibilità complete. Vedere CHANGELOG-v19.md per verifiche e conferme richieste al proprietario.
