<template>
    <div class="row">
        <CategContainer/>
        <PostContainer :catId="1"/>
    </div>

</template>

<script>
import PostContainer from "../components/post/Container.vue"
import CategContainer from "../components/category/Container.vue"
export default {
  components: {
      PostContainer,
      CategContainer
  }
}
</script>