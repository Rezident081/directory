<template>
    <li>
        <a href="#" @click.prevent="clickHandle">{{category.name}}</a>
        <span class="cat-count" >{{category.count}}</span>
    </li>
</template>

<script>
import {EventBus} from '../../store/event-bus'
export default {
    props : ['category'],
    methods : {
        clickHandle(){
            EventBus.$emit('sortById', this.category.id);
        }
    }
}
</script>

