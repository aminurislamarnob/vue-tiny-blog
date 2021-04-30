<template>
    <section class="page-title-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title-content text-center pb-lg-30 pb-80">
              <h2 class="title">{{ title }}</h2>
              <div class="bread-crumbs pb-1"><router-link to="/">Home<span class="breadcrumb-sep">/</span></router-link><span class="active">{{ pageName }}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  name: 'BreadCrumb',
  props: {
    title: String,
    pageName: String
  }
}
</script>