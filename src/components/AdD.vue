<template>
<HeaDer />
<h1>Add</h1>
<form class="AdD">
    <input type="text" name="name" placeholder="Enter Name" v-model="Mobil.name" />
    <input type="text" name="type" placeholder="Enter Type" v-model="Mobil.type" />
    <input type="text" name="tahun" placeholder="Enter Tahun" v-model="Mobil.tahun" />
    <button type="button" v-on:click="addmobil">Add new Car</button>
</form>
</template>
<script>
import HeaDer from './HeaDer.vue';
import axios from 'axios';
export default {
    name: 'AdD',
    components:{
        HeaDer
    },
    data()
    {
        return {
            Mobil:{
                name:'',
                type:'',
                tahun:''
            }
        }
    },
    methods:{
        async addmobil()
        {
            console.warn(this.Mobil)
            const result = await axios.post("http://localhost:3000/Mobil",{
                name:this.Mobil.name,
                type:this.Mobil.type,
                tahun:this.Mobil.tahun,
            });
            if(result.status==201)
            {
                this.$router.push({name:'HoMe'});
            }
            console.warn("result",result)
        }

    },
        
    mounted()
    {
        let user=localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
    }
}
</script>