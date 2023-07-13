<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useCarefinderStore } from '@/stores/carefinder'
import { MdEditor, type ToolbarNames } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import type { IHealthCare } from '../../types/'


const toast = useToast()

const { addRecord }= useCarefinderStore()

const hospital_info = ref<IHealthCare>({
    name: '',
    city: '',
    state: '',
    details: 'Address: \nEmail: \nPhone: ',
})

const saveInfo = () => {
    if (hospital_info.value.name == null || hospital_info.value.city == '' || hospital_info.value.state == null) {
        toast.warning('Please fill in the empty spaces')
        return false
    }
    addRecord(hospital_info.value).then(
        (id) => {
            toast.success(`Saved Successfully with id: ${ id }`)
            // Reset values
            hospital_info.value = {
                name: '',
                city: '',
                state: '',
                details: 'Address: \nEmail: \nPhone: ',
            }
        })



    //  @on-change="changedtext"
}

// onMounted(() => {

// })

// const handleUpload = (file: any) => {
//   console.log(file)
//   return 'https://i.postimg.cc/52qCzTVw/pngwing-com.png'
// }


const toolbars: ToolbarNames[] = ['htmlPreview', 'quote', 'strikeThrough', 'github', 'catalog',]


</script>

<template>
    <h2>New Hospital</h2>
    <div class="admin__hospital">

        <input type="text" aria-label="hospital-name" name="hospital_name" v-model=" hospital_info.name "
            placeholder="Hospital Name">
        <input type="text" aria-label="hospital-city" name="hospital_city" v-model=" hospital_info.city "
            placeholder="City">
        <input type="text" aria-label="hospital-state" name="hospital_state" v-model=" hospital_info.state "
            placeholder="State">
        <!-- <input type="text" name="hospital_phone" id=""> -->
    </div>
    <MdEditor v-model=" hospital_info.details " language="en-US" codeTheme="github" style="width: inherit;"
        :toolbars-exclude=" toolbars " :on-save=" saveInfo " />

    <button class="btn" @click=" saveInfo ">Save Hospital</button>
</template>

<style>
.admin__hospital {
    display: flex;
    justify-content: space-between;
    margin: .5rem 0;
}

.admin__hospital>input {
    padding: 0.5rem;
    outline: none;
    border: none;
    border-radius: .3rem;
    border-bottom: 1px solid #111;
}

.admin__hospital input:first-child {
    flex-basis: 45%;
}

.admin__hospital>input:focus {
    border-color: hsla(160, 100%, 37%, 0.377);
}
</style>