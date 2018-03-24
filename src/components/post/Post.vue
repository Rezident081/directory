<template>
    <div v-if="posts && posts.length">
        <div class='col-xl-3 col-lg-4 col-md-6 col-sm-12' v-for="post of sortByCat(posts)">
            <div class='directory-item' :key="post.id">
                    <div class='directory-blocks__image'>
                        <img  :src="post.acf.l_logo.sizes.medium" 
                              :width="post.acf.l_logo.sizes['medium-width']" 
                              :height="post.acf.l_logo.sizes['medium-height']" />
                    </div>
                    <div class='directory-content'>
                        <p class='directory-title'>{{ post.title.rendered }}</p>
                        <span class='directory-shortC'>{{ post.excerpt.rendered | clearText }}</span>
                        <a class='directory-more' href='#' @click.prevent="getSingleId(post)">More information</a>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
        return {
            posts: [],
            errors: [],
            catId: 0
        }
    },

    created() {
        axios.get(`http://cryptonomics.lazycat.studio/wp-json/wp/v2/listing`)
            .then(response => {
                this.posts = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })

        this.$store.$on("getCatId", id => {
                this.catId = id;
        });

    },

    filters: {

        clearText(value){
            if(!value) return;
            return value.replace(/<\/?[^>]+>/g, "");
        }

    },

    methods:{

        sortByCat(posts){
            if(!this.catId) return posts;

            return posts.filter( (post) => {
                return post.cat_listing.includes(parseInt(this.catId));
            })
        },

        getSingleId(post){
            console.log(post.id);
        }


    }
}
</script>
