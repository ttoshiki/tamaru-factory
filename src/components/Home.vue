<template>
  <div class="home">
    <div class="home__worksWrapper">
      <div class="home__worksItem">
        <router-link to="/works/andshield">
          <img src="@/assets/andshield.jpg" alt="" class="works__image" />
        </router-link>
        <span class="home__clientName">&SHIELD inc.</span>
      </div>
      <div class="home__worksItem">
        <router-link to="/works/anmaketokyo">
          <img src="@/assets/anmaketokyo.jpg" alt="" />
          <span class="home__clientName">Anmake Tokyo</span>
        </router-link>
      </div>
      <div class="home__worksItem">
        <img src="@/assets/andshield.jpg" alt="" class="home__worksImage" />
        <span class="home__clientName">&SHIELD inc.</span>
      </div>
      <div class="home__worksItem">
        <img src="@/assets/anmaketokyo.jpg" alt="" />
        <span class="home__clientName">Anmake Tokyo</span>
      </div>
    </div>
    <div class="home__scrollbar" ref="scrollbar" id="scrollbar">
      <div class="home__scrollbarHandle" ref="scrollbarHandle" id="scrollbarHandle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {}
}
</script>

<style lang="scss">
@use '../styles/variables';

.home {
  position: absolute;
  top: 0;
  width: calc(100% - 96px);

  &__worksWrapper {
    margin-top: 120px;
  }

  &__clientName {
    display: block;
    margin-top: max(-4vw, -40px);
    margin-left: min(6.4vw, 64px);
    font-family: variables.$font-family-en;
    font-size: min(6.4vw, 64px);
    font-weight: 500;
    line-height: 1;
  }

  &__worksItem {
    position: relative;
    width: 100%;
    max-width: variables.$breakpoint-md;
    height: 100%;
    margin: 0 auto 48px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
