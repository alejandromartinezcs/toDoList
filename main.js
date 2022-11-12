import enviroment from './enviroment.js';
import createItemList from './components/ItemList.js';
const urlColeccion = enviroment.urlDb + '/tareas.json';

const lista     = document.getElementById('lista-tareas');
const spinner   = document.getElementById('spinner');


const monstrarTareas = (tareas) => {
    lista.innerHTML = '';
    tareas.forEach((tarea) => {
        const item = createItemList(tarea.id, tarea.contenido, tarea.fecha, tarea.estado);
        lista.appendChild(item);
    });
}
const init = () => {
    spinner.classList.remove('d-none');
    fetch(urlColeccion)
        .then(resp => resp.json())
        .then(data => {
            const keys = Object.keys(data);
            const tareas = keys.map((key) => {
                const tarea = data[key];
                const tareaCompleta = {
                    id: key,
                    ...tarea
                };
                return tareaCompleta;
            });
            monstrarTareas(tareas);

            spinner.classList.add('d-none');
            // const tareas = keys.reduce((prev, acc) => {
            //     const tarea = data[acc];
            //     const tareaCompleta = {
            //         id: acc,
            //         ...tarea
            //     }
            //     prev.push(tareaCompleta);
            //     return prev;
            // }, []);

        })
        .catch(error => {
            console.log(error);
            spinner.classList.add('d-none');
        });
}


init();






// const tarea = {
//     contenido: 'Comprar pan',
//     estado: false,
// }

// fetch(urlColeccion, {
//     method: 'POST',
//     body: JSON.stringify(tarea),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));