<template>
  <c-box>
    <c-text>{{ $auth.hasScope('super_admin') }}</c-text>
    <c-button @click="$auth.logout()">Logout</c-button>
    <c-button @click="$auth.refreshTokens()">REfresh</c-button>
    <nuxt-link to="/dashboard/test"> test</nuxt-link>
  </c-box>
</template>

<script>
export default {}
</script>

<style></style>
