function aplicarNegrita() {
    var editor = document.getElementById('sourceTA');
    var seleccion = window.getSelection().toString();
    
    // Verifica si hay texto seleccionado
    if (seleccion !== '') {
        var nuevoContenido = editor.innerHTML.replace(seleccion, `**${seleccion}**`);
        editor.innerHTML = nuevoContenido;
    }
}
