<template>
    <transition name='animateBlock' enter-active-class="animated fadeIn">
        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <div class="directory-item">
                <div class="directory-content">
                    <div class="directory-title">{{ post.title.rendered }}</div>
                    <span class="directory-shortC">{{ post.excerpt.rendered | clearText }}</span>
                    <a href="#" class="directory-more" @click.prevent='openModal'>More information</a>
                </div>
            </div>
        </div>
    </transition>  
</template>

<script>
export default {
    props: ['post'],
    methods:{
        openModal(){
            this.$modal.show('single-post', this.post);
        }
    },
    filters: {
        clearText(value){
            if(!value) return;
            return value.replace(/<\/?[^>]+>/g, "");
        }
    }
}
</script>

