<script setup lang="ts">
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

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

</script>
<template>
    <MdEditor
        v-model="content" 
        language="en-US"
        
    />
    <hr>
    
</template>

<style scoped>
.editor{
    height: 500px;
}
</style>