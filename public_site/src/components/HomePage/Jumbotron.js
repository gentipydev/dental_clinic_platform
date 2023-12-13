import React from 'react';
import './Jumbotron.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="container">
                <img src="/images/loka_icon.png" alt="Icon" className="jumbotron-icon" /> 
                <h3>“Per coloro che comprendono le implicazioni profonde di un bel sorriso”</h3>
                <p>
                Nella nostra clinica dentistica crediamo nel potere di trasformazione di un sorriso radioso. <br /><br />
                Un bel sorriso non è solo il riflesso di denti sani, ma un faro di fiducia, positività e benessere. È il linguaggio universale della gioia, la chiave per fare prime impressioni indimenticabili e un simbolo della vitalità interiore
                </p>
            </div>
        </div>
    );
};


export default Jumbotron;
