<template>
  <c-flex w="100%" minH="100vh" px="5" justify="center" align="center">
    <ShadowBox>
      <BaseForm templateColumns="1fr 1fr" @submit="register">
        <c-flex align="center">
          <c-flex direction="column" align="center" justify="center" mr="5">
            <c-flex direction="column" alignItems="center">
              <BaseUploadWrapper
                @file-uploaded="(url) => onFileUploaded(url, 'avatar_url')"
              >
                <c-flex direction="column" alignItems="center" justify="center">
                  <BaseAvatar :src="model.avatar_url" />
                  <c-button variant-color="blue" size="xs">{{
                    $t('upload')
                  }}</c-button>
                </c-flex>
              </BaseUploadWrapper>
              <c-text mt="1">{{ $t('avatar') }}</c-text>
            </c-flex>
          </c-flex>
          <BaseUploadWrapper
            style="width: 100%"
            @file-uploaded="(url) => onFileUploaded(url, 'banner_url')"
          >
            <c-flex
              justify="center"
              align="center"
              h="120px"
              bg="gray.300"
              borderRadius="5px"
              overflow="hidden"
            >
              <c-text v-if="!model.banner_url">{{
                $t('click_or_drop_banner')
              }}</c-text>
              <nuxt-img v-else :src="model.banner_url" />
            </c-flex>
          </BaseUploadWrapper>
        </c-flex>
        <c-box></c-box>
        <BaseTextField
          v-model="model.first_name"
          name="first_name"
          :label="$t('first_name')"
          :placeholder="$t('first_name')"
          rules="required"
        />
        <BaseTextField
          v-model="model.last_name"
          name="last_name"
          :label="$t('last_name')"
          :placeholder="$t('last_name')"
          rules="required"
        />
        <BaseTextField
          v-model="model.username"
          name="username"
          :label="$t('username')"
          :placeholder="$t('username')"
          rules="required"
        />
        <c-grid templateColumns="1fr 1fr" rowGap="2">
          <BaseTextField
            v-model="model.password"
            name="password"
            :label="$t('password')"
            :placeholder="$t('password')"
            rules="required|password:@confirm"
            type="password"
          />
          <BaseTextField
            v-model="password_confirmation"
            name="confirm"
            :label="$t('password_confirmation')"
            :placeholder="$t('password_confirmation')"
            rules="required"
            type="password"
          />
        </c-grid>
      </BaseForm>
    </ShadowBox>
  </c-flex>
</template>

<script>
import { REGISTER_USER } from '@/graphql/auth/mutations'
export default {
  auth: false,
  asyncData({ route, redirect }) {
    const ticket = route.query.ticket
    if (!route.query.ticket) {
      redirect('/')
    }
    return {
      model: {
        ticket,
        first_name: '',
        last_name: '',
        password: '',
        avatar_url: '',
        username: '',
        banner_url: '',
      },
      password_confirmation: '',
    }
  },
  methods: {
    async register() {
      try {
        await this.$apollo.mutate({
          mutation: REGISTER_USER,
          variables: {
            user: this.model,
          },
        })
        this.$toasted.success(this.$t('register_success'))
        this.$nuxt.$loading.start()
        setTimeout(() => {
          this.$nuxt.$loading.finish()
          this.$router.push('/')
        }, 1000)
      } catch (error) {}
    },
    onFileUploaded(url, key) {
      this.model[key] = url
    },
  },
}
</script>

<style></style>
