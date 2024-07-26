<script setup lang="ts">
import { login } from '@/api'

// 登录方法
const handleLogin = async () => {
  // 调用登录接口
  const res = await login({
    username: 'admin',
    password: 'abc12345'
  })

  console.log('res', res)
}
</script>

<template>
  <main>
    <button @click="handleLogin">login</button>
  </main>
</template>
