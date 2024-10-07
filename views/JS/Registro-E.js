// Validación del formulario
        document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Validar cada campo
            const form = event.target;
            if (form.checkValidity() === false) {
                event.stopPropagation();
            } else {
                // Aquí puedes realizar la solicitud para guardar el registro
                document.getElementById('message').innerHTML = '<div class="alert alert-success">Registro exitoso!</div>';
                form.reset(); // Reiniciar el formulario
            }

            form.classList.add('was-validated');

            
        });


        if (form.checkValidity() === true) {
            // Enviar datos al backend
            const username = document.getElementById('username').value;
            const userlastname =document.getElementById('userlastname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const codigoE = document.getElementById('codigoE').value;
        
            const response = await fetch('http://localhost/phpmyadmin/index.php?route=/table/structure&db=mayorista+eight&table=empleados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, userlastname, email, password, codigoE })
            });
        
            // Manejar la respuesta
        }
        