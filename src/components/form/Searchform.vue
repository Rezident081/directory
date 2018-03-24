<template>
    <form action="#" v-on:submit.prevent="onSumbit">
        <div class="form-group">
            <div class="input-group">
                <input type="text" class="col-md-11 col-10" v-model="query" name="search-directory" placeholder="Search...">
                <span class="input-group-btn col-md-1 col-2"> 
                    <button type="submit">Search</button> 
                </span>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    data(){
        return {
            query: ""
        }
    },
    methods: {
        onSumbit(){
            this.$store.$emit("handle-submit", this.query);
        }
    }
}
</script>

