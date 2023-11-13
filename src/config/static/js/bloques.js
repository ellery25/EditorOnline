// Contenido del script.js
document.addEventListener('DOMContentLoaded', function () {
    var blockCounter = 1;  // Contador para identificar de manera única cada bloque

    // Función para crear un nuevo bloque y su correspondiente ítem
    function createNewBlock(content, strategy) {
        var accordionBody = document.querySelector('.accordion-body');

        // Crear nuevo bloque
        var newBlock = document.createElement('div');
        var blockId = 'block' + blockCounter;  // Crear un ID único para el bloque
        newBlock.id = blockId;
        newBlock.classList.add('block');
        newBlock.innerHTML = `
            <h2>Bloque ${blockCounter}</h2>
            <div class="markdown-content" id="${blockId}-content"></div> <!-- Contenedor para contenido Markdown -->
            <div class="markdown-strategy" id="${blockId}-strategy"></div> <!-- Contenedor para estrategias Markdown -->
        `;

        // Añadir bloque al contenedor
        accordionBody.appendChild(newBlock);

        // Crear correspondiente ítem con botones de configuración
        var newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.dataset.blockId = blockId;  // Añadir un atributo de datos para almacenar el ID del bloque
        newItem.innerHTML = `
            <span>Bloque ${blockCounter}</span>
            <button class="config-button" onclick="editBlock('${blockId}')">Editar</button>
            <button class="config-button" onclick="deleteBlock('${blockId}')">Eliminar</button>
        `;

        // Añadir ítem al contenedor
        document.getElementById('blockItems').appendChild(newItem);

        // Incrementar el contador para el próximo bloque
        blockCounter++;

        // Actualizar el contenido del bloque con información Markdown
        updateBlockContent(blockId, content, strategy);
    }

    // Función para manejar el evento de hacer clic en "Crear bloque"
    function handleCreateBlock() {
        var content = document.getElementById('content-text').value;
        var strategy = document.getElementById('learning-text').value;

        // Llamar a la función para crear el nuevo bloque con los valores del modal
        createNewBlock(content, strategy);

        // Cerrar el modal
        var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.hide();
    }

    // Asignar la función handleCreateBlock al botón "Crear bloque" del modal
    document.getElementById('createBlockBtn').addEventListener('click', handleCreateBlock);
});

// Función para actualizar el contenido del bloque con información Markdown
function updateBlockContent(blockId, content, strategy) {
    var contentDiv = document.getElementById(`${blockId}-content`);
    var strategyDiv = document.getElementById(`${blockId}-strategy`);

    // Convertir el contenido y la estrategia de Markdown a HTML
    var converter = new showdown.Converter();
    var contentHtml = converter.makeHtml(content);
    var strategyHtml = converter.makeHtml(strategy);

    // Actualizar el contenido de los contenedores Markdown en el bloque
    contentDiv.innerHTML = contentHtml;
    strategyDiv.innerHTML = strategyHtml;
}

// Función para editar un bloque
function editBlock(blockId) {
    // Implementa la lógica de edición según tus necesidades
    // Por ejemplo, podrías abrir un modal de edición con los textareas prellenados con el contenido actual.
    console.log(`Editar bloque ${blockId}`);
    var contentTextArea = document.getElementById('content-text');
    var strategyTextArea = document.getElementById('learning-text');

    // Obtener el contenido y la estrategia del bloque actual
    var contentDiv = document.getElementById(`${blockId}-content`);
    var strategyDiv = document.getElementById(`${blockId}-strategy`);
    var contentMarkdown = contentDiv.innerText;
    var strategyMarkdown = strategyDiv.innerText;

    // Asignar el contenido y la estrategia a los textareas
    contentTextArea.value = contentMarkdown;
    strategyTextArea.value = strategyMarkdown;

    // Abrir el modal de edición
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

// Función para eliminar un bloque
function deleteBlock(blockId) {
    // Implementa la lógica de eliminación según tus necesidades
    console.log(`Eliminar bloque ${blockId}`);
    // Eliminar el bloque y su ítem correspondiente
    var blockElement = document.getElementById(blockId);
    var itemElement = document.querySelector(`[data-block-id="${blockId}"]`);

    if (blockElement && itemElement) {
        blockElement.remove();
        itemElement.remove();
    }
}
