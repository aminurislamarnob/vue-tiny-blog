<template>
  <BreadCrumb :title="'Blog Posts in ' + $route.params.name" pageName="Category Archive"></BreadCrumb>
  <section class="blog-grid-area pb-1">
    <div class="container">
      <div class="row" v-if="posts.length">
        <div class="col-md-6 col-lg-4" v-for="post in posts" :key="post.id">
            <div class="post-item">
              <div class="thumb">
                <router-link :to="{ name: 'BlogDetails', params: { slug:post.slug } }"><img :src="post.post_thumb_src" alt="Roomedia-Blog"></router-link>
              </div>
              <div class="content">
                <h4 class="title">
                  <router-link :to="{ name: 'BlogDetails', params: { slug:post.slug } }">{{ post.title.rendered }}</router-link>
                </h4>
                <p>{{ post.custom_excerpt }}</p>
                <div class="meta bottom meta-bottom">
                  <div>
                    <span class="category"><img class="icon-img" src="../assets/icons/layer.png" alt="Icon"> In 
                      <router-link 
                      class="category cat-link"
                      v-for="category in post.post_categories" 
                      :key="category.term_id"
                      :to="{ name: 'CategoryArchive', params: { id:category.term_id, name:category.slug } }"
                      >
                      {{ category.name }}
                      </router-link>
                    </span>
                    <a class="post-date" href="#"><img class="icon-img" src="../assets/icons/calender.png" alt="Icon"> {{ format_date(post.date) }}</a>
                  </div>
                  <!-- <div class="post-share">
                    <a class="icon-share" href="#/"><img class="icon-img" src="assets/img/icons/share.png" alt="Icon"></a>
                    <ul>
                      <li><a class="color-facebook" href="#/"><i class="social_facebook"></i></a></li>
                      <li><a class="color-twitter" href="#/"><i class="social_twitter"></i></a></li>
                      <li><a class="color-dribbble" href="#/"><i class="social_dribbble"></i></a></li>
                      <li><a class="color-pinterest" href="#/"><i class="social_pinterest"></i></a></li>
                    </ul>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
      </div>
      <div class="row" v-else>
        <div class="loader">
          <div class="spinner-grow text-success" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import axios from 'axios';
import BreadCrumb from '@/components/BreadCrumb.vue'

export default {
  name: 'CategoryArchive',
  inheritAttrs: false, // This is what disables attribute inheritance
  components: {
    BreadCrumb
  },
  data(){
    return{
        id: this.$route.params.id,
        posts: []
    }
  },
  methods: {
    format_date(value){
      if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
      }
    },
  },
  mounted() {
    axios
      .get(`https://works.aiarnob.com/blog-api/wp-json/wp/v2/posts?per_page=12&categories=${this.id}`)
      .then((response) => {
        this.posts = response.data;
        // console.log(response.data)
      })
  }
}
</script>

<style scoped>
.loader {
    text-align: center;
    margin-bottom: 80px;
}
span.category a {
    color: #42b883!important;
}
</style>