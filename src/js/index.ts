new Vue({

    el:"#app",

    data: {
        inputMessage: "",
        outputMessage: "",



    },




    methods: {

        uppercase() {
            this.outputMessage = this.inputMessage.toUpperCase()

        },

        lowercase() {
            this.outputMessage = this.inputMessage.toLowerCase()
        }
    }

}
)
