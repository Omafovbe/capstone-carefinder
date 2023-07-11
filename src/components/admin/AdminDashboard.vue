<script setup lang="ts">
import { ref } from 'vue'
import { MdEditor, type ToolbarNames } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import '@/assets/iconfont.js'

const content = ref('')
// const changedtext = () => {
//     console.log(content)
//  @on-change="changedtext"
// }

// const handleUpload = (file: any) => {
//   console.log(file)
//   return 'https://i.postimg.cc/52qCzTVw/pngwing-com.png'
// }

console.log(content)
const toolbars: ToolbarNames[] = ['save']
const iconfont: boolean = true

</script>

<template>
    <MdEditor 
                v-model="content" 
                language="en-US"
                :no-iconfont="iconfont" 
                codeTheme="github"
                style="width: inherit;"
                :toolbars-exclude="toolbars"
            />
</template>