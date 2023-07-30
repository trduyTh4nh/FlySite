<template>
    <div class="error_wrapper">
        <img src="https://http.cat/images/401.jpg"/>
        <div class="error_left">
            <h1>HOW? Lạ nhể</h1>
            <h2>Bạn không có quyền vào trang này!</h2>
            <RouterLink to="/">Về trang chủ</RouterLink>
        </div>
    </div>
</template>
<style scoped>
    img{
        border-radius: 16px;
    }
    .error_wrapper{
        display: flex;
        gap: 25px;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: 6rem;
    }
    .error_left{
        display: flex;
        flex-direction: column;
    }
    .error_wrapper h1{
        font-size: 55px;
    }
</style>