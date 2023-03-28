$(document).ready(function(){

    $('#listar').on('click', function(){
        let tabla = document.querySelector('#tabla')
        tabla.innerHTML = '<thead><th>ID</th><th>Nombre</th><th>documento</th><th>telefono</th><th>Correo</th><th>edad</th></thead>';

        $.ajax({
            url:"http://localhost:8080/listarClientes",
            type: "GET",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);

                for(i=0; i <= respuesta.length; i++){

                    tabla.innerHTML += '<tr><td>' + respuesta[i].id + '</td><td>' 
                        + respuesta[i].nombre + '</td><td>'
                        + respuesta[i].documento + '</td><td>' 
                        + respuesta[i].telefono + '</td><td>' 
                        + respuesta[i].correo + '</td></tr>' 
                        + respuesta[i].edad + '</td></tr>'

                }
                
            }
        })
    });
    $('#enviar').on('click', function(){

        let datos = {
            id: parseInt($('#id').val()),
            nombre: $('#nombre').val(),
            documento: $('#documento').val(),
            telefono: $('#telefono').val(),
            correo: $('#correo').val(),
            edad: $('#edad').val()
        }

        console.log(datos);
        let datosEnvio = JSON.stringify(datos);
        console.log(datosEnvio);
        $.ajax({
            url: "http://localhost:8080/agregarCliente",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            dataType: "JSON"
        });
    });
    $('#enviarid').on('click', function(){

        let id = parseInt($('#idbuscar').val());
        alert("Si quieres ver dale aceptar :)");
        $.ajax({
            url: "http://localhost:8080/buscarCliente/" + id,
            type: "GET",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);
                if(respuesta){
                    $('#busUsuario').append("Usuario</br>Nombre:" + respuesta.nombre + 
                    "</br>Documento: " + respuesta.documento +
                    "</br>Correo: " + respuesta.correo);

                }else{
                    alert("El usuario no se encontro");
                }
            }
        });
    });
    $('#enviaredad').on('click', function(){

        let edad = parseInt($('#edadbuscar').val());
        alert("Si quieres ver dale aceptar :)");
        $.ajax({
            url: "http://localhost:8080/ClientesEdad/" + edad,
            type: "GET",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);
                if(respuesta != null){
                    $('#busEdad').append("Usuario</br>Nombre:" + respuesta.nombre + 
                    "</br>Documento: " + respuesta.documento +
                    "</br>Correo: " + respuesta.correo);

                }else{
                    alert("El usuario no se encontro");
                }
            }
        });
    });

    $('#eliminarid').on('click',function(){
        let codigo = $('#eliminaID').val();
        $.ajax({
            url: "http://localhost:8080/EliminarCliente/" + codigo,
            type: "DELETE",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);
                if(respuesta){
                   $('#ElimUsuario').append("Usuario eliminado");
                }else{
                    $('#ElimUsuario').append("Usuario no eliminado");
                }
            }
        });

    });
    $('#enviarmodi').on('click', function(){

        let datos = {
            id: parseInt($('#id').val()),
            nombre: $('#nombre').val(),
            documento: $('#documento').val(),
            telefono: $('#telefono').val(),
            correo: $('#correo').val(),
            edad: $('#edad').val()
        }

        console.log(datos);
        let datosEnvio = JSON.stringify(datos);
        console.log(datosEnvio);
        $.ajax({
            url: "http://localhost:8080/moificarCliente/",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            dataType: "JSON"
        });
    });


});