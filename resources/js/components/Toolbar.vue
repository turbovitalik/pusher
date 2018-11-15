<template>
    <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <router-link to="/login">
                <v-btn flat>Login</v-btn>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "toolbar"
    }
</script>

<style scoped>

</style>