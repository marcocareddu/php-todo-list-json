console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'Todo List',
    data() {
        return {
            newTask: '',
            tasks: [
                {
                    text: 'Comprare il pane',
                    isDone: false
                },
                {
                    text: 'Ritirare i cappotti dalla lavanderia',
                    isDone: false
                },
                {
                    text: 'Tagliare il prato',
                    isDone: false
                },
                {
                    text: 'Fare le pulizie',
                    isDone: false
                },
                {
                    text: 'Allenarsi',
                    isDone: false
                },
            ]
        }
    },

});

// mount
app.mount('#root');