<script>
    export default{
        props: [
            "listRoutes"
        ]
    }
</script>
<template>
    <div class="sidebar_wrapper">
        <RouterLink :to="route.path" v-for="route in listRoutes" :class="$route.path == route.path ? 'sidebar_item selected':'sidebar_item'">
            <p>{{ route.name }}</p>
        </RouterLink>
    </div>
</template>
<style scoped>
    .sidebar_wrapper{
        width: 20%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .sidebar_item{
        border-left: 5px #000 solid;
        padding: 16px;
        text-decoration: none;
    }
    .sidebar_item:hover{
        border-left: 5px #0060F0 solid;
        border-bottom-right-radius: 60px;
    }
    .selected{
        border-left: 5px #0060F0 solid;
        border-bottom-right-radius: 60px;
        background-color: rgba(171, 205, 255, 0.29);

    }
    .sidebar_item p{
        font-size: 1.2rem;
        color: black;
    }
</style>