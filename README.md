## Inicializacion de proyecto
' npx create-react-app 2022netflix --template redux'

### Proceso de Limpieza

### Importar las librerias

material-ui/core, axios, firebase,react-router-dom, react-uuid

### App.js - Layout Inicial

- Ceamos las rutas
- Rendereizamos Login o el resto de la App condicionado a la exiastencia de un usuario

### Estilos

- Utilizamos useStyles para crear una infraestructura que  os permita asignar estilos a cada uno de los componentes

### Crear las Carpetas de los Componentes: 

creamos la infraestructura basica de los componentes que representan una pagina: Home, Login, Paypal, Profile, SignUp

### Estilos en los componentes de Pages

Patron para anadir la infraestructura de estilos a todos los componentes de pagina.

### Crear la carpeta de components, con componentes mas secundarios

creamos la infraestructura basica del resto de componentes: banner, header, plans y rows

### Estilos en los componentes de la carpeta components

Creamos la infraestructura basica del resto de compomentes 

### Comenzamos a trabajar en el componente Header

- importamos el logo
- anadimos al appbar una clase transparente condicional. Esta clase se activa si la variable show = true/
- la variable show se comvierte en true cuando hacemos un scroll vertical de mas de 100 px
- para escuchar cuando el usuario haace scroll vertical, anadimos un eventListener al objeto window
- el eventListener esta activo una sola vez cada vez que refrescamos la pagina (useEffect con []).
- Una vez montado el componente, hay que limpiarlo para que no nos quede colgado el eventListener
-  Anadimos las rutas al logo y al avatar

### Comenzamos a trabajar en el Banner

- Hemos importado un pedazo de imagen como backgroundImage
- En React tenemos que acompanar las backgroundImages con estilos como object-fit, background-size y background-position
- Hemos posicionado el titulo de la peli, unos botones y la descripcion
- Como la descripcion viene de la api, debe truncarse, para ello hemos declarado la funcion truncate()
- Hemos anadido un div vacio que oscurece la imagen hasta fusionarla con el resto del UI que es oscuro.

### Trabajamos en el Login

- hemos creado un boton con styled componenets y le hemos llamado NetflixButton. Este boton esta totalmente customizado y podremos variar su longitud, color y otros estilos, pasandole props
- Styled components para variar los estilos del input o del boton, para su posicionamiento, le damos una clase normal

- Hemos creado un input personalizado en styledcomponents. Le hemos llamado NetflixInput. Como InputBase era ya un componente de material ui, pues lo hemos llamado styled(InputBase). Si hubiese sido un input de base, se hubiese llamado styled.input

### Componente profile

- hemos trabajado con la distribucion
- <Plans>Texto</Plans>
- const Plans = ({children}) => {
    return ()
}
- Pasar props a los styled components.
- En el caso de que el componente no sea binario, por ejemplo el caso de que le tamano sea grande, mediano y pequeno, lo solucionamos con una funcion y un switch

### Componente Signup

- Renderizado condicional. Hemos creado una variable signIn.
- Si la variable es false, desplegamos el formulario.

### Proceso de registro/ signin

- Habilitado una cuenta en Firebase
- Inicializado el objeto auth
- Capturado los datos tecleados por el usuario dentro del formulario
- registrado email y password con las funciones signup() definidas en firebase.js
- ingreso al sistema con los metodos asociados a la funcion login() definida en firebase.js

### Redux

- habilitamos el slice userSlice para manejar el usuario en el componente que queramos


### Persistencia

- Hemos anadido un 'eventListener' en App.js
- Este eventListener se activa cada vez que cambia el usuario en firebase
- Cada vez que se cambia, vuelve a inyectar el usuario en la capa de datos de userSlice(Redux).
De esta manera recordamos que ya erstamos dentro de la aplicacion aunque refresquemos la pagina

### Requests

- construir el componenete <Row />
- Hemos habilitado todos los endpoints para acceder a themoviedb, y extraer los datos de las peliculas clasificadas por genero

###  Requests al API

- con useEffect, hacemos llamadas asincronas a las peliculas de cada genero medante la funcion fetchData()
- fetchData() recibe un genero y una funcion que recibe una pelicula
- fetchdata devuelve request.data.results, que es un array de peliculas
- Las desplegamos en el componente Row con un map


### Creacion del componente Paypal

- Al componente Paypal lo llamamos cuando clockamos uno de los botonoes d elos planes de la suscripcion a NETFLIX
- estos botones nos redirigen a la ruta /checkout
- En Checkout vemos el componente Paypal, que contiene el codigo de React necesario para implementar la integracion con Paypal
- El codigo se encuentra en la documentacion de Paypal.
- Paralelemante, nos tenemos que abrir una cuenta en Paypal y obtener las credenciales de acceso.






### `npm start`
 
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
