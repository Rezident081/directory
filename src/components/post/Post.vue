<template>
    <div v-if="posts && posts.length">
        <div class='col-xl-3 col-lg-4 col-md-6 col-sm-12' v-for="post of posts" v-bind:key="post.id">
            <div class='directory-item'>
                    <!-- <div class='directory-blocks__image'><img src="{{post.acf.l_logo.sizes.medium}}" alt="logo" width="{{post.acf.l_logo.sizes['medium-width']}}" height="${info.acf.l_logo.sizes['medium-height']}" /></div> -->
                    <div class='directory-content'>
                        <p class='directory-title'>{{post.title.rendered}}</p>
                        <span class='directory-shortC'>{{post.excerpt.rendered}}</span>
                        <a class='directory-more' href='#'>More information</a>
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
            errors: []
        }
    },

    created() {
        axios.get(`http://cryptonomics.lazycat.studio/wp-json/wp/v2/listing`)
        .then(response => {
            this.posts = response.data
            console.log(this.posts);
        })
        .catch(e => {
            this.errors.push(e)
        })
    },

    methods:{

        test : () => {
            console.log(this.posts);
        }

    }
}
</script>
