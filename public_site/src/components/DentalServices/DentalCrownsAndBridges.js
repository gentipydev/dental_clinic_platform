import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DentalServices.css';

function DentalCrownsAndBridgesPage() {
  return (
    <div className="page-container">
      <div className="info-card">
        <h2>Corone e Ponti Dentali</h2>
        <p>Ripristinare la funzionalità e l'aspetto dei tuoi denti è essenziale per un sorriso sano. Le nostre corone e ponti dentali sono realizzati per fornire durata e un aspetto naturale. Sono soluzioni ideali per denti danneggiati o mancanti.</p>
      </div>
      
      <div className="grid-container">
        {/* Ricostruzione Composita */}
        <div className="grid-item">
          <h4>Ricostruzione Composita</h4>
          <p>Ricostruzione estetica e funzionale di denti danneggiati usando materiali compositi di alta qualità.</p>
          <ul>
            <li>Prezzo della Ricostruzione Composita - Prezzi Personalizzati</li>
          </ul>
        </div>

        {/* Ricostruzione con Perno */}
        <div className="grid-item">
          <h4>Ricostruzione con Perno</h4>
          <p>Ricostruzione di un dente dalla radice in su, spesso necessaria dopo un marcato degrado o danno.</p>
          <ul>
            <li>Prezzo della Ricostruzione con Perno - Prezzi Personalizzati</li>
          </ul>
        </div>

        {/* Corona Metallo-Ceramica */}
        <div className="grid-item">
          <h4>Corona Metallo-Ceramica</h4>
          <p>Corone durature ed estetiche che combinano la forza del metallo con l'aspetto naturale della ceramica.</p>
          <ul>
            <li>Prezzo della Corona Metallo-Ceramica - Prezzi Personalizzati</li>
          </ul>
        </div>

        {/* Corona di Zirconia */}
        <div className="grid-item">
          <h4>Corona di Zirconia</h4>
          <p>Corone di alta qualità e resistenti realizzate in zirconia, note per la loro durabilità e aspetto naturale.</p>
          <ul>
            <li>Prezzo della Corona di Zirconia - Prezzi Personalizzati</li>
          </ul>
        </div>

        {/* Faccetta E-max® */}
        <div className="grid-item">
          <h4>Faccetta E-max®</h4>
          <p>Faccette sottili di altissima qualità per un miglioramento estetico dell'aspetto dei tuoi denti.</p>
          <ul>
            <li>Prezzo della Faccetta E-max® - Prezzi Personalizzati</li>
          </ul>
        </div>
      </div>

      {/* Nota */}
      <p className="note">Nota: I prezzi sono soggetti a modifiche e possono variare in base alle specifiche esigenze del trattamento. Si prega di contattarci per una consulenza dettagliata e una quotazione precisa.</p>
    </div>
  );
}

export default DentalCrownsAndBridgesPage;
