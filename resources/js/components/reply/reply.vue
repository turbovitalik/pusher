<template>
    <div class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline">{{ data.user }}</div>
                <div class="ml-2">said {{ data.created_at }}</div>
                <v-spacer></v-spacer>
                <like :content="data"></like>
            </v-card-title>
            <v-divider></v-divider>
            <edit-reply
                v-if="editing"
                :reply="data"
            ></edit-reply>
            <div v-else>
                <v-card-text v-html="reply"></v-card-text>
                <v-card-actions v-if="own">
                    <v-btn icon small @click="edit">
                        <v-icon color="orange">edit</v-icon>
                    </v-btn>
                    <v-btn icon small @click="destroy">
                        <v-icon color="red">delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>

        </v-card>
    </div>
</template>

<script>
    import EditReply from "./EditReply";
    import Like from '../likes/Like';
    export default {
        name: "reply",
        components: {EditReply, Like},
        props: ['data', 'index'],
        data() {
            return {
                editing: false
            }
        },
        computed: {
            own() {
                return User.own(this.data.user_id)
            },
            reply() {
                return md.parse(this.data.reply)
            }
        },
        created() {
            this.listen()
        },
        methods: {
            listen() {
                EventBus.$on('cancel-editing', () => {
                    this.editing = false;
                });
            },
            destroy() {
                EventBus.$emit('reply-destroy', this.index)
            },
            edit() {
                this.editing = true
            }
        }
    }
</script>

<style scoped>

</style>