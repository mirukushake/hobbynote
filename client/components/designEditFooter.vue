<template>
  <Button
    type="button"
    label="Cancel"
    icon="pi pi-times"
    @click="closeDialog({ buttonType: 'No' })"
    text
  ></Button>
  <Button
    type="button"
    label="Update"
    icon="pi pi-check"
    @click="closeDialog({ buttonType: 'Yes' })"
    autofocus
  ></Button>
</template>

<script setup>
import { inject } from "vue"

const emits = defineEmits(["sendData"])
const dialogRef = inject("dialogRef")

const closeDialog = (e) => {
  dialogRef.value.close(e)
}

const submit = () => emits("sendData", true)
</script>
