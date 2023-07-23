<script>
</script>
<template>
    <div id="signup">
        <div class="signup-wrap">
            <div class="signup-close">
                <div class="signup-close-icon">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </div>
            </div>
           <div class="wrap-header">
            <div class="signup-tittle">
                <h1>Sign up</h1>
            </div>
           </div>
         
            <div class="signup-wrap-component">
                <div class="component-input">
                    <div class="signup-email">
                        <input type="text" placeholder="Enter your email">
                    </div>
                    <div class="signup-username">
                        <input type="text" placeholder="User name">
                    </div>
                    <div class="signup-phone">
                        <input type="text" placeholder="Phone">
                    </div>
                    <div class="component-password">
                        <div class="signup-pass">
                            <div class="input-icons">
                                <input type="text" placeholder="Passcode">
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </div>
                        </div>
                        <div class="signup-repass">
                            <div class="input-icons">
                                <input type="text" placeholder="Repasscode">
                                <font-awesome-icon :icon="['fas', 'eye']" />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="signup-logo">
                    <img src="../assets/logo_main.svg">
                </div> -->
            </div>

            <div class="signup-question">
                <span>Having trouble in sigin?</span>
            </div>

            <div class="signup-button">
                <button>Signup</button>
            </div>

            <!-- <div class="signup-bottom">
                <div class="signup-bottom_tittle">
                    <span>Don't have an account?</span>
                </div>
                <div class="signup-bottom_reques">
                    <span>Request Now</span>
                </div>
            </div> -->
        </div>
    </div>
</template>