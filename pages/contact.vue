<template>
  <div class="relative w-full flex flex-col items-center my-0 py-0 pt-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="ms-5 sm:ms-10">
        <div
          class="pt-[100px] sm:pt-0 px-0 py-3 sm:p-3 text-left border-b-4 border-cdtyellow text-lg lg:text-2xl"
        >
          <p class="pb-2 text-2xl/[40px]">
            Email us at
            <a class="a" href="mailto:hello@codort.com">hello@codort.com</a>
            to learn more about Codort. Subscribe to our mailing list to stay up
            to date with our latest news including blogs, feature updates,
            opportunities to contribute and job posts.
          </p>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          id="mc_embed_shell"
          class="ms-7 p-0 sm:p-5 rounded-lg pb-10 pt-5 sm:py-0 sm:py-9 max-w-3xl sm:mt-[100px] md:mt-0 flex items-center justify-center align-middle"
        >
          <div id="mc_embed_signup">
            <form
              id="mc-embedded-subscribe-form"
              action="https://codort.us14.list-manage.com/subscribe/post?u=1ace6638ad702b3ee9eb639b1&amp;id=6e0c8184b8&amp;v_id=4921&amp;f_id=00ceb7e5f0"
              method="post"
              name="mc-embedded-subscrie-form"
              class="validate"
              target="_self"
              novalidate=""
            >
              <div id="mc_embed_signup_scroll p-0 sm:px-5">
                <p class="text-md p-0 pt-3 sm:p-7 text-center"></p>
                <div
                  class="flex flex-col justify-center align-middle self-center mx-auto w-100 sm:w-[70%]"
                >
                  <div class="mc-field-group">
                    <label for="mce-FNAME">
                      First Name<span class="asterisk">*</span></label
                    ><br />
                    <input
                      id="mce-FNAME"
                      type="text"
                      name="FNAME"
                      class="required text input"
                      required=""
                      value=""
                    />
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-LNAME">
                      Last Name<span class="asterisk">*</span></label
                    ><br />
                    <input
                      id="mce-LNAME"
                      type="text"
                      name="LNAME"
                      class="required text input"
                      required=""
                      value=""
                    />
                  </div>
                  <div class="mc-field-group">
                    <label for="mce-EMAIL">
                      Email Address<span class="asterisk">*</span></label
                    ><br />
                    <input
                      id="mce-EMAIL"
                      type="email"
                      name="EMAIL"
                      class="required email input"
                      required=""
                      value=""
                    />
                  </div>
                  <div class="mc-field-group input-group p-3">
                    <strong class="inline mr-2">
                      Are you interested in being a beta tester?</strong
                    >
                    <p class="inline">
                      Tick here to get early access to our platform.
                    </p>
                    <ul>
                      <li class="p-2">
                        <input
                          id="mce-group[51289]-51289-0"
                          type="checkbox"
                          name="group[51289][1]"
                          value=""
                        /><label for="mce-group[51289]-51289-0" class="p-5">
                          Yes</label
                        >
                      </li>
                    </ul>
                    <span
                      id="mce-group[51289]-HELPERTEXT"
                      class="helper_text"
                    ></span>
                  </div>
                  <div
                    id="mergeRow-gdpr"
                    class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                  >
                    <div class="content__gdpr p-3">
                      <p>
                        By signing up to our mailing list you agree to your data
                        being processed in line with our
                        <a
                          href="https://docs.google.com/document/d/1wIBfNnJr3G19zIkc7fjeoZVdJZFhx2l4yDhjPws47iM/edit?usp=sharing"
                        >
                          Privacy Policy</a
                        >. You can unsubscribe at any time.<span
                          class="asterisk"
                        >
                          *</span
                        >
                      </p>
                      <fieldset
                        class="mc_fieldset gdprRequired mc-field-group p-2"
                        name="interestgroup_field"
                      >
                        <label class="checkbox subfield" for="gdpr345557">
                          <input
                            id="gdpr_345557"
                            type="checkbox"
                            name="gdpr[345557]"
                            class="gdpr"
                            value="Y"
                          />
                          <span class="p-5">I agree</span></label
                        >
                      </fieldset>
                      <p></p>
                    </div>
                  </div>
                  <div hidden="">
                    <input type="hidden" name="tags" value="40181567" />
                  </div>
                  <div id="mce-responses" class="clear foot">
                    <div
                      id="mce-error-response"
                      class="response"
                      style="display: none"
                    ></div>
                    <div
                      id="mce-success-response"
                      class="response"
                      style="display: none"
                    ></div>
                  </div>
                  <div
                    style="position: absolute; left: -5000px"
                    aria-hidden="true"
                  >
                    /* real people should not fill this in and expect good
                    things - do not remove this or risk form bot signups */
                    <input
                      type="text"
                      name="b_1ace6638ad702b3ee9eb639b1_6e0c8184b8"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="clear foot flex button self-center">
                    <button
                      id="mc-embedded-subscribe"
                      type="submit"
                      name="subscribe"
                      class="flex items-center"
                    >
                      <Icon name="ic:email" color="black" size="20px" />
                      <span class="pl-2">Subscribe</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact Us',
});

definePageMeta({
  layout: 'hero',
});
</script>

<style scoped>
.bg-gradient {
  background: radial-gradient(
    circle at 0% 140%,
    #e5fcf5 0%,
    #f0afae 40%,
    #7db6c3 100%
  );
}
</style>
