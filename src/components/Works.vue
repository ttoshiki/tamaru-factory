<template>
  <div class="Works">
    <div class="works__wrapper">
      <main class="works__main">
        <div class="works__mainVisual">
          <figure class="works__mainImage">
            <img src="@/assets/andshield.jpg" alt="" class="works__image" />
          </figure>
          <h1 class="works__clientName">&SHIELD inc.</h1>
        </div>
        <dl class="works__about">
          <dt>about</dt>
          <dd>
            <p class="works__paragraph">
              衛星用品の販売・衛星関連サービスなどを手掛ける、株式会社 AND
              SHIELD様のコーディングを担当させていただきました。
            </p>
          </dd>
        </dl>
        <ul class="works__list">
          <li class="works__item">
            <h2 class="works__subHeading">Design</h2>
          </li>
          <li class="works__item">
            <h2 class="works__subHeading">Released</h2>
          </li>
          <li class="works__item">
            <img src="@/assets/andshield_d01.jpg" alt="" />
          </li>
          <li class="works__item">
            <img src="@/assets/andshield_r01.jpg" alt="" />
          </li>
          <li class="works__item">
            <img src="@/assets/andshield_d02.jpg" alt="" />
          </li>
          <li class="works__item">
            <img src="@/assets/andshield_r02.jpg" alt="" />
          </li>
          <li class="works__item">
            <img src="@/assets/andshield_d03.jpg" alt="" />
          </li>
          <li class="works__item">
            <img src="@/assets/andshield_r03.jpg" alt="" />
          </li>
        </ul>
      </main>
      <div class="works__footer">
        <div class="works__footerWrapper">
          <h2 class="works__footerHeading">
            <span>
              Next
            </span>
          </h2>
          <div class="works__footerLinkText">
            <router-link to="/works/anmaketokyo" class="works__link">
              <span class="works__nextClient">Anmake<br />Tokyo</span>
              <svg
                id="レイヤー_1"
                data-name="レイヤー 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 71 55.62"
              >
                <path
                  class="works__iconArrow"
                  d="M.5,23.5h41v8H.5ZM42.51.81l.36.35L42.51.81l-3.7,3.71a1.06,1.06,0,0,0,0,1.5L60.49,27.77a0,0,0,0,1,0,.08L38.81,49.6l.36.35-.36-.35a1.07,1.07,0,0,0,0,1.5l.36-.36-.36.36,3.7,3.71a1.07,1.07,0,0,0,1.5,0L66.09,32.67l4.1-4.11a1.07,1.07,0,0,0,0-1.5L66.09,23,44,.81A1.07,1.07,0,0,0,42.51.81Z"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  methods: {}
}
</script>

<style lang="scss">
@use '../styles/variables';

.works {
  &__main {
    width: calc(100% - 96px);
    max-width: 1024px;
    margin: 0 auto;
  }

  &__mainImage {
    margin-top: 120px;
  }

  &__image {
    display: block;
    margin: 0 auto;
  }

  &__mainVisual {
    position: relative;
  }

  &__clientName {
    position: absolute;
    right: -24px;
    bottom: -48px;
    margin: 0;
    font-family: variables.$font-family-en;
    font-size: 64px;
    font-weight: variables.$font-weight-bd;
  }

  &__about {
    display: flex;
    align-items: center;
    margin-top: variables.$spacing-16x;

    dt {
      min-width: 188px;
      padding-bottom: variables.$spacing-4x;
      font-size: 20px;
      letter-spacing: 1px;
      border-bottom: 1px solid #cccccc;
      border-bottom: 1px solid variables.$color-dark-050;

      &::before {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: variables.$spacing-3x;
        content: '';
        background-color: variables.$color-primary;
        border-radius: 50%;
      }
    }
  }

  &__paragraph {
    margin: 0 0 0 24px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 24px;
    grid-column-gap: 48px;
    padding: 0;
    margin-top: 120px;
    list-style: none;
  }

  &__subHeading {
    margin: 0;
    font-family: variables.$font-family-en;
    font-size: 48px;
    font-weight: variables.$font-weight-md;
  }

  &__footer {
    position: relative;
    left: -48px;
    display: flex;
    align-items: center;
    width: 100vw;
    height: 226px;
    margin-top: 160px;
    color: variables.$color-dark;
    background-color: variables.$color-light;
  }

  &__footerWrapper {
    display: flex;
    justify-content: center;
    height: 80%;
    margin: 0 auto;
  }

  &__footerHeading {
    min-width: 188px;

    span {
      display: flex;
      align-items: center;
      padding-bottom: variables.$spacing-3x;
      font-size: 20px;
      letter-spacing: 1px;
      border-bottom: 1px solid variables.$color-dark-050;

      &::before {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-right: variables.$spacing-3x;
        content: '';
        background-color: variables.$color-primary;
        border-radius: 50%;
      }
    }
  }

  &__footerLinkText {
    display: grid;
    place-items: center;
    margin-left: 64px;

    svg {
      width: 56px;
      padding-top: variables.$spacing-2x;
      margin-left: 48px;
    }
  }

  &__link {
    display: flex;

    &:hover {
      color: variables.$color-dark;
      .works__iconArrow {
        fill: variables.$color-dark;
      }
    }
  }

  &__nextClient {
    display: flex;
    align-items: center;
    font-size: 64px;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    letter-spacing: 14px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: variables.$color-dark-100;
    transition: 0.2s color;
  }

  &__iconArrow {
    fill: transparent;
    stroke: variables.$color-dark;
    transition: 0.2s fill;
  }
}
</style>
