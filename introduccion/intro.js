new Vue({
  el: "#app", //punto de inicio (Tiene control de todo lo que este dentro de app)
  data: {
    //Es el modelo es decir que datos o informacion va a manejar nuestra aplicacion ,
    //puede tener niveles y sub-niveles segun lo requerido.
    nuevaTarea: "",
    tareas: [],
  },
  //Aca se enlaza los elementos del html con el modelo(en este caso tareas.)
  //Este objeto recibe n numeros de propiedades que son funciones o metodos.
  methods: {
    guardarTarea() {
      // el this hace referencia a data.
      this.tareas.push(this.nuevaTarea);
      this.nuevaTarea = "";
    },
  },
});

//Asociamos un elemento del DOM con una parte de nuestro modelo(nuevaTarea)
//usando una directiva: v-model.
//Son atributos que dan poderes a los elementos HTML.

//     <input v-model="nuevaTarea" type="text" />

//Muestra la informacion almacenada, hace como un agujero que muestra los
//datos del modelo.

//      <pre>{{$data}}</pre>

//La directiva que maneja un evento es v-on:submit.prevent

//     <form action="" v-on:submit.prevent="guardarTarea">

//La directiva bucle es v-for para hacer un recorrido de elementos.
//Lo que hacemos es interpolar tareas y este debe tener el mismo nombre
// que el elemento individual del for tarea - tarea.

//      <li v-for="tarea in tareas">{{tarea}}</li>
