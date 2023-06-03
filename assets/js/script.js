const colorInput = document.getElementById('colorInput');
        const pinturaDiv = document.getElementById('pintura');
        
        // Agregar un evento al input para capturar el cambio de valor
        colorInput.addEventListener('change', function() {
            // Obtener el color seleccionado
            const color = colorInput.value;
            
            // Aplicar el color seleccionado al fondo del div
            pinturaDiv.style.backgroundColor = color;
        });





        const btnCalcular = document.getElementById('btncalcular');
        const resumenCompra = document.querySelector('.resumencompra');
    
        btnCalcular.addEventListener('click', function() {
            const color = colorInput.value;
            const cantidad = document.getElementById('cantidadInput').value;
            const precio = 1000;
            const total = precio * cantidad;
    
            const contenidoResumen = `
            <h2>Tu Compra</h2>
            <div class="compraresumendiv">
            
                <h4>Resumen de la compra:</h4>
                <p>Color: <span style="background-color: ${color}; color: white;">${color}</span></p>
                <div style="background-color: ${color}; width: 3rem; height: 3rem; border-radius:25px"; ></div>
                <p class="pcantidad">Cantidad: ${cantidad}</p>
                <p class="ptotal">Total: ${total}$</p>
                <button id="btncalcular">Comprar</button>
                </div>
            `;
    
            resumenCompra.innerHTML = contenidoResumen;
        });