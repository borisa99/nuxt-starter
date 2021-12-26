<template>
  <c-flex height="100vh" bg="white">
    <c-flex w="100%" align="center" justify="center">
      <c-flex minW="300px" maxW="400px" w="100%">
        <BaseForm templateColumns="1fr" @submit="onSubmit">
          <BaseTextField
            v-model="email"
            name="email"
            :label="$t('email')"
            :placeholder="$t('email')"
            rules="required"
          />
          <BaseTextField
            v-model="password"
            type="password"
            name="password"
            :label="$t('password')"
            :placeholder="$t('password')"
            rules="required"
          />
        </BaseForm>
      </c-flex>
    </c-flex>
    <c-box bg="blue.200" w="100%" p="4" color="white"> </c-box>
  </c-flex>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async onSubmit() {
      try {
        await this.$auth.loginWith('local', {
          data: { email: this.email, password: this.password },
        })
      } catch (err) {}
    },
  },
}
</script>

<style></style>
