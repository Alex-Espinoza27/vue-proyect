const originalQuotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    // { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    // { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    // { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

const {createApp, ref, computed} = Vue;

// v-for : itera los valores
// v-if: conducional - quita toda la etiqueta
// v-show: aplica el style:none al elemento

const app = createApp({
    setup() {
        const showAthor =ref(true);
        const messageButton =ref("Hide Author");
        const quotes = ref(originalQuotes);
        const newMessage = ref('');

        // los computados se procesan automatico cuando el valor cambia
        const totalQuotes = computed(()=>{
            return quotes.value.length;
        });


        const hideAuthor = () =>{
            if(showAthor.value){
                showAthor.value = false;
                messageButton.value = "Show authors"; 
                return;
            }
            showAthor.value = true;
            messageButton.value = "Hide Author"; 
        }

        const addQuote = () =>{
            // modificar el ".value" cuando son variables reactivas
            if (newMessage.value.length ===0) {
                return;
            }
            quotes.value.unshift({ quote: newMessage.value, author: 'Anonimo'});
            console.log(quotes);
            newMessage.value = '';
        }
        return {
            quotes,
            showAthor,
            messageButton,
            newMessage,

            hideAuthor,
            addQuote,
            totalQuotes 
        }
    }
})
app.mount('#myApp');

