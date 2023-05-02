<template>
    <HeaDer />
    <h1>Update</h1>
    <form class="AdD">
        <input type="text" name="name" placeholder="Enter Name" v-model="Mobil.name" />
        <input type="text" name="type" placeholder="Enter Type" v-model="Mobil.type" />
        <input type="text" name="tahun" placeholder="Enter Tahun" v-model="Mobil.tahun" />
        <button type="button" v-on:click="updatemobil"> Update Car</button>
    </form>
</template>
<script>
import HeaDer from './HeaDer.vue'
import axios from 'axios';
export default {
    name: 'UpDate',
    components: {
        HeaDer
    },
    data() {
        return {
            Mobil: {
                name: '',
                type: '',
                tahun: ''
            }
        }
    },
    methods: {
        async updatemobil() {
            console.warn(this.Mobil)
            console.warn(this.Mobil)
            const result = await axios.put("http://localhost:3000/Mobil/"+this.$route.params.id, {
                name: this.Mobil.name,
                type: this.Mobil.type,
                tahun: this.Mobil.tahun,
            });
            if (result.status == 200) {
                this.$router.push({ name: 'HoMe' });
            }

        }

    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        const result = await axios.get('http://localhost:3000/Mobil/' + this.$route.params.id)
        // console.warn(this.$route.params.id)
        console.warn(result.data)
        this.Mobil = result.data
    }
}
</script>