<template>
    <div v-if="question">
        <edit-question v-if="editing"
            :data="question"
        ></edit-question>

        <show-question
            :data=question
            v-if="question"
        ></show-question>



        <v-container>
            <replies :question="question"></replies>
            <new-reply v-if="loggedIn" :questionSlug="question.slug"></new-reply>
            <div class="mt-4" v-else>
                <router-link to="/login">Log in to reply</router-link>
            </div>
        </v-container>

    </div>
</template>

<script>
    import ShowQuestion from './ShowQuestion'
    import EditQuestion from "./EditQuestion";
    import Replies from "../reply/replies";
    import NewReply from "../reply/NewReply";
    export default {
        components: {NewReply, Replies, EditQuestion, ShowQuestion},
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
        computed: {
            loggedIn() {
                return User.loggedIn()
            }
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