import React from 'react';
import Navbar from './Navbar.js'; 
import Jumbotron from './Jumbotron.js';
import ServiceCard from './ServiceCard.js';
import ContactUs from './ContactUs.js';
import Staff from './Staff.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';


const HomePage = () => {
    return (
        <div className="homepage-background">
            <Navbar />

            <div className="full-page-section">
                <Jumbotron />
                <div className="icon-fullwidth-container">
                    <img src="/images/loka_icon.png" alt="Dentist Icon" className="icon-fullwidth" />
                </div>
            </div>

            <div className="full-page-section-2">
                <div className="container mt-3 homepage-container">
                    <div className="row homepage-row-left-align">
                        <ServiceCard title="Esami e pulizie odontoiatriche" text="Controlli di routine per valutare la salute orale generale, pulire i denti per rimuovere placca e tartaro e lucidare..." link="/dentalexamsandcleanings" />
                        <ServiceCard title="Corone e Ponti Dentali" text="Dispositivi protesici fissati su denti esistenti o su impianti per coprire un dente danneggiato o sostituire un dente mancante, rispettivamente..." link="/dentalcrownsandbridges" />
                        <ServiceCard title="Impianti Dentali" text="Componente chirurgico che si interfaccia con l'osso della mandibola per sostenere una protesi dentale come una corona, un ponte, una dentiera..." link="/dentalimplants" />
                        <ServiceCard title="Sbiancamento dei Denti" text="Servizi professionali di sbiancamento dei denti per illuminare il tuo sorriso, rimuovendo macchie e decolorazioni per un aspetto più sano e radioso..." link="/teethwhitening" />
                        <ServiceCard title="Ortodonzia" text="Cura ortodontica completa che include apparecchi ortodontici tradizionali e allineatori trasparenti per raddrizzare i denti e correggere problemi di morso, migliorando la funzione orale e l'estetica..." link="/orthodontics" />
                        <ServiceCard title="Odontoiatria Pediatrica" text="Cura dentale specializzata per bambini e adolescenti. Creiamo un ambiente amichevole e confortevole per garantire un'esperienza positiva ai nostri giovani pazienti..." link="/pediatricdentistry" />
                    </div>
                </div>
            </div>

            <div className="full-page-section">
                <Staff /> 
            </div>


            <div className="full-page-section">
                <ContactUs />
            </div>
        </div>
    );
};

export default HomePage;
