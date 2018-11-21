<template>

</template>

<script>
    export default {
        created() {
            EventBus.$emit('logout');
        },
        name: "Logout"
    }
</script>