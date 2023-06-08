
let disableDurationms = 5000
let parentElement: HTMLAreaElement | null = null


function getCurrentTime(): string {
  const now = new Date();
  return new Intl.DateTimeFormat('de', {timeStyle:'short'}).format(now);
}


function createNewDiv(parent: HTMLElement, textareaContent: String) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('chat', 'chat-end');
  
  newDiv.innerHTML = '<div class="chat-image avatar placeholder"><div class="bg-neutral-focus text-neutral-content rounded-lg w-8"><span class=" text-sm">VG</span></div></div><div class="chat-header">Obi-Wan Kenobi <time class="text-xs opacity-50">'+getCurrentTime()+'</time></div><div class="chat-bubble">'+textareaContent+'</div><div class="chat-footer opacity-50">Delivered</div>';


  parent.append(newDiv);
}