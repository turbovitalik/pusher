<template>
    <v-app>
        <v-container>
            <v-form @submit.prevent="create">
                <v-text-field
                        v-model="form.title"
                        label="Title"
                        type="text"
                        required
                ></v-text-field>
                <v-autocomplete
                        label="Category"
                        item-text="name"
                        item-value="id"
                        v-model="form.category_id"
                        :items="categories"
                ></v-autocomplete>
                <markdown-editor v-model="form.body"></markdown-editor>
                <v-btn color="green" type="submit">Create</v-btn>
            </v-form>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    title: null,
                    category_id: null,
                    body: null
                },
                categories: [],
                errors: null
            }
        },
        created() {
            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
        },
        methods: {
            create() {
                axios.post('/api/question', this.form)
                    .then(res => this.$router.push(res.data.path))
                    .catch(error => this.errors = error.response.data.error)
            }
        }
    }
</script>

<style scoped>

</style>