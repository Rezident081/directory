<template>
    <div class="col-lg-10 directory-blocks">
        <div class="row">
            <Item 
                v-for='(post,index) of posts'
                v-if="index < perPage"
                :key='post.id'
                :post='post'
            />
        </div>
        <LoadMore :perPage='perPage' v-if="perPage < posts.length" />
        <div class="preload" v-if="!posts.length"></div>
    </div>
</template>

<script>
import Item from './Main-list-item'
import LoadMore from './Main-more-btn'
import {EventBus} from '../../store/event-bus'
export default {
    components : {
        Item,
        LoadMore,
    },
    data(){
        return {
            posts : [],
            defaultPosts : [],
            perPage : 8
        }
    },
    methods : {
        sortById(id){
            this.posts = this.defaultPosts.filter( el => {
                return el.cat_listing.includes(id);
            })
        },
        sortByTitle(val){
            this.posts = this.defaultPosts.filter( el => {
                const str = [el.title.rendered, el.content.rendered, el.excerpt.rendered].join('');
                return str.includes(val);
            })
        },
        setPostPerPage(num){
            this.perPage = num;
        }
    },
    created(){
        this.$http.get(`//cryptonomics.lazycat.studio/wp-json/wp/v2/listing?_embed=true&per_page=100`)
            .then(response => {
                this.posts = this.defaultPosts = response.body;
            });
    },
    mounted(){
        EventBus.$on('sortById', this.sortById);
        EventBus.$on('sortByTitle', this.sortByTitle);
        EventBus.$on('postPerPage', this.setPostPerPage);
    }
}
</script>

