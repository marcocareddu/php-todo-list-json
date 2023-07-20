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
                    isDone: false,
                    id: 0,
                },
                {
                    text: 'Ritirare i cappotti dalla lavanderia',
                    isDone: false,
                    id: 1,
                },
                {
                    text: 'Tagliare il prato',
                    isDone: false,
                    id: 2,
                },
                {
                    text: 'Fare le pulizie',
                    isDone: false,
                    id: 3,
                },
                {
                    text: 'Allenarsi',
                    isDone: false,
                    id: 4,
                },
            ]
        }
    },

});

// mount
app.mount('#root');