function validar() 
        {
            let Nombre = document.formulario.txt_nombre.value;
            let Apellido = document.formulario.txt_apellido.value;
            let Email = document.formulario.txt_email.value;
            let Rut = document.formulario.txt_rut.value;
            let Telefono = document.formulario.txt_telefono.value;
            
            if (Nombre.length==0 || Nombre.length<3)
            {
                alert("Debe ingresar un Nombre válido.");
                document.formulario.txt_nombre.focus();
                return false;
            }   
            if ((Apellido.length==0) || (Apellido.length<3))
            {
                alert("Debe ingresar un apellido válido.");
                document.formulario.txt_apellido.focus();
                return false;
            }
            if ((Email.length==0) || (Email.length<3))
            {
                alert("Debe ingresar un email válido.");
                document.formulario.txt_email.focus();
                return false;
            }
            if ((Rut.length<9) && (Rut.charAt(7)!="-") || (Rut.length>10) && (Rut.charAt(8)!="-"))
            {
                alert("El Rut debe tener una longitud de 9 o 10 caracteres y debe incluir un guión");
                document.formulario.txt_rut.focus();
                return false;
            }
            if ((Telefono.length<9) || (Telefono.length>9) || (Telefono.charAt(0)!="9") || Telefono.charAt(1)=="+" || Telefono.charAt(2)=="+" || Telefono.charAt(3)=="+" || Telefono.charAt(4)=="+" || Telefono.charAt(5)=="+" || Telefono.charAt(6)=="+" || Telefono.charAt(7)=="+" || Telefono.charAt(8)=="+")
            {
                alert("El Telefono debe tener un total de 9 números, sin + ni - , debe además empezar con 9.");
                document.formulario.txt_telefono.focus();
                return false;
            }
            alert("Se han ingresado los datos: "+Nombre+" "+Apellido+", "+Email+", "+Rut+", "+Telefono+".");
        }