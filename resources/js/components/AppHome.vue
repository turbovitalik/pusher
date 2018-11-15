<template>
    <div>
        <toolbar></toolbar>
        <app-foter></app-foter>
    </div>
</template>

<script>
    import toolbar from "./Toolbar";
    import AppFoter from "./AppFoter";
    export default {
        name: "AppHome",
        components: {AppFoter, toolbar}
    }
</script>

<style scoped>

</style>