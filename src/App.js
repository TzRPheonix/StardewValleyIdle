import React, { useState, useEffect } from "react";

const characters = [
  { id: 1, nom: "Alex", sexe: "Homme", anniversaire: "Eté", couleur_cheveux: "Brun", age: 23, mariable: "Oui", ville: "Pelican Town" },
  { id: 2, nom: "Abigail", sexe: "Femme", anniversaire: "Automne", couleur_cheveux: "Violet", age: 18, mariable: "Oui", ville: "Pelican Town" },
  { id: 3, nom: "Jas", sexe: "Femme", anniversaire: "Printemps", couleur_cheveux: "Violet", age: 6, mariable: "Non", ville: "Pelican Town" },
  { id: 4, nom: "Vincent", sexe: "Homme", anniversaire: "Automne", couleur_cheveux: "Brun", age: 7, mariable: "Non", ville: "Pelican Town" },
  { id: 5, nom: "Sam", sexe: "Homme", anniversaire: "Été", couleur_cheveux: "Blond", age: 20, mariable: "Oui", ville: "Pelican Town" },
  { id: 6, nom: "Maru", sexe: "Femme", anniversaire: "Été", couleur_cheveux: "Brun", age: 20, mariable: "Oui", ville: "Pelican Town" },
  { id: 7, nom: "Penny", sexe: "Femme", anniversaire: "Automne", couleur_cheveux: "Roux", age: 22, mariable: "Oui", ville: "Pelican Town" },
  { id: 8, nom: "Sebastian", sexe: "Homme", anniversaire: "Hiver", couleur_cheveux: "Violet", age: 22, mariable: "Oui", ville: "Pelican Town" },
  { id: 10, nom: "Haley", sexe: "Femme", anniversaire: "Hiver", couleur_cheveux: "Blond", age: 23, mariable: "Oui", ville: "Pelican Town" },
  { id: 11, nom: "Emily", sexe: "Femme", anniversaire: "Printemps", couleur_cheveux: "Bleu", age: 24, mariable: "Oui", ville: "Pelican Town" },
  { id: 12, nom: "Shane", sexe: "Homme", anniversaire: "Printemps", couleur_cheveux: "Violet", age: 28, mariable: "Oui", ville: "Pelican Town" },
  { id: 13, nom: "Elliot", sexe: "Homme", anniversaire: "Été", couleur_cheveux: "Blond", age: 30, mariable: "Oui", ville: "Pelican Town" },
  { id: 14, nom: "Leah", sexe: "Femme", anniversaire: "Hiver", couleur_cheveux: "Roux", age: 30, mariable: "Oui", ville: "Pelican Town" },
  { id: 15, nom: "Harvey", sexe: "Homme", anniversaire: "Hiver", couleur_cheveux: "Brun", age: 31, mariable: "Oui", ville: "Pelican Town" },
  { id: 16, nom: "Sandy", sexe: "Femme", anniversaire: "Automne", couleur_cheveux: "Rose", age: 36, mariable: "Non", ville: "Calico Desert" },
  { id: 17, nom: "Clint", sexe: "Homme", anniversaire: "Hiver", couleur_cheveux: "Brun", age: 39, mariable: "Non", ville: "Pelican Town" },
  { id: 18, nom: "Jodi", sexe: "Femme", anniversaire: "Été", couleur_cheveux: "Brun", age: 40, mariable: "Non", ville: "Pelican Town" },
  { id: 19, nom: "Kent", sexe: "Homme", anniversaire: "Automne", couleur_cheveux: "Blond", age: 41, mariable: "Non", ville: "Pelican Town" },
  { id: 20, nom: "Caroline", sexe: "Femme", anniversaire: "Automne", couleur_cheveux: "Vert", age: 41, mariable: "Non", ville: "Pelican Town" },
  { id: 21, nom: "Pierre", sexe: "Homme", anniversaire: "Été", couleur_cheveux: "Brun", age: 44, mariable: "Non", ville: "Pelican Town" },
  { id: 22, nom: "Robin", sexe: "Femme", anniversaire: "Automne", couleur_cheveux: "Roux", age: 45, mariable: "Non", ville: "Pelican Town" },
  { id: 23, nom: "Demetrius", sexe: "Homme", anniversaire: "Automne", couleur_cheveux: "Noir", age: 46, mariable: "Non", ville: "Pelican Town" },
  { id: 24, nom: "Gus", sexe: "Homme", anniversaire: "Printemps", couleur_cheveux: "Brun", age: 48, mariable: "Non", ville: "Pelican Town" },
  { id: 25, nom: "Wizard", sexe: "Homme", anniversaire: "Inconnu", couleur_cheveux: "Violet", age: 50, mariable: "Non", ville: "Wizard's Tower" },
  { id: 26, nom: "Pam", sexe: "Femme", anniversaire: "Printemps", couleur_cheveux: "Blond", age: 51, mariable: "Non", ville: "Pelican Town" },
  { id: 27, nom: "Marnie", sexe: "Femme", anniversaire: "Été", couleur_cheveux: "Brun", age: 54, mariable: "Non", ville: "Pelican Town" },
  { id: 28, nom: "Linus", sexe: "Homme", anniversaire: "Hiver", couleur_cheveux: "Gris", age: 58, mariable: "Non", ville: "Pelican Town" },
  { id: 29, nom: "Willy", sexe: "Homme", anniversaire: "Été", couleur_cheveux: "Noir", age: 61, mariable: "Non", ville: "Pelican Town" },
  { id: 30, nom: "Lewis", sexe: "Homme", anniversaire: "Printemps", couleur_cheveux: "Gris", age: 64, mariable: "Non", ville: "Pelican Town" },
  { id: 31, nom: "Evelyn", sexe: "Femme", anniversaire: "Hiver", couleur_cheveux: "Gris", age: 81, mariable: "Non", ville: "Pelican Town" },
  { id: 32, nom: "George", sexe: "Homme", anniversaire: "Automne", couleur_cheveux: "Gris", age: 83, mariable: "Non", ville: "Pelican Town" },
];
const categories = ["Nom", "Sexe", "Anniversaire", "Couleur de cheveux", "Age", "Mariable", "Ville"];

const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(getRandomCharacter());
  const [inputName, setInputName] = useState("");
  const [guessedCharacters, setGuessedCharacters] = useState([]);
  const [isGuessedCorrectly, setIsGuessedCorrectly] = useState(false);


  function getRandomCharacter() {
    return characters[Math.floor(Math.random() * characters.length)];
  }

  const handleInputChange = () => {
    console.log(`Personnage à trouver :  ${selectedCharacter.nom}`)
    const guessedCharacter = characters.find((char) => char.nom === inputName);
    console.log(`Nom choisi : ${inputName}`);
    if (guessedCharacter) {
      console.log("Attributs du personnage choisi :", guessedCharacter);
      setGuessedCharacters([guessedCharacter, ...guessedCharacters]);
      if (isMatch(guessedCharacter.nom, selectedCharacter.nom)) {
        console.log("Bien joué !");
        setIsGuessedCorrectly(true);
      }
    } else {
      console.log("Personnage non trouvé dans la base de données.");
    }
  };

  const isMatch = (guessedValue, actualValue) => {
    return guessedValue === actualValue;
  };

  const ageDirection = (guessedAge, targetAge) => {
    return guessedAge > targetAge ? '↓' : guessedAge < targetAge ? '↑' : '';
  };

  return (
    <div style={{ textAlign: 'center', color: "white", height: '100%', minHeight: '100vh' }}>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-image: url(images/Sv_background.jpg);
            background-size: cover;
            text-shadow: 2px 2px 2px black;
          }
          table {
            border-collapse: collapse;
            width: 60%;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;
          }
          th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            color: black !important;
            text-shadow: none;
          }
          th {
            background-color: #f2f2f2;
            color: "black" 
          }
          .match {
            background-color: #8aff8a;
            font-weight: bold;
          }
          .no-match {
            background-color: #ff8a8a;
            font-weight: bold;
          }
          .success-message {
            color: #8aff8a;
            font-weight: bold;
          }
        `}
      </style>
      <h1>Stardew Valley Idle</h1>
      <div style={{ textAlign: 'center', color: "white" }}>
        <h2>Propositions</h2>
        <input
          type="text"
          placeholder="Entrez le nom du personnage"
          onChange={(e) => setInputName(e.target.value)}
        />
        <button onClick={handleInputChange}>Valider</button>
      </div>
      <div>
        {isGuessedCorrectly && <p className="success-message">Bien joué !</p>}
        <h2>Résultats</h2>
        <table>
          <thead>
            <tr>
              {categories.map((category) => (
                <th key={category}>{category}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {guessedCharacters.map((guessedCharacter) => (
              <tr key={guessedCharacter.id}>
                <td className={isMatch(guessedCharacter.nom, selectedCharacter.nom) ? 'match' : 'no-match'}>{guessedCharacter.nom}</td>
                <td className={isMatch(guessedCharacter.sexe, selectedCharacter.sexe) ? 'match' : 'no-match'}>{guessedCharacter.sexe}</td>
                <td className={isMatch(guessedCharacter.anniversaire, selectedCharacter.anniversaire) ? 'match' : 'no-match'}>{guessedCharacter.anniversaire}</td>
                <td className={isMatch(guessedCharacter.couleur_cheveux, selectedCharacter.couleur_cheveux) ? 'match' : 'no-match'}>{guessedCharacter.couleur_cheveux}</td>
                <td className={isMatch(guessedCharacter.age, selectedCharacter.age) ? 'match' : 'no-match'}>
                  {guessedCharacter.age} <span className="arrow">{ageDirection(guessedCharacter.age, selectedCharacter.age)}</span>
                </td>
                <td className={isMatch(guessedCharacter.mariable, selectedCharacter.mariable) ? 'match' : 'no-match'}>{guessedCharacter.mariable}</td>
                <td className={isMatch(guessedCharacter.ville, selectedCharacter.ville) ? 'match' : 'no-match'}>{guessedCharacter.ville}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;