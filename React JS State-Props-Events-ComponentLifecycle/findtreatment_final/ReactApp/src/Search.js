import React, { useState } from 'react';
import './styles.css';

var treatmentList = ["Keratin", "Scalp", "Moisture", "Detox", "Toning"];

function Search() {
    const [results, setResults] = useState([]);

    const handleSearch = (treatmentName) => {
        const found = treatmentList.includes(treatmentName);
        setResults([...results, found ? `${treatmentName} - Found` : `${treatmentName} - Not Found`]);
    };

    return (
        <>
            <h1>Hair Shine</h1>
            <label onClick={() => handleSearch("Keratin")}>Keratin</label>
            <label onClick={() => handleSearch("Scalp")}>Scalp</label>
            <label onClick={() => handleSearch("Moisture")}>Moisture</label>
            <label onClick={() => handleSearch("Relax")}>Relax</label>
            <label onClick={() => handleSearch("Cysteine")}>Cysteine</label>
            <Display treatments={results} />
        </>
    );
}

function Display({ treatments }) {
    return (
        <>
            {treatments.map((result, index) => (
                <p key={index}>{result}</p>
            ))}
        </>
    );
}

export { Display };
export default Search;