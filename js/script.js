console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'Todo List',
    data() {
        return {
            newTask: '',
            tasks: [],
        }
    },
    methods: {

        // ! TODO Change
        addTask() {
            this.tasks.push(
                {
                    text: this.newTask,
                    isDone: false,
                    id: 5,
                },

                this.newTask = '',
            )
        }
    },

    mounted() {
        // Call API when mount html
        axios.get('http://localhost/php-todo-list-json/api/todo/')
            .then(res => { this.tasks = res.data });
    },

});

// mount
app.mount('#root');