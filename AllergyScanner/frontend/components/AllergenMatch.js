import React from 'react';

export function MatchAllergens(allergenData, allergenString) {
      let array = [];
      array = AllergensString(allergenString);
      
      const allergenMatches = findAllergenMatches(allergenData, array);
      return allergenMatches;
  }
  
  function AllergensString(allergenString) {
      let allergens = [];
      allergens = allergenString.replace('""', ' ')
      const allergenArray = [...new Set(allergens.split(", "))]
      return allergenArray;
      
  }

  function findAllergenMatches(allergenData, array) {
    let matches = [];
    
    for (const allergen in allergenData) {
        if(allergenData[allergen] !== 0) {
            for (var i = 0; i < array.length; i++) {
              {allergenData.map(({ title,key }) => (
                <p key={title}></p>
                ))
                if (array[i].includes(allergenData[allergen].title.toLowerCase())) {
                    let match = allergenData[allergen].title;
                    match.replace(/^\w/, (c) => c)
                    matches.push(match);
                     
                    }
            } }
            
        }
    }
    return matches;
  }
  
  