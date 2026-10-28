
const calcularBoton = document.getElementById('calcularBoton');
const inputFecha = document.getElementById('FechaNacimiento');
const divResultado = document.getElementById('resultado');

// Accedemos a Luxon desde el navegador
const DateTime = luxon.DateTime;

calcularBoton.addEventListener('click', () => {
    const fechaValor = inputFecha.value;

    // Verificamos que se haya seleccionado una fecha
    if (!fechaValor) {
        divResultado.textContent = 'Por favor, selecciona una fecha.';
        return;
    }

    // Convertimos la fecha de nacimiento
    const nacimiento = DateTime.fromISO(fechaValor).startOf('day');
    const hoy = DateTime.now().startOf('day');

    // Evitamos fechas futuras
    if (nacimiento > hoy) {
        divResultado.textContent = 'La fecha de nacimiento no puede ser futura.';
        return;
    }

    // Calculamos la diferencia entre las fechas
    const diferencia = hoy.diff(nacimiento, ['years', 'months', 'days']).toObject();

    // Mostramos el resultado
    divResultado.textContent =
        `Tienes ${Math.floor(diferencia.years)} años, ` +
        `${Math.floor(diferencia.months)} meses y ` +
        `${Math.floor(diferencia.days)} días.`;
});
