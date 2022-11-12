

const homework = (id,descripcion,estado,fechaEntrega,pendiente = 1)=>({
    id,
    descripcion,
    estado,
    fechaEntrega,
    pendiente,
});

const containerBody = document.querySelector    ("body");
const formTareas    = document.querySelector    ("#form-tareas");
const inputTarea    = document.querySelectorAll ("input");
const submitTarea   = document.querySelector    ("#btn-reg__tareas");

const  divTareas  = document.createElement("div");
            divTareas.classList.add("card");
            containerBody.appendChild(divTareas);

    
formTareas.addEventListener('submit',(evento) => {
        
    evento.preventDefault();
    console.log("Agregare Tarea");
    const formData = new FormData(evento.target);

    const datosTarea = Object.fromEntries(formData);
    console.log(datosTarea);
    
    
    
    /*--Construir elementos de Tarea --*/    
    const container = document.createElement("con")

    /*Construccion actual--*/
    const uldivTareas = document.createElement("ul");
    divTareas.appendChild(uldivTareas);
               
    const liulTareas = document.createElement("li");
    uldivTareas.appendChild(liulTareas);

    const checkTarea = document.createElement("input");
        checkTarea.type = "checkbox";
        liulTareas.appendChild(checkTarea);
        
        

    let listarTarea = '';
    for(const info in datosTarea){
        listarTarea = listarTarea + "  " + datosTarea[info];
    }

    
        

    liulTareas.innerText = listarTarea;
    
    const btnEditar     =   document.createElement("button");
    btnEditar.type = "button";
    liulTareas.appendChild(btnEditar);
    btnEditar.title="Editar";
        
});

    
    
