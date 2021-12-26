<template>
  <ValidationObserver v-slot="{ handleSubmit }" class="base-observer">
    <form
      v-chakra
      w="100%"
      :p="padding"
      :maxW="maxWidth"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <c-grid
        :templateColumns="templateColumns"
        :rowGap="rowGap"
        :columnGap="columnGap"
      >
        <slot></slot>
      </c-grid>
      <BaseSubmit :label="submitLabel ? submitLabel : $t('submit')" />
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  props: {
    submitLabel: {
      type: String,
      default: '',
    },
    templateColumns: {
      type: String,
      default: 'repeat(3, 1fr)',
    },
    rowGap: {
      type: String,
      default: '3',
    },
    columnGap: {
      type: String,
      default: '3',
    },
    maxWidth: {
      type: String,
      default: '100%',
    },
    padding: {
      type: String,
      default: '2',
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit')
    },
  },
}
</script>

<style scoped>
.base-observer {
  width: 100%;
}
</style>
