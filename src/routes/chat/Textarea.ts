import { goto } from "$app/navigation";

let disableDurationms = 5000
let parentElement: HTMLAreaElement | null = null

export function clearTextarea(node: HTMLElement) {
  (node as HTMLTextAreaElement).value = '';
}

function getCurrentTime(): string {
  const now = new Date();
  return new Intl.DateTimeFormat('de', {timeStyle:'short'}).format(now);
}

export async function handleSearch(textarea: HTMLTextAreaElement, ) {
  if (textarea.value.trim() !== '') {
    await goto('/chat/first-conv') //TODO: has to be dynamic
    
    parentElement = document.querySelector('#conversation')
    
    if (parentElement) {
      await createNewDiv(parentElement, textarea.value)
    }
    clearTextarea(textarea)

    textarea.disabled = true
    setTimeout(() => {
      textarea.disabled = false
      textarea.focus()
    }, disableDurationms)
  }
}

function createNewDiv(parent: HTMLElement, textareaContent: String) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('chat', 'chat-end');
  
  newDiv.innerHTML = '<div class="chat-image avatar placeholder"><div class="bg-neutral-focus text-neutral-content rounded-lg w-8"><span class=" text-sm">VG</span></div></div><div class="chat-header">Obi-Wan Kenobi <time class="text-xs opacity-50">'+getCurrentTime()+'</time></div><div class="chat-bubble">'+textareaContent+'</div><div class="chat-footer opacity-50">Delivered</div>';


  parent.append(newDiv);
}