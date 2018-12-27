<template>
    <v-app>
        <toolbar></toolbar>
        <router-view></router-view>
        <app-foter></app-foter>
    </v-app>
</template>

<script>
    import toolbar from "./Toolbar";
    import AppFoter from "./AppFoter";
    import Login from "./login/Login"
    export default {
        name: "AppHome",
        components: {AppFoter, toolbar, Login}
    }
</script>

<style scoped>

</style>