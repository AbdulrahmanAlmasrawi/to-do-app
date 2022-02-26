let taskInput = document.getElementById ('taskInput');
let taskBtn = document.getElementById ('taskBtn');
let noTask = document.getElementById('noTask');
let tasks = document.querySelector('.tasks');
let inValid = document.getElementById('inValid');
let closeValidationMessage = document.getElementById('closeValidationMessage');



let addTask = ()=>{

let inputData = taskInput.value;
if( inputData.trim() ==0){
inValid.classList.remove('none');

}else{
    noTask.remove();

tasks.innerHTML += `
<div class='alert alert-info pb-3'>
${inputData}
<button class='btn delete float-right btn-danger'> Delete </button>
</div>
`;

taskInput.value="";

}
}

    let removeInvalid =  ()=>{
        inValid.classList.add('none')
    }


taskBtn.addEventListener('click',addTask);
closeValidationMessage.addEventListener('click',removeInvalid)



document.addEventListener('click',function(e){
if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
}

})