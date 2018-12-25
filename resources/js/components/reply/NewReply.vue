<template>
    <div>
        <markdown-editor v-model="body"></markdown-editor>
        <v-btn color="green" dark @click="submit">Reply</v-btn>
    </div>
</template>

<script>
    export default {
        name: "NewReply",
        data() {
            return {
                body: null
            }
        },
        props: ['questionSlug'],
        methods: {
            submit() {
                axios.post(`/api/question/${this.questionSlug}/reply`, {body: this.body})
                    .then(res => {
                        this.body = ''
                        EventBus.$emit('new-reply', res.data.reply)
                        window.scrollTo(0, 0)
                    })
            }
        }
    }
</script>

<style scoped>

</style>