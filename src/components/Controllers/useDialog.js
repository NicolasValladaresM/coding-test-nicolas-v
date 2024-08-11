import { ref, watch } from 'vue'

export const useDialog = (props, emit) => {
  const dialogVisible = ref(props.dialog)

  watch(() => props.dialog, (a) => {
    dialogVisible.value = a
  })
  watch(dialogVisible, (b) => {
    emit('update:dialog', b)
  })
  const cleanCommentText = (comment) => {
    const textarea = document.createElement('textarea')
    textarea.innerHTML = comment
    const decodedText = textarea.value
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = decodedText
    return tempDiv.textContent || tempDiv.innerText || ''
  }
  const cleanTag = (tag) => {
    return tag.replace(/^(author_|story_)/, '')
  }

  return { dialogVisible, cleanCommentText, cleanTag }
}
