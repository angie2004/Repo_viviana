$(document).ready(function(){

    $('#listar').on('click', function(){
        let tabla = document.querySelector('#tabla')
        tabla.innerHTML = '<thead><th>Codigo</th><th>Nombre</th><th>Telefono</th><th>Fecha</th><th>Correo</th></thead>';

        $.ajax({
            url:"http://localhost:8080/listarEmpleado",
            type: "GET",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);

                for(i=0; i <= respuesta.length; i++){

                    tabla.innerHTML += '<tr><td>' + respuesta[i].id + '</td><td>' 
                        + respuesta[i].nombre + '</td><td>'
                        + respuesta[i].telefono + '</td><td>' 
                        + respuesta[i].fecha + '</td><td>' 
                        + respuesta[i].correo + '</td></tr>' 

                }
                
            }
        })

    });

    $('#enviar').on('click', function(){ 

        let datos = {
            id: parseInt($('#id').val()),
            nombre: $('#nombre').val(),
            telefono: $('#telefono').val(),
            fecha: $('#fecha').val(),
            correo: $('#correo').val()
        }

        console.log(datos);
        let datosEnvio = JSON.stringify(datos);
        console.log(datosEnvio);
        $.ajax({
            url: "http://localhost:8080/agregarEmpleado",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            dataType: "JSON"
        });
    });

    $('#buscar').on('click', function(){

        let codigo = parseInt($('#codigo').val());
        alert(codigo);
        $.ajax({
            url: "http://localhost:8080/buscarEmpleado/" + codigo,
            type: "GET",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);
                if(respuesta){
                    $('#usuario').append("Usuario</br>Nombre:" + respuesta.nombre + 
                    "</br>Telefono: " + respuesta.telefono +
                    "</br>Correo: " + respuesta.correo);

                }else{
                    alert("El usuario no se encontro");
                }
            }
        });
    });

    $('#Nombre').on('click', function(){

        let buscarNombre = $('#buscarNombre').val();
        $.ajax({
            url: "http://localhost:8080/EmpleadoNombre/" + buscarNombre,
            type: "GET",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);
                for(i=0; i <= respuesta.length; i++){
                    $('#BNombre').append("Usuario</br>Nombre:" + respuesta[i].nombre + 
                    "</br>Telefono: " + respuesta[i].telefono +
                    "</br>Correo: " + respuesta[i].correo)  ;

                }

            }
        })

    });

    $('#eliminar').on('click',function(){
        let codigo = $('#Eliminar_ID').val();
        $.ajax({
            url: "http://localhost:8080/eliminarEmpleado/" + codigo,
            type: "DELETE",
            dataType: "JSON",
            success: function(respuesta){
                console.log(respuesta);
                if(respuesta){
                    $('#eliminarUsu').append("Usuario eliminado")
                }else{
                    $('#eliminarUsu').append("Usuario no eliminado")
                }
            }
        })
        
    });

    $('#modificar').on('click', function(){ 

        let datos = {
            id: parseInt($('#id').val()),
            nombre: $('#nombre').val(),
            telefono: $('#telefono').val(),
            fecha: $('#fecha').val(),
            correo: $('#correo').val()
        }

        console.log(datos);
        let datosEnvio = JSON.stringify(datos);
        console.log(datosEnvio);
        $.ajax({
            url: "http://localhost:8080/modificarEmpleado",
            type: "POST",
            data: datosEnvio,
            contentType: "application/JSON",
            dataType: "JSON"
        });
    });


});