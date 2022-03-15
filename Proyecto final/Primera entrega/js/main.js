document.querySelector('#myForm').onclick = function(){
    if(document.querySelector('#hojita input').value.length == 0){
        alert("Ingresa una tarea")
    }

    else{
        document.querySelector('#hojita').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#myForm input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}