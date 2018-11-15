<template>
    <div>
        <toolbar></toolbar>
        <router-view></router-view>
        <app-foter></app-foter>
    </div>
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