<template>
  <main class="main-content site-wrapper-reveal">
    <!--== Start Page Title Area ==-->
    <section class="page-title-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-title-content text-center pb-md-30 pb-55">
              <h2 class="title">Contact <span>Us</span></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--== End Page Title Area ==-->

    <!--== Start Contact Area ==-->
    <section class="contact-area pt-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">            
            <div class="contact-form">
              <form class="contact-form-wrapper">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="section-title text-center">
                      <h2 class="title">Get In Touch</h2>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-10 m-auto">
                    <div class="row row-gutter-20">
                      <div class="col-md-4">
                        <div class="form-group">
                          <input class="form-control" type="text" name="con_name" placeholder="Your Name">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <input class="form-control" type="email" name="con_email" placeholder="Email Address">
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <input class="form-control" type="text" name="con_subject" placeholder="Subject (optional)">
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group mb-0">
                          <textarea name="con_message" rows="5" placeholder="Your message here..."></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 text-center">
                        <div class="form-group mb-0">
                          <button class="btn btn-theme" type="submit">Submit Message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <!-- Message Notification -->
            <div class="form-message"></div>
          </div>
        </div>
      </div>
    </section>
    <!--== End Contact Area ==-->
  </main>
</template>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Contact',
  components: {
    
  }
}
</script>