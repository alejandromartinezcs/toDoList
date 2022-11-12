//import environment from './environment.js';
import createItemList from './components/ItemList.js';

//const urlColeccion  = environment.urlDb + '/tareas.json';
const containerBody = document.querySelector    ("body");
const formTareas    = document.querySelector    ("#form-tareas");
const inputTarea    = document.querySelectorAll ("input");
const submitTarea   = document.querySelector    ("#btn-reg__tareas");

const lista         = document.getElementById('lista-tareas');
const spinner       = document.getElementById('spinner');


const monstrarTareas = (tareas) => {
    lista.innerHTML = '';
    tareas.forEach((tarea) => {
        const item = createItemList(tarea.id, tarea.describeTarea, tarea.estado);
        lista.appendChild(item);
    });
}

formTareas.addEventListener('submit',(evento) => {
    spinner.classList.remove('d-none');    
    evento.preventDefault();
    console.log("Agregar Tarea");
    const formData = new FormData(evento.target);

    const datosTarea = Object.fromEntries(formData);
    console.log(datosTarea);

    const keys = Object.keys(datosTarea);
    console.log(keys);
     const tareas = keys.map((key) => {
        const tarea = datosTarea[key];
        const tareaCompleta = {
            id: key,
            ...tarea
        };



    //     return tareaCompleta;
    // });
    monstrarTareas(datosTarea);
    spinner.classList.add('d-none');
});

    // let listarTarea = '';
    // for(const info in datosTarea){
    //     listarTarea = listarTarea + "  " + datosTarea[info];
    // }


