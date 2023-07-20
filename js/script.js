console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'Todo List',
    data() {
        return {
            newTask: '',
        }
    },
    methods: {
        addTask() {
            this.tasks.push(
                {
                    text: this.newTask,
                    isDone: false,
                    id: 5,
                },
            )
        }
    }

});

// mount
app.mount('#root');