<template>
    <ul v-if="categories && categories.length">
        <li v-for="cat of categories" :key="cat.id">
            <a href="#" :data-id="cat.id" @click.prevent="sendId">{{cat.name}}</a>
            <span class="cat-count">{{cat.count}}</span>
        </li>
    </ul>
</template>

<script>
import axios from 'axios';
export default {
    
    data() {
        return {
            categories: [],
            errors: []
        }
    },

    created() {
        axios.get(`http://cryptonomics.lazycat.studio/wp-json/wp/v2/cat_listing`)
            .then(response => {
                this.categories = response.data
            })
            .catch(e => {
                this.errors.push(e)
            });
    },

    methods:{

        sendId(e){
            this.$store.$emit("getCatId", e.target.getAttribute("data-id"));
        }

    }
}
</script>
