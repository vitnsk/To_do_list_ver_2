
new Vue({
    el: '#app',
    data: {
       newTask: '',
        todoList: []
    },
    methods: {
            addTask() {
                
                if (this.newTask.trim() !== ''){
                    
                    this.todoList.push(this.newTask)
                    this.newTask = ''
                }
            },
            removeTask(index) {
                this.todoList.splice(index, 1)
            }
        },

        mounted(){
        
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response)=>response.json())
            .then((json)=>(this.todoList=json));
        
        
            }
})
