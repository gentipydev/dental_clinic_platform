import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DentalServices.css';

function TeethWhiteningPage() {
  return (
    <div className="page-container">
      <div className="info-card">
        <h2>Sbiancamento dei Denti</h2>
        <p>Rivitalizza il tuo sorriso con il nostro servizio professionale di sbiancamento dei denti con laser. Questo trattamento sicuro ed efficace può schiarire significativamente i tuoi denti, rimuovendo macchie e decolorazioni per un sorriso più radioso e pieno di fiducia.</p>
      </div>
      
      <div className="grid-container">
        {/* Sbiancamento Professionale dei Denti con Laser */}
        <div className="grid-item">
          <h4>Sbiancamento Professionale dei Denti con Laser</h4>
          <p>La nostra tecnologia laser all'avanguardia fornisce risultati rapidi e notevoli, garantendo un'esperienza confortevole e senza dolore. La procedura è personalizzata in base alle tue esigenze individuali, fornendo un bianco consistente e duraturo.</p>
          <ul>
            <li>Prezzo dello Sbiancamento dei Denti con Laser - Prezzi Personalizzati</li>
          </ul>
        </div>
      </div>

      {/* Nota */}
      <p className="note">Nota: I prezzi sono soggetti a cambiamenti e possono variare in base alle specifiche esigenze del trattamento. Si prega di contattarci per una consulenza dettagliata e una quotazione precisa.</p>
    </div>
  );
}

export default TeethWhiteningPage;

