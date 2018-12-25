<template>
    <v-container>
        <v-form @submit.prevent="submit">
            <v-text-field
                v-model="form.name"
                label="Category Name"
                required
            ></v-text-field>
            <v-btn color="green" type="submit" v-if="editSlug">Update</v-btn>
            <v-btn color="green" type="submit" v-else>Create</v-btn>
        </v-form>
        <v-card>
            <v-toolbar color="cyan" dark>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <v-list-tile v-for="(category, index) in categories" :key="category.id">
                    <v-list-tile-action>
                        <v-btn icon small @click="edit(index)">
                            <v-icon color="orange">edit</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ category.name }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon small @click="destroy(category.slug)">
                            <v-icon color="red">delete</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "CreateCategory",
        data() {
            return {
                form: {
                    name: null
                },
                categories: {},
                editSlug: null
            }
        },
        methods: {
            submit() {
                this.editSlug ? this.update() : this.create()
            },
            update() {
                axios.patch(`/api/category/${this.editSlug}`, this.form)
                    .then(res => this.categories.unshift(res.data))
            },
            create() {
                axios.post('/api/category', this.form)
                    .then(res => this.categories.unshift(res.data))
            },
            destroy(slug, index) {
                axios.delete(`/api/category/${slug}`)
                    .then(res => this.categories.splice(index, 1))
            },
            edit(index) {
                this.form.name = this.categories[index].name
                this.editSlug = this.categories[index].slug
                this.categories.splice(index, 1)
            }
        },
        created() {
            if (!User.admin()) {
                this.$router.push('/forum')
            }
            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
        }
    }
</script>

<style scoped>

</style>