<template>
  <div class="load-more-btn" @click="loadMore">
      <span>Load more</span>
  </div>
</template>

<script>
import {EventBus} from '../../store/event-bus'
export default {
    props : ['perPage'],
    data() {
        return {
            count: this.perPage 
        }        
    },
    methods:{
        loadMore(){
            this.count += 4
            EventBus.$emit("postPerPage", this.count)
        }
    }
}
</script>
