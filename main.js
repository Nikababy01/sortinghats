const studentProfile = [


    
]

const printToDom = (divId,textToPrint) => {
    const selectedDiv= document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
    
    
    const buildHarry= (students)=> {
        let domString = '';
        for(let i = 0; i < students.length; i++){
            domString+= '<div class="col-md-6 col-lg-4 card-separation">';
            domString+= '<div class="card">';
            domString+=`<img src="${quacks[i].imageUrl}" class="card-img-top" alt="...">`;
            domString +='<div class="card-body">';
            domString+=`<h5 class="card-title">${quacks[i].name}</h5>`;
            domString+=`<p class="card-text">${quacks[i].socialStatus}</p>`;
            domString+=`<p class="card-text">${quacks[i].diet}</p>`;
            domString+= '</div>';
            domString+= '</div>';
            domString+= '</div>';
    
        }
        printToDom('ducks',domString);
    };