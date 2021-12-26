<template>
  <c-form-control>
    <c-form-label for="password">{{ label }}</c-form-label>
    <c-input-group>
      <c-input
        id="password"
        :value="value"
        pr="4.5rem"
        :type="show ? 'text' : 'password'"
        :placeholder="placeholder"
      />
      <c-input-right-element>
        <c-button h="1.75rem" mr="2" size="sm" @click="show = !show">
          <c-icon :name="show ? 'eye-slash' : 'eye'" />
        </c-button>
      </c-input-right-element>
    </c-input-group>
  </c-form-control>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: 'Password',
    },
    placeholder: {
      type: String,
      default: 'Enter password',
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style></style>
