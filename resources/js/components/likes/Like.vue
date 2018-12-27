<template>
    <div>
        <v-btn icon @click="likedIt">
            <v-icon color="blue">favorite</v-icon> {{ count }}
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "Like",
        props: ['content'],
        data() {
            return {
                liked: this.content.liked,
                count: this.content.like_count
            }
        },
        methods: {
            likedIt() {
                if (User.loggedIn()) {
                    this.liked ? this.decr() : this.incr()
                    this.liked = !this.liked
                }
            },
            decr() {
                axios.delete(`/api/like/${this.content.id}`)
                    .then(res => this.count--)
            },
            incr() {
                axios.post(`/api/like/${this.content.id}`)
                    .then(res => this.count++)
            }
        }
    }
</script>

<style scoped>

</style>