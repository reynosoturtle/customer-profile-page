export default {
    mixins: [],
    data() {
        return {}
    },
    computed: {},
    methods: {
        fetchSampleUser() {
            return new Promise((resolve, reject) => {
                this.$customerAxios.get('/sample_customer')
                    .then(
                        response => {
                            console.log(response.data)
                            resolve(response.data)
                        },
                        error => {
                            console.log('Failed to fetch sample user', error)
                            reject(error)
                        }
                    )
            })
        }
    }
}