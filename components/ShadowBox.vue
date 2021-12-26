<template>
  <c-flex
    w="100%"
    justify="center"
    align="center"
    direction="column"
    boxShadow="md"
    rounded="md"
    bg="white"
    :p="padding"
  >
    <slot></slot
  ></c-flex>
</template>

<script>
export default {
  props: {
    padding: {
      type: String,
      default: '2',
    },
  },
}
</script>

<style></style>
