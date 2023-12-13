import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DentalServices.css';

function DentalImplantsPage() {
  return (
    <div className="page-container">
      <div className="info-card">
        <h2>Impianti Dentali</h2>
        <p>Gli impianti dentali offrono una soluzione permanente per i denti mancanti, garantendo sia funzionalità che estetica. Sono progettati per integrarsi perfettamente con i tuoi denti naturali, migliorando il tuo sorriso e la tua salute orale.</p>
      </div>
      
      <div className="grid-container">
        {/* Impianto Dentale */}
        <div className="grid-item">
          <h4>Impianto Dentale</h4>
          <p>Una soluzione permanente per i denti mancanti, gli impianti dentali sono chirurgicamente inseriti nell'osso della mascella per imitare la radice di un dente.</p>
          <ul>
            <li>Prezzo dell'Impianto Dentale - Prezzi Personalizzati</li>
          </ul>
        </div>

        {/* Moncone */}
        <div className="grid-item">
          <h4>Moncone</h4>
          <p>Componente cruciale degli impianti dentali, il moncone collega l'impianto alla corona, garantendo una vestibilità sicura.</p>
          <ul>
            <li>Prezzo del Moncone - Prezzi Personalizzati</li>
          </ul>
        </div>

        {/* Rigenerazione Ossea con Rialzo del Seno Mascellare */}
        <div className="grid-item">
          <h4>Rigenerazione Ossea con Rialzo del Seno Mascellare</h4>
          <p>Questa procedura prevede il sollevamento del pavimento del seno per consentire la formazione di nuovo osso, fornendo un supporto sufficiente per gli impianti dentali.</p>
          <ul>
            <li>Prezzo del Rialzo del Seno Mascellare - Prezzi Personalizzati</li>
          </ul>
        </div>
      </div>

      {/* Nota */}
      <p className="note">Nota: I prezzi sono soggetti a cambiamenti e possono variare in base alle specifiche esigenze del trattamento. Si prega di contattarci per una consulenza dettagliata e una quotazione precisa.</p>
    </div>
  );
}

export default DentalImplantsPage;
