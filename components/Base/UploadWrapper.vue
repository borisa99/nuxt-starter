<template>
  <c-box position="relative">
    <input
      v-chakra
      position="absolute"
      h="100%"
      w="100%"
      opacity="0"
      zIndex="2"
      cursor="pointer"
      type="file"
      name=""
      @change="onFileChange"
    />
    <slot v-chakra pointerEvents="none"> </slot>
  </c-box>
</template>

<script>
import { UPLOAD_FILE } from '@/graphql/file/mutations'
export default {
  methods: {
    onFileChange(e) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
      })

      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = async (e) => {
        const res = await this.$apollo.mutate({
          mutation: UPLOAD_FILE,
          variables: {
            file: e.target.result,
          },
        })
        this.$emit('file-uploaded', res.data.file_upload.value)

        this.$nuxt.$loading.finish()
      }
      reader.readAsDataURL(file)
    },
  },
}
</script>

<style></style>
