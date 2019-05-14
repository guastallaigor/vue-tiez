<template functional>
  <svg :width="props.size || '20px'" :height="props.size || '20px'" fill="none" aria-label="open" viewBox="0 0 15 15"><line x1="7.5" y1="2.18557e-08" x2="7.5" y2="15" :stroke="props.dark ? '#fff' : (props.color || '#000')"></line><line x1="15" y1="7.5" x2="-4.37114e-08" y2="7.5" :stroke="props.dark ? '#fff' : (props.color || '#000')"></line></svg>
</template>
