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
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default {
  name: 'tfHome',
  methods: {
    horizontalScroll() {
      const sections = gsap.utils.toArray('.home__worksItem')

      gsap.registerPlugin(ScrollTrigger)

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
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
          end: () => '+=' + this.$el.querySelector('.home__worksWrapper').offsetWidth / 4
        }
      })
    }
  },
  mounted() {
    this.horizontalScroll()
  }
}
</script>

<style lang="scss">
@import '../styles/_variables';
@import '../styles/foundation/_base';

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
    width: 100%;
    height: auto;
    margin: 80px 0 0;
    overflow: hidden;
  }

  &__worksWrapper {
    display: flex;
    flex-wrap: nowrap;
    width: 400vw;
    height: 80vh;
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
      margin-left: 48px;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
