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

    computed: {
        getNewId() {
            return this.tasks.length;
        },
    },
    methods: {

        // Add new task woth POST API Call
        addTask() {
            const data = {
                'newTask': {
                    text: this.newTask,
                    isDone: false,
                    id: this.getNewId,
                }
            };

            axios.post('http://localhost/php-todo-list-json/api/todo/', data,
                {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }).then(res => { this.tasks = res.data });

            this.newTask = '';
        },

        changeClass(id) {
            // Toggle class @click
            this.tasks.forEach(task => {
                if (task.id === id) {
                    task.isDone = !task.isDone;
                }
            });

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