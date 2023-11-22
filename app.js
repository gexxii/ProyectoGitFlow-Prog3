let listaEmpleados = [];

const objEmpleado = {
    id: '',
    nombre: '',
    puesto: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const puestoInput = document.querySelector('#puesto');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);
