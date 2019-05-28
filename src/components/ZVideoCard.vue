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
  }
}
</script>

<style lang="scss">
.z-video-card {
  color: rgb(0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.12) 0 30px 60px;
  cursor: pointer;
  transition: all 0.2s ease 0s;
  border-radius: 5px;
  overflow: hidden;

  div {
    main {
      position: relative;
      cursor: pointer;
      background: rgb(0, 0, 0);

      .image {
        filter: grayscale(100%);
        transition: box-shadow 150ms ease-in 0s, filter 150ms ease-in 0s;
        overflow: hidden;

        figure {
          display: block;
          text-align: center;
          margin: 0;

          main {
            max-width: 100%;
            margin: 0 auto;

            .container {
              display: flex;
              justify-content: center;
              position: relative;

              img {
                height: 100%;
                width: 100%;
              }
            }
          }
        }
      }

      .play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -9px;
        margin-top: -15px;

        svg {
          opacity: 0.85;
          transition: opacity 150ms ease-in 0s;
          shape-rendering: crispEdges;
        }
      }
    }

    &:hover .image {
      filter: grayscale(0%);
    }
  }

  .details {
    padding: 15px 20px;

    h4 {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      margin-top: 0;
      margin-bottom: 0;
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-decoration: none;
      overflow: hidden;
    }

    p {
      color: rgb(153, 153, 153);
      font-size: 14px;
      line-height: 24px;
      max-width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
      text-decoration: none;
      overflow: hidden;
    }
  }

  &.dark .details h4 {
    color: rgb(255, 255, 255);
  }
}
</style>
