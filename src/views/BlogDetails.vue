<template>
    <section class="blog-details-area" v-if="post">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <h2 class="title">{{ post[0].title.rendered }}</h2>
            <div class="meta">
                By
                <router-link class="author" :to="{ name: 'AuthorArchive', params: { id:post[0].author, name:post[0].post_author_data.user_nicename } }">{{ post[0].post_author_data.display_name }}</router-link>
              
                <a href="#">{{ dateFormate(post[0].date) }}</a>

                <a class="category"><span>In</span></a>
                <router-link 
                class="category cat-link"
                v-for="category in post[0].post_categories" 
                :key="category.term_id"
                :to="{ name: 'CategoryArchive', params: { id:category.cat_ID, name:category.slug } }"
                >
                {{ category.name }}
                </router-link>
              
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <img class="w-100" :src="post[0].post_featured_image" :alt="post[0].title.rendered">
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-8 m-auto">
            <div class="post-details-content">
              <div class="post-details-body">
                <div class="content">
                    <div v-html="post[0].content.rendered"></div>
                    <div class="author-info">
                        <div class="thumb">
                        <img :src="post[0].post_author_data.avatar" class="rounded-circle" alt="Image">
                        </div>
                        <div class="author-details">
                        <ul>
                            <li class="name">{{ post[0].post_author_data.display_name }}</li>
                        </ul>
                        <p>{{ post[0].post_author_data.author_bio }}</p>
                        </div>
                    </div>
                </div>
                <div class="portfolio-navigation">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="nav-prev" v-if="post[0].next_post">
                        <router-link :to="{ name: 'BlogDetails', params: { slug:post[0].next_post.slug } }">
                          <span><i class="lnr lnr-arrow-left"></i> Older</span>
                          {{ post[0].next_post.title }}
                        </router-link>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <div class="nav-next" v-if="post[0].previous_post">
                        <router-link :to="{ name: 'BlogDetails', params: { slug:post[0].previous_post.slug } }">
                          <span>Newer <i class="lnr lnr-arrow-right"></i></span>
                          {{ post[0].previous_post.title }}
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="blog-details-area text-center" v-else>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="loader">
                            <div class="spinner-grow text-success" style="width: 3rem; height: 3rem;" role="status">
                            <span class="sr-only"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import moment from 'moment'
import axios from 'axios';
export default {
    // props: ['slug'],
    data(){
        return{
            slug: this.$route.params.slug,
            post: null
        }
    },
    watch: {
        '$route'(to){
            this.slug = to.params.slug;
            this.getDateFromAPI();
            window.scrollTo(0, 0);
        }
    },
    methods: {
        dateFormate(value){
            if (value) {
                return moment(String(value)).format('DD MMMM YYYY')
            }
        },
        getDateFromAPI(){
            axios
            .get(`https://works.aiarnob.com/blog-api/wp-json/wp/v2/posts?per_page=1&slug=${this.slug}`)
            .then((response) => {
                this.post = response.data;
            })
        }
    },
    mounted() {
        this.getDateFromAPI();
    }
}
</script>

<style scoped>
    .cat-link::after {
        display: none;
    }

    a.category.cat-link {
        padding-left: 0!important;
        margin-left: 0!important;
        margin-right: 10px!important;
    }
</style>