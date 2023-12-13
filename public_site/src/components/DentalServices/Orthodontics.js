import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DentalServices.css';


function OrthodonticsPage() {
  return (
    <div className="page-container">
      <div className="info-card">
        <h2>Ortodonzia</h2>
        <p>I nostri servizi ortodontici sono dedicati al miglioramento dell'allineamento dei denti e della chiusura, migliorando sia la funzione orale che l'estetica. Offriamo una gamma di soluzioni, inclusi apparecchi ortodontici tradizionali e moderni allineatori trasparenti, personalizzati per soddisfare le esigenze individuali dei nostri pazienti.</p>
      </div>
      
      <div className="grid-container">
        {/* Apparecchi Ortodontici Tradizionali */}
        <div className="grid-item">
          <h4>Apparecchi Ortodontici Tradizionali</h4>
          <p>Gli apparecchi ortodontici tradizionali sono un metodo collaudato nel tempo per correggere l'allineamento dei denti e i problemi di chiusura. Sono adatti a pazienti di tutte le età e possono gestire una vasta gamma di esigenze ortodontiche.</p>
          <ul>
            <li>Prezzo degli Apparecchi Ortodontici Tradizionali - Prezzi Personalizzati</li>
          </ul>
        </div>

        {/* Allineatori Trasparenti */}
        <div className="grid-item">
          <h4>Allineatori Trasparenti</h4>
          <p>Gli allineatori trasparenti offrono un modo discreto e confortevole per raddrizzare i denti. Sono realizzati su misura, rimovibili e ideali per coloro che preferiscono un trattamento ortodontico meno evidente.</p>
          <ul>
            <li>Prezzo degli Allineatori Trasparenti - Prezzi Personalizzati</li>
          </ul>
        </div>

        {/* Altri Trattamenti Ortodontici */}
        {/* Aggiungi qui altri grid-item per altri servizi ortodontici che offri */}

      </div>

      {/* Nota */}
      <p className="note">Nota: I prezzi sono soggetti a cambiamenti e possono variare in base alle specifiche esigenze del trattamento. Si prega di contattarci per una consulenza dettagliata e una quotazione precisa.</p>
    </div>
  );
}

export default OrthodonticsPage;
