<template>
    <div v-if="question">
        <edit-question v-if="editing"
            :data="question"
        ></edit-question>

        <show-question
            :data=question
            v-if="question"
        ></show-question>
    </div>
</template>

<script>
    import ShowQuestion from './ShowQuestion'
    import EditQuestion from "./EditQuestion";
    export default {
        components: {EditQuestion, ShowQuestion},
        data() {
            return {
                question: null,
                editing: false
            }
        },
        created() {
            this.listen();
            this.getQuestion();
        },
        methods: {
            getQuestion() {
                axios.get(`/api/question/${this.$route.params.slug}`)
                    .then(res => this.question = res.data.data)
            },
            listen() {
                EventBus.$on('start_editing', () => {
                    this.editing = true
                })
                EventBus.$on('cancel_editing', () => {
                    this.editing = false
                })
            }
        }
    }
</script>

<style scoped>

</style>