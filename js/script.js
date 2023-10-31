const { createApp } = Vue;

createApp({
    data() {
        return{
            tasks : [{
                    text : 'Pulire camera',
                    done : false,
                    id : 1
                },
                {
                    text : 'Lavare i vetri',
                    done : false,
                    id : 2
                },
                {
                    text : 'Rifare il letto',
                    done : true,
                    id : 3
                },
                {
                    text : 'Stendere i panni',
                    done : false,
                    id : 4
                }
                ],
            idLast : 4 ,
            inputText : '',
            inputSelect: ''            
        }
    },
    methods : {
        indexFinder(id){
            return this.tasks.findIndex((task) => task.id === id)
             
        },
        removeItem(id){
            const index = this.indexFinder(id)
            this.tasks.splice(index, 1);
        },
        newTask(){
            if(this.inputText === ''){
                return
            } else{
                this.idLast++
                const newObj = {
                    text : this.inputText,
                    done : false,
                    id : this.idLast
                }
                this.tasks.unshift(newObj);
                this.inputText = ''
            }
            
        },
        taskCrossedOut(id){
            const index = this.indexFinder(id)
            this.tasks[index].done = !this.tasks[index].done
        },
        listFiltered(){
            return this.tasks.filter((task) => {
                if(this.inputSelect === 'yes-done' && task.done){
                    return task
                } else if(this.inputSelect === 'not-done' && !task.done){
                    return task
                } else if(this.inputSelect === '') {
                    return task
                }
            })
        }
    }
}).mount('#app')