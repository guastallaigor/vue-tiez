<template functional>
  <svg :width="props.size || '20px'" :height="props.size || '20px'" viewBox="0 0 11 11" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" aria-label="open"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="11" height="11" rx="1.5"></rect><rect :stroke="props.dark ? '#fff' : (props.color || '#000')" stroke-width="0.8" x="1" y="1" width="9" height="9" rx="1.5"></rect><path d="M3.5 5.5h4" :stroke="props.dark ? '#fff' : (props.color || '#000')" stroke-width="0.8"></path></g></svg>
</template>
