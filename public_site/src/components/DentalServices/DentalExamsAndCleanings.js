import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DentalServices.css';

function DentalExamsAndCleaningsPage() {
  return (
    <div className="page-container">
      <div className="info-card">
        <h2>Esami e Pulizie Dentali</h2>
        <p>Garantire la salute dei tuoi denti e gengive è la nostra massima priorità. <br></br>I nostri esami e pulizie dentali completi sono progettati per prevenire problemi dentali prima che si manifestino e mantenere un'ottima salute orale. 
          <br></br><br></br>Di seguito alcuni dei principali servizi che offriamo</p>
      </div>
      
      <div className="grid-container">
        {/* Otturazione Composita */}
        <div className="grid-item">
          <h4>Otturazione Composita</h4>
          <p>Perfetta per trattare picarie e decadimenti dentali minori, le nostre otturazioni composite non solo ripristinano i tuoi denti ma si abbinano anche al loro colore naturale, garantendo un risultato estetico e senza soluzione di continuità.</p>
          <ul>
            <li>Prezzo Otturazione Composita - €30</li>
          </ul>
        </div>

        {/* Trattamento del Canale Radicolare */}
        <div className="grid-item">
          <h4>Trattamento del Canale Radicolare</h4>
          <p>Per denti con carie grave o infezione, è spesso necessario un trattamento del canale radicolare. Il nostro team di esperti garantisce una procedura confortevole ed efficiente.</p>
          <ul>
            <li>Dente Monoradicolare - €30</li>
            <li>Dente Multiradicolare (prezzo per canale) - €30</li>
          </ul>
        </div>

        {/* Esami e Controlli Dentali */}
        <div className="grid-item">
          <h4>Esami e Controlli Dentali - Prezzi Personalizzati</h4>
          <p>Gli esami dentali di routine sono fondamentali per mantenere la salute orale. Forniamo controlli approfonditi per valutare la tua salute orale generale, identificare eventuali problemi e consigliare il miglior corso di azione.</p>
        </div>

        {/* Pulizia Professionale dei Denti */}
        <div className="grid-item">
          <h4>Pulizia Professionale dei Denti - Prezzi Personalizzati</h4>
          <p>Il nostro servizio di pulizia professionale dei denti rimuove la placca e il tartaro accumulati, 
          lucida i tuoi denti e fornisce consigli su come mantenere l'igiene orale per mantenere il tuo sorriso luminoso e sano.</p>
        </div>
      </div>

      {/* Nota */}
      <p className="note">Nota: I prezzi sono soggetti a cambiamenti e possono variare in base alle specifiche esigenze del trattamento. 
      Si prega di contattarci per una consulenza dettagliata e una quotazione precisa.</p>
    </div>
  );
}

export default DentalExamsAndCleaningsPage;
