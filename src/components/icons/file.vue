<template functional>
  <svg :width="props.size || '20px'" :height="props.size || '20px'" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="file"><path d="M10 8C8.34 8 7 6.66 7 5V1H3C1.9 1 1 1.9 1 3V16C1 17.1 1.9 18 3 18H12C13.1 18 14 17.1 14 16V8H10ZM8 5C8 6.1 8.9 7 10 7H13.59L8 1.41V5ZM3 0H8L15 7V16C15 17.66 13.66 19 12 19H3C1.34 19 0 17.66 0 16V3C0 1.34 1.34 0 3 0Z" :fill="props.dark ? '#fff' : (props.color || '#000')"></path></svg>
</template>
