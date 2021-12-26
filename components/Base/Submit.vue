<template>
  <c-button
    :isDisabled="disabled"
    variant-color="blue"
    w="100%"
    maxW="400px"
    type="submit"
    mt="10"
  >
    {{ label ? label : $t('submit') }}</c-button
  >
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: () => {
        return this.$t('submit')
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
