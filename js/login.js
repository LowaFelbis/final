< !DOCTYPE html >
  <html lang="es">

    <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Sign up - Neura-ku</title>
          <link rel="stylesheet" href="../css/base.css">
            <link rel="stylesheet" href="../css/form.css">
              <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
              </head>

              <body>
                <main class="main">
                  <form class="form">
                    <div class="form__header">
                      <h2 class="form__title">Crear una cuenta</h2>
                      <p class="form__description">Empieza tu prueba de 30 días gratis. Cancela cuando quieras</p>
                    </div>

                    <div class="form__body">
                      <div class="form__field">
                        <label class="form__label" for="name">Nombre</label>
                        <i class='bx bx-user-pin'></i>
                        <input class="form__input" type="text" id="name" name="name" placeholder="Escribe tu nombre" required>
                      </div>

                      <div class="form__field">
                        <label class="form__label" for="email">Usuario</label>
                        <i class='bx bx-user'></i>
                        <input class="form__input" type="text" id="username" name="username" placeholder="Crea un nombre de usuario"
                          pattern="^[a-zA-Z0-9]+$" required>
                      </div>

                      <div class="form__field">
                        <label class="form__label" for="email">Email</label>
                        <i class='bx bxs-envelope'></i>
                        <input class="form__input" type="email" id="email" name="email" placeholder="Escribe tu correo electrónico"
                          required>
                      </div>

                      <div class="form__field">
                        <label class="form__label" for="password">Password</label>
                        <i class='bx bx-key'></i>
                        <input class="form__input form__input--password" type="password" id="password" name="password"
                          placeholder="Crea una contraseña" required>
                          <i class='form__eye form__eye--show bx bx-show'></i>
                      </div>

                      <ul class="form__requirements">
                        <i class='form__check bx bx-check-circle'></i>
                        <li class="form__requirement" id="length">
                          Debe contener al menos 8 caracteres
                        </li>
                        <i class='form__check bx bx-check-circle'></i>
                        <li class="form__requirement" id="uppercase">
                          Debe contener al menos una letra mayúscula
                        </li>
                        <i class='form__check bx bx-check-circle'></i>
                        <li class="form__requirement" id="lowercase">
                          Debe contener al menos una letra minúscula
                        </li>
                        <i class='form__check bx bx-check-circle'></i>
                        <li class="form__requirement" id="number">
                          Debe contener al menos un número
                        </li>
                        <i class='form__check bx bx-check-circle'></i>
                        <li class="form__requirement" id="special">
                          Debe contener al menos un carácter especial ( !@#$%^&*(),.?":{ }| )
                        </li>
                      </ul>

                      <div class="submit">
                        <div class="submit__container">
                          <button class="submit__button" type="submit">Crear una cuenta</button>
                          <img src="./../assets/images/line.png" alt="divider line" class="submit__line">
                            <button class="submit__button" type="submit">
                              <img src="./../assets/images/google.svg" class="submit__icons" alt="Google icon" aria-label="Google icon">
                                Crear cuenta con Google
                            </button>
                            <button class="submit__button" type="submit">
                              <img src="./../assets/images/facebook.svg" class="submit__icons" alt="Facebook icon"
                                aria-label="Facebook icon">
                                Crear cuenta con Facebook
                            </button>
                        </div>
                      </div>

                      <p>¿Tienes una cuenta? <a href="#">Inicia sesión</a></p>
                    </div>
                  </form>
                </main>

                <script defer src="./../js/form.js"></script>
              </body>

            </html>