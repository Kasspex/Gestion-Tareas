let tareas =[]

function anadirTarea(){
    const tareaNueva = document.getElementById('tareaAnadir').value;
    if(tareaNueva != ""){
    tareas.push(tareaNueva);
    }else{
        alert("No se acepta campos vacios");
    }
    actualizarLista();
}

function eliminarTarea(index){
    tareas.splice(index,1);
    actualizarLista();
}

function actualizarLista(){
    const lista = document.getElementById('lista-tareas')
    lista.innerHTML = ''; 

    tareas.forEach((item, index) =>{
    const tarea = document.createElement('li')
    tarea.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    tarea.innerHTML= ` <div class="d-flex">
                        <p>${item}</p>      </div>
                        <button  onclick="eliminarTarea(${index})">Eliminar Tarea</button>`;
                        lista.appendChild(tarea);                 
    });
    
}