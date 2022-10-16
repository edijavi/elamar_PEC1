# PEC1_Ej1
## La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)

### ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.
- Ayuda a los motores de busqueda y a sus usuarios a determinar la importancia y contexto de cada parte de la página web.
- Ayuda a leer y entender al desarrollador, por tanto ofrece facilidad de mantenimiento.
- Ayuda a la accesilidad  y experiencia de usuario de la página web siendo inclusiva para distintos públicos con discapacidades físicas, discapacidades temporales y restricciones socioeconómicas en el ancho de banda y la velocidad.

### Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.
- HTML Geolocation API: Se usa para obtener la localización actual del usuario o visitante a la página. Se mostrará la localización del usuario siempre y cuando él lo permita, ya que compromete la seguridad y privacidad del usuario.
- HTML Drag and Drop API: Se usa para introducir la carateristica de arrastrar un elemento de una página hacia otro punto de la misma.
- HTML Web Storage API: Se usa para alamacenar datos en el navegador web y fue introducida por HTML5 en la cual se puede almacenar grandes cantidades de datos y se puede transferir al servidor lo cual no se podía cuando se alamacenaba en forma de cookies.

### Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos(diferentes tamaños de pantalla).
Media queries fue introducida con CSS3 la cual se puede aplicar multiples estilos al mismo elemento dependiendo del tipo de dispositivo usado para visitar la página web.

### Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo).
- Typescript es un lenguaje tipado por tanto permite definir el tipo de variables que vamos a usar.
- En Typescript se puede usar los tipos de variables básicos (Boolean, Number, String, Any, Array, Tuple, Void, Null, Undefined) o crear clases y declarar objetos de estas clases.
- En TypeScript se puede definir si una variable es pública o privada.
- En TypeScript aparece la figura de el patrón de diseño 'Decorator' que sirve para añadir funcionalidad a un objeto de forma dinámica.

## El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)

### Cita al menos 2 de estos preprocesadores.
- SASS
- Stylius

### Cita al menos 4 ventajas que ofrecen estos preprocesadores.
- Permite procesar múltiples hojas de estilo CSS, las cuales se compilan en uno solo.
- Anidamiento de reglas de estilo, lo cual permite escribir reglas de estilo dentro de otra regla de estilo evitando repetir los selectores.
- Extensibilidad de clases, lo cual permite reutilizar y ampliar clases o adjuntar un subconjunto de reglas de estilo a otras clases para evitar redundancias.
- Reutilizar variables 

### Explica brevemente en qué consisten los sourcemaps.
Sourcemaps en terminos generales es un fichero que mapea desde la fuente transformada a la fuente original. Consiste en el mapeo  entre el fichero JavaScript generado/traspilado/mininificado y uno o más ficheros fuente originales.

### Explica qué es un transpilador.
Transpilador es un tipo especial de compilador que traduce de un lenguaje fuente a otro fuente también de un nivel de abstracción parecido. Se puede diferenciar  de los compiladores tradicionales en que estos reciben como entrada ficheros conteniendo código fuente y generan código máquina del más bajo nivel.

## El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).

### Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.
- Git: Es un modelo de repositorio distribuido compatible con sistemas y protocolos existentes como HTTP, FTP, SSH y es capaz de manejar eficientemente proyectos pequeños a grandes.
- CVS: Es un modelo de repositorio cliente-servidor donde varios desarrolladores pueden trabajar en el mismo proyecto en paralelo. El cliente CVS mantendrá actualizada la copia de trabajo del archivo y requiere intervención manual sólo cuando ocurre un conflicto de edición.

- Webpack
- Parcel

### Cita y explica al menos 3 comandos de Git.
- git init: Inicializa el repositorio Git en el directorio actual.
- git add .: permite añadir al repositorio Git todos los ficheros nuevos existentes en directorio actual. 
- git commit -m "Mi first commit": permite guardar e etiquetar con una breve descripción cambios realizados en el repositorio Git.

### Cita y explica brevemente las características más definitorias de WebPack.
- entry: la entrada y salida están relacionados entre sí y en su configuración se indica a WebPack qué fichero debe mirar primero antés de empezar a generar la gráfica de dependencias.
- output: en la configuración de  output se puede indicar a WebPack cómo y dónde colocar los modulos y sus formatos.
- rules and loaders: la configuración de rules and loaders ilustra a WebPack cómo debe procesar los distintos tipos de ficheros y convertirlos en módulos válidos antes de ser añadidos a la gráfica de dependencias.
