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
        created() {
            Echo.channel('likeChannel')
                .listen('LikeEvent', (e) => {
                    if (this.content.id === e.id) {
                        e.type === 1 ? this.count++ : this.count--
                    }
                })
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