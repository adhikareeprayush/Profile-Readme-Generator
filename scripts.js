let programmingLanguageValues = Array.from(document.getElementById('programming-language').getElementsByTagName('input')).map(input => input.id);
console.log(programmingLanguageValues);

let frontEndValues = Array.from(document.getElementById('frontend').getElementsByTagName('input')).map(input => input.id);
console.log(frontEndValues);

let backEndValues = Array.from(document.getElementById('backend').getElementsByTagName('input')).map(input => input.id);
console.log(backEndValues);

let mobileAppValues = Array.from(document.getElementById('mobile-app').getElementsByTagName('input')).map(input => input.id);
console.log(mobileAppValues);

let databaseValues = Array.from(document.getElementById('database').getElementsByTagName('input')).map(input => input.id);
console.log(databaseValues);

let aimlValues = Array.from(document.getElementById('ai-ml').getElementsByTagName('input')).map(input => input.id);
console.log(aimlValues);

let dataVisualizationValues = Array.from(document.getElementById('data-visualization').getElementsByTagName('input')).map(input => input.id);
console.log(dataVisualizationValues);