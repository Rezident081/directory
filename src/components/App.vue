<template>
    <div class="container-fluid">
        <div class="row">
            <Search/>
        </div>
        <div class="row">
            <CategContainer/>
            <PostContainer/>
        </div>
        <div class="row">
            <Modal/>
            <CreateForm/>
        </div>
    </div>
</template>

<script>
import PostContainer from "../components/post/Container"
import CategContainer from "../components/category/Container"
import Modal from "../components/modal/Modal"
import Search from "../components/form/Searchform"
import CreateForm from "../components/form/Createpost"
export default {
  components: {
      PostContainer,
      CategContainer,
      Modal,
      Search,
      CreateForm
  }
}
</script>