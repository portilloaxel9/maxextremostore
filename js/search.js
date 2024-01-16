// search.js

function buscarProductos(event) {
    event.preventDefault();

    var searchText = document.getElementById('searchInput').value.toLowerCase();
    var productos = document.getElementById('productos').getElementsByClassName('card');

    for (var i = 0; i < productos.length; i++) {
        var titulo = productos[i].getElementsByClassName('card-title')[0].innerText.toLowerCase();
        var descripcion = productos[i].getElementsByClassName('card-text')[0].innerText.toLowerCase();

        if (titulo.includes(searchText) || descripcion.includes(searchText)) {
            productos[i].style.display = 'block';
        } else {
            productos[i].style.display = 'none';
        }
    }

    var titulos = document.getElementsByClassName('title');
    for (var j = 0; j < titulos.length; j++) {
        titulos[j].style.display = 'none';
    }

    var resultadosTitulo = document.getElementById('resultadosTitulo');
    resultadosTitulo.style.display = 'none';

    for (var k = 0; k < productos.length; k++) {
        if (productos[k].style.display === 'block') {
            resultadosTitulo.style.display = 'block';
            break;
        }
    }
}
