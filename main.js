
const students=[];
const studentHouse = ["Gryffindor","Hufflepuff", "Ravenclaw","Slytherin"];
const randomhouse = studentHouse[Math.floor(Math.random() *studentHouse.length)];
const printToDom = (divId, textToPrint) => {
    const selectedDiv= document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildStudentCard= (mystudent)=> {
    let domString = '';
    for(let i = 0; i < mystudent.length; i++){
        domString += '<div id="housecards" class="card" style="width: 18rem;">';
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title" id="name">${mystudent[i].name}</h5>`;
        domString += `<p class="card-text" id="house">${mystudent[i].house}</p>`;
        domString += `<a href="#" class="btn btn-primary">Expel</a>`;
        domString += '</div>';
        domString += '</div>';
    }
 printToDom('studentHouse',domString);
};
const sortStudent = (e)=>{
    e.preventDefault()
    console.log(e)
    
    const student={
        id: Date.now(),  //generate id
        name:document.getElementById("name").value,  //get from input
        house:document.getElementsByName(randomhouse)  //random sort
    }
    students.push(student)
    buildStudentCard(students);
}

    
 
const events = ()=> {
    document.getElementById('sorthouse').addEventListener('click',sortStudent);
};
    


 const init =()=> {
    events();
  }
 init();


 