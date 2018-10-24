var unsplash = new Vue({
    el: '#mount-point',
    data() {
        return {
            imgSrc: null,
            quoteSrc: null,

        };
    },
    methods: {
        fetchGif() {

            var api_key = "c476f78c27cc9c43ab2444e9e75b5e9adfdfbd70984188bc45c20ebeed25431b"

            var secret_key = "8cbbf641ec65777938e3cc224f43c8a8c7fac78897a27b43dbe336b7310a7f99"
            


            fetch(`https://api.unsplash.com/photos/random?client_id=${api_key}`)
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(results => {

                this.imgSrc = results.urls.regular
                console.log("we received a response!")
            })
        },

        fetchQuote() {

            fetch(`http://localhost:3000/`)
            .then(response => response.ok ? response.json() : Promise.reject(response))
            .then(results => {
                console.log(results)
                this.quoteSrc = results.quote
                console.log("we got a quote...maybe!")
            })
        }


    },

    created() {
        this.fetchGif()
        this.fetchQuote()

    }

})