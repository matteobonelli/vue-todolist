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
            inputText : ''            
        }
    },
    methods : {
        removeItem(index){
            this.tasks.splice(index, 1);
        },
        newTask(){
            this.idLast++
            const newObj = {
                text : this.inputText,
                done : false,
                id : this.idLast
            }
            this.tasks.unshift(newObj);
            this.inputText = ''
        },
        taskCrossedOut(index){
            this.tasks[index].done = !this.tasks[index].done
        }
    }
}).mount('#app')