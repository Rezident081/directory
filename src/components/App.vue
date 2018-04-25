<template>
    <div class="container-fluid">
        <div class="row">
            <Search/>
        </div>
        <div class="row">
            <CategoryList />
            <PostList />
        </div>
        <div class="row">
            <Modal/>
        </div>
    </div>
</template>

<script>
import PostList from './Main/Main-list'
import CategoryList from './Sidebar/Category-list'
import Search from './Search-form/Search'
import Modal from './Modal/Modal'
export default {
  components: {
      PostList,
      CategoryList,
      Search,
      Modal
  }
}
</script>