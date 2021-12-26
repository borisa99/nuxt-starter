<template>
  <c-flex
    :w="size"
    :h="size"
    bg="gray.300"
    borderRadius="50%"
    m="1"
    justify="center"
    align="center"
    overflow="hidden"
  >
    <c-icon v-if="!src" name="user" color="gray.500" :size="`${size - 20}px`" />
    <nuxt-img v-else :src="src" />
  </c-flex>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 50,
    },
    src: {
      type: String,
      default: null,
    },
  },
}
</script>

<style></style>
