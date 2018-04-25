<template>
    <modal name="single-post" 
        @before-open="beforeOpen" 
        :adaptive='true' 
        :maxWidth='800' 
        :height='`auto`'
        :scrollable='true'>
        <div class="modal-inner">
            <div class="modal-img" v-if="img">
                <img :src="img" alt="post logo">
            </div>
            <div class="modal-title" v-if="title">
                {{ title }}
            </div>
            <div class="modal-description" v-if="description">
                {{ description | clearText }}
            </div>
            <a :href=" ( link ) ? link : '#' " target="_blank" > Visit website </a>
        </div>
    </modal>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            img : null,
            title : null,
            description : null,
            link : null
        }
    },
    methods : {
        beforeOpen(event){
            this.img = ( event.params._embedded['wp:featuredmedia'] !== undefined ) ? event.params._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url : null;
            this.title = event.params.title.rendered;
            this.description = event.params.content.rendered;
            this.link = event.params.acf.l_website_link;
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



