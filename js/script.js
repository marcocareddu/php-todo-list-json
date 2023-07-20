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
            const data = {
                'newTask': {
                    text: this.newTask,
                    isDone: false,
                    id: 5,
                }
            };

            axios.post('http://localhost/php-todo-list-json/api/todo/', data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(res => { this.tasks = res.data });

            this.newTask = '';
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