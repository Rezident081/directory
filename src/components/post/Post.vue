<template>
    <div v-if="posts && posts.length">
        <div class='col-xl-3 col-lg-4 col-md-6 col-sm-12' v-for="post of posts" :key="post.id">
            <div class='directory-item'>
                    <div class='directory-blocks__image'>
                        <img  :src="post.acf.l_logo.sizes.medium" 
                              :width="post.acf.l_logo.sizes['medium-width']" 
                              :height="post.acf.l_logo.sizes['medium-height']" />
                    </div>
                    <div class='directory-content'>
                        <p class='directory-title'>{{ post.title.rendered }}</p>
                        <span class='directory-shortC'>{{ post.excerpt.rendered | clearText }}</span>
                        <a class='directory-more' href='#' @click.prevent="sendPostData(post)">More information</a>
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
            postsDefault: [],
            errors: [],
        }
    },

    created() {
        axios.get(`http://cryptonomics.lazycat.studio/wp-json/wp/v2/listing`)
            .then(response => {
                this.posts = this.postsDefault = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })

        this.$store.$on("getCatId", this.sortByCat);
        this.$store.$on("handle-submit", this.sortByQuery);

    },

    filters: {

        clearText(value){
            if(!value) return;
            return value.replace(/<\/?[^>]+>/g, "");
        }

    },

    methods:{

        sortByCat(id){
            if(!id) return;

            this.posts = this.postsDefault.filter( (post) => {
                return post.cat_listing.includes(parseInt(id));
            })

        },

        sendPostData(post){
            this.$store.$emit("getPostData", {
                id: post.id,
                isOpen: true
            });
        },

        sortByQuery(query){
            if(!query) this.posts = this.postsDefault;

            this.posts = this.postsDefault.filter( (post) => {
                return post.title.rendered.toLowerCase().includes(query.toLowerCase());
            });
            
        }


    }
}
</script>
