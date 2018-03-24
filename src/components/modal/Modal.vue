<template>
<transition name="modal">
      <div class="modal-wrapper" v-if="isOpen" @click.stop="isOpen = false">
        <div class="overlay"></div>
        <div class="modal-container">

            <div class="modal-img">
                <img  :src="post.acf.l_logo.sizes.medium" 
                      :width="post.acf.l_logo.sizes['medium-width']" 
                      :height="post.acf.l_logo.sizes['medium-height']" />
            </div>
            <div class="modal-text">
                <h3>{{post.title.rendered}}</h3>
                <div>{{post.content.rendered | clearText}}</div>
                <a :href="post.acf.l_website_link || 2">Visit website </a>
            </div>

        </div>
      </div>
  </transition>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            isOpen: false,
            post: null,
            errors: []
        }
    },
    created() {

        this.$store.$on("getPostData", this.getCurrPost);

    },
    filters: {

        clearText(value){
            if(!value) return;
            return value.replace(/<\/?[^>]+>/g, "");
        }

    },
    methods: {

        getCurrPost(data){

            if(!data.id) return;
            axios.get(`http://cryptonomics.lazycat.studio/wp-json/wp/v2/listing/`+data.id)
                .then(response => {
                    this.post = response.data
                    this.isOpen = true
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }

    }
}
</script>

<style scoped>

.modal-wrapper {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-container {
  position: fixed;
  right: 0;
  left: 0;
  top: 30%;
  z-index: 11;
  max-width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>



