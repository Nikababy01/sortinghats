
const students=[];
const studentHouse = ["Gryffindor","Hufflepuff", "Ravenclaw","Slytherin"];

const printToDom = (divId, textToPrint) => {
    const selectedDiv= document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildStudentCard= (mystudent)=> {
    let domString = '';
    for(let i = 0; i < mystudent.length; i++){
    
        domString += '<div id="housecards" class="card" style="width: 18rem;">';
        domString += `<div class="card-body ${mystudent[i].house}">`;
        domString += `<h5 class="card-title" id="name">${mystudent[i].name}</h5>`;
        domString += `<p class="card-text" id="house">${mystudent[i].house}</p>`;
        domString += `<button id="remove"  onclick= "btnexpel(${mystudent[i].id})" class="btn btn-primary">Expel</button>`;
        domString += '</div>';
        domString += '</div>';
    }
 printToDom('studentHouse',domString);
};

const btnexpel= (id)=> {
    console.log(`button expel clicked ${id}`);
    for(let i = 0; i < students.length; i++) {
        if(students[i].id === id) {
            students.splice(i, 1);//defines the parameter
            document.getElementById("housecards").innerHTML="";
            buildStudentCard(students);
         }
    }
console.log(students);
};

let cnt = 0;
const uniqueId= ()=>{
    cnt= cnt + 1;
    console.log(cnt);
    return cnt;
};

const sortStudent = (e)=>{
    e.preventDefault()
    console.log(e)
    // before newStudent only pertains to this object
    const newStudent={
        id: uniqueId(),  //generate id
        name:document.getElementById("name").value,  //get from input
        house: studentHouse[Math.floor(Math.random() *studentHouse.length)]  //random sort
    }
        students.push(newStudent)
        buildStudentCard(students);

}




const events = ()=> {
    document.getElementById('sorthouse').addEventListener('click',sortStudent);
};
    


 const init =()=> {
    events();
  }
 init();


 