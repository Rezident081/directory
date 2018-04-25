<template>
    <form action="#" v-on:submit.prevent="sumbitHandle" id="search-form">
        <div class="form-group">
            <div class="input-group">
                <input type="text" class="col-md-11 col-10" v-model="query" placeholder="Search...">
                <span class="input-group-btn col-md-1 col-2"> 
                    <button type="submit">Search</button> 
                </span>
            </div>
        </div>
    </form>
</template>

<script>
import {EventBus} from '../../store/event-bus'
export default {
    data(){
        return {
            query: ""
        }
    },
    methods: {
        sumbitHandle(){
            EventBus.$emit("sortByTitle", this.query);
        }
    }
}
</script>