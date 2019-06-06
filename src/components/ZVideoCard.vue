<template>
  <div class="z-video-card" :class="{ dark }" :style="`width: ${width};`">
    <div v-if="src">
      <main>
        <div class="image">
          <figure>
            <main>
              <div class="container">
                <img :src="src" :alt="title || subtitle || ''">
              </div>
            </main>
          </figure>
        </div>
        <div class="play-icon">
          <svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="play">
            <path d="M23 14.875L0.5 29.4892L0.5 0.260821L23 14.875Z" fill="#fff"></path>
          </svg>
        </div>
      </main>
    </div>
    <div class="details" v-if="title && subtitle">
      <h4 :title="title" v-if="title">{{ title }}</h4>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'z-video-card',
  props: {
    src: {
      type: String,
      required: true,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '500px'
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({})
}
</script>
