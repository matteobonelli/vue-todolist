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
            ]
            
        }
    },
    methods : {
        removeItem(index){
            this.tasks.splice(index, 1);
        }
    }
}).mount('#app')