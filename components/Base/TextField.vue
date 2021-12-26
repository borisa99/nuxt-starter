<template>
  <ValidationProvider v-slot="{ errors }" :name="name" :rules="rules">
    <c-box position="relative">
      <c-text>{{ label }}</c-text>
      <!-- <c-input-group> -->
      <c-input
        :id="name"
        :isInvalid="errors && errors.length > 0"
        errorBorderColor="red.200"
        :value="value"
        :placeholder="placeholder"
        :type="show ? 'text' : type"
        @input="(value) => $emit('input', value)"
      />
      <c-box
        v-if="type === 'password'"
        pos="absolute"
        top="8"
        right="0"
        zIndex="2"
      >
        <c-button h="1.75rem" mr="2" size="sm" @click="show = !show">
          <c-icon :name="show ? 'eye-slash' : 'eye'" />
        </c-button>
      </c-box>
      <!-- </c-input-group> -->
      <c-text
        v-chakra
        maxW="100% !important"
        overflow="hidden"
        color="red.500"
        class="error-message"
        >{{ errors[0] }}</c-text
      >
    </c-box>
  </ValidationProvider>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style scoped>
.error-message {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
