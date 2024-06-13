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

let form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let titleContent = document.querySelector(".title").querySelector('span').textContent + " " + document.querySelector(".title").querySelector('input').value;
    console.log(titleContent);

    let subtitleContent = document.querySelector(".subtitle").querySelector('input').value;
    console.log(subtitleContent);

    let workContent = [];
    document.querySelector(".work").querySelectorAll('.input-group').forEach(inputGrp => {
        let temp = [];
        temp.push(inputGrp.querySelector('span').textContent);
        temp.push(inputGrp.querySelector('input').value);
        workContent.push(temp);
    });
    console.log(workContent)
});