<template>
<HeaDer />
<h1>Hell yeah, {{name}}</h1>
<table border="1">
    <tr>
        <td>Name</td>
        <td>Type</td>
        <td>Tahun</td>
        <td>Actions</td>
    </tr>
    <tr v-for="item in Mobil" :key="item.id">
        <td>{{item.name}}</td>
        <td>{{item.type}}</td>
        <td>{{item.tahun}}</td>        
        <td>
        <router-link :to="'/Update/'+item.id">Update</router-link>
        <button v-on:click="deleteMobil(item.id)">Delete</button></td>
        
    </tr>
</table>
</template>
<script>
import HeaDer from './HeaDer.vue'
import axios from 'axios';
export default {
    name: 'HoMe',
    data(){
        return {
            name:'',
            Mobil:[],      
        }
    },
    components:{
        HeaDer
    },
    methods:{
        async deleteMobil(id)
        {
            let result = await axios.delete("http://localhost:3000/Mobil/" +id);
            console.warn(result)
            if(result.status==200)
            {
                this.loadData()

            }
            
        },
        async loadData()
        {
            let user=localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user)
        {
            this.$router.push({name:'SignUp'})
        }
        let result = await axios.get("http://localhost:3000/Mobil");
        console.warn(result)
        this.Mobil=result.data; 

        }

    },
    async mounted()
    {
        this.loadData(); 
             


    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>