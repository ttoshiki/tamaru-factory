<template>
  <div class="about">
    <img
      src="../assets/about_header.png"
      srcset="../assets/about_header.png 1x, ../assets/about_header@2x.png 2x"
      alt=""
      class="about__headerImage"
    />
    <div class="about__nameWrapper">
      <h1 class="about__name">Toshiki Tamaru</h1>
      <span class="about__namePosition"
        ><span class="about__nameKanji">田丸 俊樹</span>Coder / UI designer</span
      >
    </div>
    <div class="about__profile">
      <div class="about__profileBlock">
        <h2 class="about__profileHeading">
          <span class="about__profileHeadingSpan">自己PR</span>
        </h2>
        <p class="about__profileParagraph">
          UIデザイナーの経験をベースに、デザインに忠実な見た目の実装を行っています。<br />
          また、サイト高速表示化を意識して新しい技術を積極的に取り入れています。
        </p>
      </div>
      <div class="about__profileBlock">
        <h2 class="about__profileHeading">
          <span class="about__profileHeadingSpan">経験領域</span>
        </h2>
        <div class="about__profileContents">
          <h3 class="about__profileSubHeading">エンジニアリング</h3>
          <ul class="about__profileList">
            <li class="about__profileItem">Webフロントエンド実装</li>
            <li class="about__profileItem">CMS実装（WordPress）</li>
          </ul>
          <h3 class="about__profileSubHeading">デザイン</h3>
          <ul class="about__profileList">
            <li class="about__profileItem">アプリケーションUI設計</li>
            <li class="about__profileItem">ワイヤーフレーム、プロトタイプ設計</li>
          </ul>
        </div>
      </div>
      <div class="about__profileBlock">
        <h2 class="about__profileHeading">
          <span class="about__profileHeadingSpan">スキル</span>
        </h2>
        <div class="about__profileContents">
          <h3 class="about__profileSubHeading">デザインツール</h3>
          <ul class="about__profileList">
            <li class="about__profileItem">Adobe Photoshop</li>
            <li class="about__profileItem">Adobe Illustrator</li>
            <li class="about__profileItem">Adobe XD</li>
            <li class="about__profileItem">Sketch</li>
            <li class="about__profileItem">Figma</li>
          </ul>
          <h3 class="about__profileSubHeading">プログラミングツール</h3>
          <ul class="about__profileList">
            <li class="about__profileItem">Git</li>
            <li class="about__profileItem">Microsoft Visual Studio Code</li>
          </ul>
          <h3 class="about__profileSubHeading">プログラミング言語</h3>
          <ul class="about__profileList">
            <li class="about__profileItem">HTML</li>
            <li class="about__profileItem">CSS</li>
            <li class="about__profileItem">Sass(SCSS)</li>
            <li class="about__profileItem">Javascript</li>
            <li class="about__profileItem">PHP</li>
            <li class="about__profileItem">Python</li>
          </ul>
          <h3 class="about__profileSubHeading">フレームワーク・ライブラリ経験</h3>
          <ul class="about__profileList">
            <li class="about__profileItem">jQuery</li>
            <li class="about__profileItem">Vue.js</li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="about__footer">
      <span class="about__footerLinkText">
        <router-link :to="{ name: 'Contact' }"
          ><span>Contact</span
          ><svg
            id="レイヤー_1"
            data-name="レイヤー 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 71 55.62"
          >
            <path
              class="about__iconArrow"
              d="M.5,23.5h41v8H.5ZM42.51.81l.36.35L42.51.81l-3.7,3.71a1.06,1.06,0,0,0,0,1.5L60.49,27.77a0,0,0,0,1,0,.08L38.81,49.6l.36.35-.36-.35a1.07,1.07,0,0,0,0,1.5l.36-.36-.36.36,3.7,3.71a1.07,1.07,0,0,0,1.5,0L66.09,32.67l4.1-4.11a1.07,1.07,0,0,0,0-1.5L66.09,23,44,.81A1.07,1.07,0,0,0,42.51.81Z"
            /></svg
        ></router-link>
      </span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
@use '../styles/variables';

.about {
  &__headerImage {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 70vw;
    min-height: 70vh;
    object-fit: cover;
  }

  &__nameWrapper {
    margin: 200px 0 0 96px;
  }

  &__name {
    margin: 0;
    font-family: variables.$font-family-en;
    font-size: 64px;
    font-weight: 500;
    letter-spacing: 1px;
  }

  &__namePosition {
    display: block;
    margin-top: variables.$spacing-4x;
    font-size: variables.$font-size-lg;
  }

  &__nameKanji {
    margin-right: variables.$spacing-6x;
  }

  &__profile {
    margin: 248px 0 0 96px;
  }

  &__profileBlock {
    display: flex;

    &:not(:first-of-type) {
      margin-top: 120px;
    }
  }

  &__profileHeading {
    min-width: 188px;
    margin-right: 80px;
  }

  &__profileHeadingSpan {
    display: flex;
    align-items: center;
    padding-bottom: variables.$spacing-4x;
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

  &__profileList {
    padding-left: variables.$spacing-4x;
    list-style: none;
  }

  &__profileItem {
    margin: variables.$spacing-2x 0;
  }

  &__profileSubHeading {
    &:not(:first-of-type) {
      margin-top: variables.$spacing-12x;
    }
  }

  &__footer {
    position: relative;
    left: -48px;
    width: 100vw;
    height: 226px;
    margin-top: 96px;
    background-color: variables.$color-white-100;
  }

  &__footerLinkText {
    display: grid;
    place-items: center;
    height: 100%;

    a {
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

      &:hover {
        color: variables.$color-dark-100;
        .about__iconArrow {
          fill: #000000;
        }
      }
    }

    svg {
      width: 56px;
      padding-top: variables.$spacing-2x;
      margin-left: 12px;
    }
  }

  &__iconArrow {
    fill: transparent;
    stroke: #000000;
    transition: 0.2s fill;
  }
}
</style>
