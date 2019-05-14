<template functional>
  <svg :width="props.size || '20px'" :height="props.size || '20px'" viewBox="0 0 13 12" version="1.1" aria-label="checked"><g stroke="none" strokewidth="1.5" fill="none" fill-rule="evenodd"><rect :fill="props.dark ? '#fff' : (props.color || '#000')" x="0" y="0" width="12.4444444" height="12" rx="3"></rect><path d="M4 6l2.2 2.121" :stroke="props.dark ? '#000' : '#fff'" strokewidth="1.5" strokeLineCap="square"></path><path d="M12.6 1.75L6 8.114" :stroke="props.dark ? '#000' : '#fff'" strokewidth="1.5" strokeLineCap="square"></path></g></svg>
</template>
