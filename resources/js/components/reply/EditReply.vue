<template>
    <div>
        <markdown-editor v-model="reply.reply"></markdown-editor>
        <v-card-actions>
            <v-btn icon small @click="edit">
                <v-icon color="green">save</v-icon>
            </v-btn>
            <v-btn icon small @click="cancel">
                <v-icon color="black">cancel</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    export default {
        name: "EditReply",
        props: ['reply'],
        methods: {
            edit() {
                axios.patch(`/api/question/${this.reply.question_slug}/reply/${this.reply.id}`, {body: this.reply.reply})
                    .then(res => this.cancel())
            },
            cancel() {
                EventBus.$emit('cancel-editing');
            }
        }
    }
</script>

<style scoped>

</style>