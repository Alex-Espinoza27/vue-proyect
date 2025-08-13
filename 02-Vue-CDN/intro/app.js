console.log(Vue);

// ref: crear una variable reactiva
// createApp: crear una instancia de Vue
const {createApp, ref} = Vue;


const app = createApp({
    // template: `
    //     <h1> Hello {{message}} </h1>
    //     <p> Author: {{author}} </p>
    // `,
    setup() {
        const message = ref("I am alex devoloper"); // variabl reactiva para cambiar dinamicamenteen el DOM
        const author = ref("Bruse Wayne");
        // Bruse Wayne


        // setTimeout(() => {
        //     message.value = "I am a enginiering";
        //     author.value = "Peter Parker";
        // } , 1000);
        const changeName = () =>{
            message.value = "Hello I am a enginiering";
            author.value = "my author is: Peter Parker";
        }

        return {
            message,
            author,
            changeName
        }
    }
})

// monstamnos la aplicacion en el div
app.mount('#myApp');









