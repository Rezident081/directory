<template>
  <div class="col-lg-2 directory-cat">
      <Title text='Categories' />
      <ul>
          <Item 
            v-for="category of categories"
            :key='category.id'
            :category='category'
          />
      </ul>
      <div class="preload" v-if="!categories.length"></div>
  </div>
</template>

<script>
import Title from './Category-title'
import Item from './Category-list-item'
export default {
    components : {
        Title,
        Item
    },
    data(){
        return {
            categories : []
        }
    },
    created(){
        this.$http.get(`//cryptonomics.lazycat.studio/wp-json/wp/v2/cat_listing?per_page=100`)
            .then(response => {
                this.categories = response.body;
            })
    }
}
</script>

