document.addEventListener("DOMContentLoaded", function() {
    var mensajeBienvenida = "¡Bienvenido a tu Carrito de Compras!";
    console.log(mensajeBienvenida); 
});

var total = 0;
var productos = [];

function agregarProducto(event) {
    event.preventDefault();

    var nombreProducto = $('#nombre').val();
    var precioProducto = parseFloat($('#precio').val());
    var cantidadProducto = parseInt($('#cantidad').val());

    var subtotal = precioProducto * cantidadProducto;

    var listaProductos = $('#lista-productos');
    var nuevoItem = $(`
        <li>
            <span>${nombreProducto}</span>
            <span>Precio: $${precioProducto.toFixed(2)} CLP</span>
            <span>Cantidad: ${cantidadProducto}</span>
            <span>Subtotal: $${subtotal.toFixed(2)} CLP</span>
            <button class="eliminar-producto btn btn-danger" onclick="eliminarProducto(this)">Eliminar</button>
        </li>
    `);
    listaProductos.append(nuevoItem);

    total += subtotal;
    $('#total').text(total.toFixed(2) + ' CLP');
    productos.push({nombre: nombreProducto, precio: precioProducto, cantidad: cantidadProducto});

    $('#nombre').val('');
    $('#precio').val('');
    $('#cantidad').val('1');
}

function eliminarProducto(elemento) {
    var item = $(elemento).closest('li');
    var subtotal = parseFloat(item.find('span:nth-child(4)').text().split(': $')[1]);
    var nombreProducto = item.find('span:first').text();

    total -= subtotal;
    $('#total').text(total.toFixed(2) + ' CLP');
    productos = productos.filter(producto => producto.nombre !== nombreProducto);
    item.remove();
}

$('#form-nuevo-producto').submit(function(event){
    agregarProducto(event);
});

$('#boton-comprar').on('click', function() {
    if (productos.length === 0) {
        alert('El carrito está vacío. Por favor, agrega productos antes de comprar.');
    } else {
        alert('¡Gracias por tu compra!');
    }
});



var total = 0;
var productos = [];

function agregarProducto(event) {
    event.preventDefault();

    var nombreProducto = $('#nombre').val();
    var precioProducto = parseFloat($('#precio').val());
    var cantidadProducto = parseInt($('#cantidad').val());

    if (productos.includes(nombreProducto)) {
        alert('Este producto ya está en el carrito.');
        return;
    }

    var subtotal = precioProducto * cantidadProducto;

    var listaProductos = $('#lista-productos');
    var nuevoItem = $(`
        <li>
            <span>${nombreProducto}</span>
            <span>Precio: $${precioProducto.toFixed(2)} CLP</span>
            <span>Cantidad: ${cantidadProducto}</span>
            <span>Subtotal: $${subtotal.toFixed(2)} CLP</span>
            <button class="eliminar-producto btn btn-danger" onclick="eliminarProducto(this)">Eliminar</button>
        </li>
    `);
    listaProductos.append(nuevoItem);

    total += subtotal;
    $('#total').text(total.toFixed(2) + ' CLP');
    productos.push(nombreProducto);

    $('#nombre').val('');
    $('#precio').val('');
    $('#cantidad').val('1');
}

function eliminarProducto(elemento) {
    var item = $(elemento).closest('li');
    var subtotal = parseFloat(item.find('span:nth-child(4)').text().split(': $')[1]);
    var nombreProducto = item.find('span:first').text();

    total -= subtotal;
    $('#total').text(total.toFixed(2) + ' CLP');
    productos = productos.filter(producto => producto !== nombreProducto);
    item.remove();
}

$('#form-nuevo-producto').validate({
    rules: {
        nombre: {
            required: true,
            minlength: 2
        },
        precio: {
            required: true,
            number: true,
            min: 0.01
        },
        cantidad: {
            required: true,
            number: true,
            min: 1
        }
    },
    messages: {
        nombre: {
            required: "Por favor ingrese el nombre del producto.",
            minlength: "El nombre debe tener al menos 2 caracteres."
        },
        precio: {
            required: "Por favor ingrese el precio del producto.",
            number: "Por favor ingrese un número válido.",
            min: "El precio debe ser mayor a 0."
        },
        cantidad: {
            required: "Por favor ingrese la cantidad del producto.",
            number: "Por favor ingrese un número válido.",
            min: "La cantidad debe ser al menos 1."
        }
    },
    submitHandler: function(form) {
        agregarProducto(event);
    }
});

$('#boton-comprar').on('click', function() {
    alert('¡Gracias por tu compra!');
});