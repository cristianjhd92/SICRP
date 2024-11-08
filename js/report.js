//const menuItems funciona para que los enlaces del menu se vean activos
// Selecciona todos los enlaces del menú
const menuItems = document.querySelectorAll('.menu_item a');//document.querySelectorAll funciona para seleccionar todos los elementos que tengan la clase .menu_item a

//const reportTable funciona para que se vea la tabla del reporte
// Selecciona la tabla del reporte
const reportTable = document.getElementById('reporte_table'); //document.getElementById('reporte_table') funciona para seleccionar el elemento con el id 'reporte_table'


// Función para manejar el cambio de clase activa

menuItems.forEach(item => { //.ForEach es un iterador que permite recorrer todos los elementos del array
    
    //.addEventListener es un evento que permite agregar un evento a un elemento
    item.addEventListener('click', function() { //'click', function() es un evento que permite hacer clic en un elemento y ejecutar una función
        
        //link es una variable que guarda el elemento que se ha hecho clic
        // Elimina la clase 'active' de todos los ítems
        menuItems.forEach(link => link.classList.remove('active')); //.classList.remove es un método que permite eliminar una clase de un elemento

        // Añade la clase 'active' al ítem seleccionado
        this.classList.add('active'); //.classList.add es un método que permite agregar una clase a un elemento
        
        // Oculta la tabla del reporte si se selecciona otro menú
        // Mostrar la tabla solo si se selecciona "REPORTE CUADRANTE"
        if (this.getAttribute('href') === '#reporte') { //getAttribute es un método que permite obtener el valor de un atributo de un elemento
        reportTable.style.display = 'block'; //style.display es un atributo que permite mostrar u ocultar un elemento
        } 
        
        else {
        reportTable.style.display = 'none'; //Si no se selecciona "REPORTE CUADRANTE", ocultar la tabla
        }
    });
});