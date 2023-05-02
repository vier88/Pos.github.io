<template>
<img class = "logo" src="../assets/krida.png" />
<h1>Sign Up</h1>
<div class="regis">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signup">Sign Up</button>
    <p>
        <router-link to ="/login">Login</router-link>
    </p>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data()
    {
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signup()
        {
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password                
            });

            console.warn(result);
            if(result.status==201)
            {
                
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'HoMe'})
            }
        }
    },
    mounted()
    {
        let user=localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name:'HoMe'})
        }
    }
}
</script>

<style>

</style>