<!-- Licensed under Apache-2.0. See LICENSE and NOTICE in the root-level directory for full license and copyright details. -->
<template>
  <div id="mc_embed_shell" class="p-0 rounded-lg">
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
        <div id="mc_embed_signup_scroll p-0" class="flex flex-col">
          <div
            class="flex flex-col sm:flex-row align-middle items-center self-center gap-2 w-[300px] sm:w-full"
          >
            <div class="mc-field-group self-center grow w-full">
              <input
                id="mce-EMAIL"
                type="email"
                name="EMAIL"
                class="required email input p-0 m-0 ps-2 me-20 dark:border-white h-[2.5rem] grow w-full"
                required=""
                value=""
                placeholder="Email address"
              />
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
            <div
              class="border-black dark:border-white border-2 hover:border-coral hover:dark:border-coral transition-all duration-300 rounded-md self-center grow w-full sm:w-[270px]"
            >
              <button
                id="mc-embedded-subscribe"
                type="submit"
                name="subscribe"
                class="inline-flex items-center m-0 p-0 px-2 h-[2.5rem]"
              >
                <Icon name="ic:email" color="black" size="20px" />
                <span v-if="formName === 'newsletter'" class="ps-2"
                  >Subscribe to our newsletter</span
                >
                <span v-if="formName === 'adopter'" class="ps-2"
                  >Join Waiting List</span
                >
              </button>
            </div>
          </div>
          <div
            id="mergeRow-gdpr"
            class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
          >
            <div class="content__gdpr ps-1 py-2">
              <fieldset
                class="mc_fieldset gdprRequired mc-field-group pb-2"
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
                  <span class="ms-1">
                    I agree to my data being processed in line with the Codort
                    <a
                      href="https://docs.google.com/document/d/1wIBfNnJr3G19zIkc7fjeoZVdJZFhx2l4yDhjPws47iM/edit?usp=sharing"
                    >
                      Privacy Policy</a
                    >
                    <span class="asterisk">*</span>
                  </span>
                </label>
              </fieldset>
              <p></p>
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
});

const formDetails = newsletterDetails(props.formName);
</script>
