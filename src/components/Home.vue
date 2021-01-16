<template>
  <div class="home">
    <div class="home__scroll">
      <div class="home__worksWrapper">
        <div class="home__worksItem">
          <img src="@/assets/andshield.jpg" alt="" class="works__image" />
          <p>&SHIELD inc.</p>
        </div>
        <div class="home__worksItem">
          <img src="@/assets/anmaketokyo.jpg" alt="" />
          <p>Anmake Tokyo</p>
        </div>
        <div class="home__worksItem">
          <img src="@/assets/andshield.jpg" alt="" class="works__image" />
          <p>&SHIELD inc.</p>
        </div>
        <div class="home__worksItem">
          <img src="@/assets/anmaketokyo.jpg" alt="" />
          <p>Anmake Tokyo</p>
        </div>
      </div>
    </div>
    <div class="home__scrollbar" ref="scrollbar" id="scrollbar">
      <div class="home__scrollbarHandle" ref="scrollbarHandle" id="scrollbarHandle"></div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default {
  name: 'Home',
  data: function() {
    return {
      scrollItem: 4
    }
  },
  methods: {
    horizontalScroll() {
      const sections = '.home__worksWrapper'

      gsap.registerPlugin(ScrollTrigger)

      gsap.to(sections, {
        xPercent: -60,
        // xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.home',
          pin: true,
          start: 'top',
          markers: false,
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: { min: 0.2, max: 0.3 },
            delay: 0
          },
          // Base vertical scrolling on how wide the container is so it feels more natural.
          end: () =>
            '+=' + this.$el.querySelector('.home__worksWrapper').offsetWidth / this.scrollItem
        }
      })
    },
    calculateScrollbarWidth() {
      this.scrollbarWidth = this.$refs.scrollbar.clientWidth + ((window.innerWidth / 100) * 5.5) / 3
    },
    calculateScrollbarHandleWidth() {
      console.log('scrollbarwidth', this.scrollbarWidth)
      this.$refs.scrollbarHandle.style.width = this.scrollbarWidth / this.scrollItem + 'px'
    },
    moveScrollbar() {
      window.addEventListener('scroll', () => {
        const scrollRatio =
          (window.pageYOffset / this.scrollbarWidth) * 100 -
          (window.pageYOffset / this.scrollbarWidth / this.scrollItem) * 100
        console.log(scrollRatio)
        this.$refs.scrollbarHandle.style.left = scrollRatio + '%'
      })
    }
  },
  mounted() {
    this.calculateScrollbarWidth()
    this.calculateScrollbarHandleWidth()
    this.horizontalScroll()
    this.moveScrollbar()
  }
}
</script>

<style lang="scss">
@use '../styles/variables';

.home {
  position: absolute;
  top: 0;
  width: 100vw;

  &__scrollWrapper {
    position: fixed;
  }

  &__scroll {
    position: relative;
    display: block;
    width: calc(100% - 96px);
    height: auto;
    margin: 96px 0 0;
    overflow: hidden;
  }

  &__worksWrapper {
    display: flex;
    flex-wrap: nowrap;
    width: 400vw;
    height: 36vw;
    max-height: 600px;
    padding: 0;
    overflow: hidden;
  }

  &__worksItem {
    position: relative;
    width: 72vw;
    height: 100%;
    margin-right: 5.5vw;
    overflow: hidden;
    text-align: left;

    img {
      width: 100%;
      object-fit: cover;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 48px;
    }
  }

  &__scrollbar {
    position: relative;
    left: 0;
    width: calc(100% - 96px);
    height: 1px;
    margin-top: clamp(48px, 7vw, 64px);
    background-color: variables.$color-dark-060;
  }

  &__scrollbarHandle {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    background-color: variables.$color-primary-100;
    transition: all 0.1s;
  }
}
</style>
