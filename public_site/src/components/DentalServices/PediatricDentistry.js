import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DentalServices.css';

function PediatricDentistryPage() {
  return (
    <div className="page-container">
      <div className="info-card">
        <h2>Odontoiatria Pediatrica</h2>
        <p>Nella nostra clinica, forniamo cure dentali specializzate per i nostri piccoli pazienti. I nostri servizi di odontoiatria pediatrica sono adattati alle esigenze uniche dei bambini e degli adolescenti, garantendo un'esperienza dentale confortevole e positiva.</p>
      </div>
      
      <div className="grid-container">
        {/* Esami e Pulizie Dentali Adatti ai Bambini */}
        <div className="grid-item">
          <h4>Esami e Pulizie Dentali Adatti ai Bambini</h4>
          <p>Gli esami e le pulizie dentali regolari sono essenziali per i bambini per mantenere denti e gengive sani. Il nostro approccio è delicato e divertente, assicurandoci che i giovani pazienti si sentano a proprio agio.</p>
          <ul>
            <li>Prezzo Esame Dentale per Bambini - Prezzi Personalizzati</li>
          </ul>
        </div>

        {/* Cura Dentale Preventiva per Bambini */}
        <div className="grid-item">
          <h4>Cura Dentale Preventiva per Bambini</h4>
          <p>Ci concentriamo sulla cura preventiva per mantenere sani i denti del tuo bambino, inclusi trattamenti al fluoro e sigillanti dentali.</p>
          <ul>
            <li>Prezzo della Cura Preventiva - Prezzi Personalizzati</li>
          </ul>
        </div>

        {/* Altri Servizi Pediatrici */}
        {/* Aggiungi qui altri grid-item per ulteriori servizi pediatrici che offri */}

      </div>

      {/* Nota */}
      <p className="note">Nota: I prezzi sono soggetti a cambiamenti e possono variare in base alle specifiche esigenze del trattamento. Si prega di contattarci per una consulenza dettagliata e una quotazione precisa.</p>
    </div>
  );
}

export default PediatricDentistryPage;
