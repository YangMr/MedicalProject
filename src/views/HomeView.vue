<script setup lang="ts">
import { getStaffList, login } from '@/api'
import { ref } from 'vue'
import type { StaffResponseType } from '@/api/types/IndexType'

// 登录方法
const handleLogin = async () => {
  // 调用登录接口
  const res = await login({
    username: 'admin',
    password: 'abc12345'
  })

  console.log('res', res)
}

const page = ref(1)
const pageSize = ref(10)
const data = {
  name: '',
  username: ''
}

const staffList = ref<StaffResponseType[]>([])

const getStaff = async () => {
  const res = await getStaffList(page.value, pageSize.value, data)
  staffList.value = res.data.data.rows
}
</script>

<template>
  <main>
    <button @click="handleLogin">login</button>
    <button @click="getStaff">getStaff</button>

    <ul>
      <li v-for="(item, index) in staffList" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </main>
</template>
