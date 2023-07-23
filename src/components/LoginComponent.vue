<script>

</script>
<template>
    <div id="login">
        <div class="login-wrap">
            <div class="login-tittle">
                <h1>Sign in</h1>
            </div>
            <div class="login-description">
                <span>Hey, enter your details to get sigin to</span>
            </div>
            <div class="login-logo">
                <img src="../assets/logo_main.svg">
            </div>
            <div class="login-email">
                <input type="text" placeholder="Enter your email">
            </div>
            <div class="login-pass">
                <div class="input-icons">
                    <input type="text" placeholder="Passcode">
                    <font-awesome-icon :icon="['fas', 'eye']" />
                </div>
            </div>

            <div class="login-question">
                <span>Having trouble in sigin?</span>
            </div>

            <div class="login-button">
                <button>Sign in</button>
            </div>

            <div class="login-bottom">
                <div class="login-bottom_tittle">
                    <span>Don't have an account?</span>
                </div>
                <div class="login-bottom_reques">
                    <span>Request Now</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@import url('../assets/home.css');

.login-logo img {
    width: 5rem;
    height: 5rem;
}

#login {
    display: none;
    justify-content: center;
    width: 100%;
    margin-top: 5rem;
    position: absolute;
}

.login-wrap {
    border-radius: 1rem;
    background-color: white !important;
    width: 32rem;
    height: 38rem;
    text-align: center;
}

/* icon */
.input-icons svg {
    position: absolute;
}

.input-icons {
    width: 100%;
    margin-bottom: 10px;
}

.icon {
    padding: 10px;
    min-width: 40px;
}

.input-field {
    width: 100%;
    padding: 10px;
    text-align: center;
}
.login-tittle{
    margin-top: 2rem;
    margin-bottom: 1rem;    
}
.login-description{
    margin: 1rem;
}
.login-description span{
    font-weight: 600;
    color: #686868;
}
.login-logo img{
    width: 4rem;
    height: 5rem;
}
.login-email{
    margin: 2rem;
}

.login-email input{
    background-color: #f7f7f7;
    transition: ease 0.1s;
    border-radius: 4px;
    border: none;
    padding: 1rem;
    width: 22rem;
    height: 1rem;
    outline: none;
    color: black;
    font-weight: 500;
}
.login-email input:focus{
    outline:  2px solid #f8a150;
}
.login-pass{
    margin: 2rem;
}
.login-pass input{
    background-color: #f7f7f7;
    transition: ease 0.1s;
    border-radius: 4px;
    border: none;
    padding: 1rem;
    width: 22rem;
    height: 1rem;
    outline: none;
    color: black;
    font-weight: 500;
}
.login-pass input:focus{
    outline: 2px solid #f8a150;
}
.input-icons svg{
    margin-top: 1rem;
    position: absolute;
    margin-left: -2rem;
}
.login-cover{
        background-color: #00000091;
}
.login-question{
    display: flex;
    justify-content: left;
    padding-left: 4rem;
    font-weight: 700;
    margin-top: 1rem;
    color: #000;
    margin-bottom: 2rem;
}
.login-button button{
    transition: ease 0.2s;
    font-weight: 600;
    font-size: 1.2rem;
    width: 18rem;
    height: 3rem;
    border: none;
    margin: 1rem 0 1rem 0;
    border-radius: 1rem;
    border-radius: 15px;
    background: linear-gradient(0deg, #F9A150 0%, #F9A150 100%), linear-gradient(0deg, #FFF 0%, #FFF 100%), linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF;
}
.login-button button:hover{
    box-shadow: 0px 8px 15px 0px rgba(249, 161, 80, 0.51);
    color: white;
    cursor: pointer;
}
.login-bottom{
    margin-top: 10px; 
    gap: 0.5rem;
    justify-content: center;
    display: flex;
}
.login-bottom_reques{
    transition: ease 0.2s;
    cursor: pointer;
    font-weight: 600;
    color: black;
}
.login-bottom_reques:hover{
    color: rgb(0, 102, 255);
}
</style>

