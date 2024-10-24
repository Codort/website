<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div
    id="mc_embed_shell"
    class="ms-7 p-0 sm:px-5 rounded-lg flex items-center justify-center align-middle"
  >
    <div id="mc_embed_signup">
      <form
        id="mc-embedded-subscribe-form"
        :action="formDetails.actionLink"
        method="post"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_self"
        novalidate=""
      >
        <div id="mc_embed_signup_scroll p-0 sm:px-5">
          <p class="text-md p-0 pt-3 text-center"></p>
          <div
            class="flex flex-col justify-center align-middle self-center mx-auto w-100 sm:w-[70%]"
          >
            <div class="mc-field-group">
              <label for="mce-EMAIL">
                Email Address
                <span class="asterisk">*</span>
              </label>
              <br />
              <input
                id="mce-EMAIL"
                type="email"
                name="EMAIL"
                class="required email input ps-2"
                required=""
                value=""
              />
            </div>
            <div v-if="props.beta" class="mc-field-group input-group p-3">
              <strong class="inline mr-2">
                Are you interested in being a beta tester?
              </strong>
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
                  />
                  <label for="mce-group[51289]-51289-0" class="p-5">Yes</label>
                </li>
              </ul>
              <span id="mce-group[51289]-HELPERTEXT" class="helper_text"></span>
            </div>
            <div
              id="mergeRow-gdpr"
              class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
            >
              <div class="content__gdpr p-3">
                <p>
                  By signing up you agree to your data being processed in line
                  with our
                  <a
                    href="https://docs.google.com/document/d/1wIBfNnJr3G19zIkc7fjeoZVdJZFhx2l4yDhjPws47iM/edit?usp=sharing"
                  >
                    Privacy Policy
                  </a>
                  . You can unsubscribe at any time.
                  <span class="asterisk">*</span>
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
                    <span class="p-5">I agree</span>
                  </label>
                </fieldset>
                <p></p>
              </div>
            </div>
            <div hidden="">
              <input type="hidden" name="tags" :value="formDetails.tagIds" />
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
            <div style="position: absolute; left: -5000px" aria-hidden="true">
              /* real people should not fill this in and expect good things - do
              not remove this or risk form bot signups */
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
</template>

<script lang="ts" setup>
const props = defineProps({
  formName: {
    type: String,
    default: 'newsletter',
    validator: (prop: string) =>
      ['newsletter', 'adopter', 'partner'].includes(prop),
  },
  beta: {
    type: Boolean,
    default: true,
  },
});

const formDetails = newsletterDetails(props.formName);
</script>

<style lang="scss" scoped>
ul li::before {
  content: none;
}
</style>
