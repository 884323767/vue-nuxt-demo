<!-- <template>
  <div class="top-navbar">
    <div class="col-xs-12">
      <div class="logo" @click="goHome()"></div>
      <ul class="menu hidden-sm hidden-xs">
        <li :class="{active: active == 1}">
          <router-link to="/technology">{{$t("nav.technology")}}</router-link>
        </li>
        <li :class="{active: active == 2}">
          <router-link to="/solutions">{{$t("nav.solutions")}}</router-link>
        </li>
        <li :class="{active: active == 3}">
          <router-link to="/resources">{{$t("nav.resources")}}</router-link>
        </li>
        <li :class="{active: active == 4}">
          <router-link to="/about">{{$t("nav.about")}}</router-link>
        </li>
        <li>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">
              {{language}}
              <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li class="item-option" v-show="language != '简'">
                <label>
                  <input name="language" type="radio" value="简" v-model="language">
                  <span>简</span>
                </label>
              </li>
              <li class="item-option" v-show="language != '繁'">
                <label>
                  <input name="language" type="radio" value="繁" v-model="language">
                  <span>繁</span>
                </label>
              </li>
              <li class="item-option" v-show="language != 'EN'">
                <label>
                  <input name="language" type="radio" value="EN" v-model="language">
                  <span>EN</span>
                </label>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul class="menu visible-sm visible-xs">
        <li>
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">
              {{language}}
              <span class="caret"></span></button>
            <ul class="dropdown-menu">
              <li class="item-option" v-show="language != '简'">
                <label>
                  <input name="language" type="radio" value="简" v-model="language">
                  <span>简</span>
                </label>
              </li>
              <li class="item-option" v-show="language != '繁'">
                <label>
                  <input name="language" type="radio" value="繁" v-model="language">
                  <span>繁</span>
                </label>
              </li>
              <li class="item-option" v-show="language != 'EN'">
                <label>
                  <input name="language" type="radio" value="EN" v-model="language">
                  <span>EN</span>
                </label>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="hamburgler-menu">
        <div class="logo"></div>
        <ul class="hamburgler-menu-list">
          <li :class="{active: active == 0}">
            <router-link to="/home">{{$t("nav.homepage")}}</router-link>
          </li>
          <li :class="{active: active == 1}">
            <router-link to="/technology">{{$t("nav.technology")}}</router-link>
          </li>
          <li :class="{active: active == 2}">
            <router-link to="/solutions">{{$t("nav.solutions")}}</router-link>
          </li>
          <li :class="{active: active == 3}">
            <router-link to="/resources">{{$t("nav.resources")}}</router-link>
          </li>
          <li :class="{active: active == 4}">
            <router-link to="/about">{{$t("nav.about")}}</router-link>
          </li>
        </ul>
      </div>
      <div id="hamburgler" class="hamburgler-icon-wrapper visible-xs visible-sm col-md-offset-3">
        <span class="hamburgler-icon"></span>
      </div>
    </div>
  </div>
</template>
<script>
import config from '@/config';

export default {
  props: {
    // steps: {
    //   type: Array,
    //   default () {
    //     return []
    //   }
    // },
    active: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      language: 'EN',
      languageMap: {
        zh_cn: '简',
        zh_tw: '繁',
        en: 'EN',
      },
      isDev: config.isDev,
    };
  },
  methods: {
    goHome() {
      this.$router.push('/home');
    },
    setLanguage(val) {
      // if (!this.isDev) {
      //   var arr = location.href.split('/');
      //   if (val == 'EN') {
      //     this.$i18n.locale = 'en';
      //     arr[3] = 'en';
      //     localStorage.setItem('language', 'en');
      //   } else if (val == '繁') {
      //     this.$i18n.locale = 'zh-Hant';
      //     localStorage.setItem('language', 'zh-Hant');
      //     arr[3] = 'zh';
      //   } else {
      //     this.$i18n.locale = 'zh-Hans';
      //     localStorage.setItem('language', 'zh-Hans');
      //     arr[3] = '';
      //   }
      //   location.href = arr.join('/');
      // } else {
      if (val == 'EN') {
        this.$i18n.locale = 'en';
        localStorage.setItem('language', 'en');
      } else if (val == '繁') {
        this.$i18n.locale = 'zh_tw';
        localStorage.setItem('language', 'zh_tw');
      } else {
        this.$i18n.locale = 'zh_cn';
        localStorage.setItem('language', 'zh_cn');
      }
      // }
    },
    init() {
      closeNav();
      console.log("init", this.$i18n.locale);
      document.getElementById('hamburgler').addEventListener('click', checkNav);

      console.log(location.href);

      function checkNav() {
        if (document.body.classList.contains('hamburgler-active')) {
          closeNav();
        } else {
          openNav();
        }
      }

      function closeNav() {
        $('body').removeClass('stop-scrolling');
        $('body').unbind('touchmove');
        document.body.classList.remove('hamburgler-active');
      }

      function openNav() {
        window.scrollTo(0, 0);
        $('body').addClass('stop-scrolling');
        $('body').bind('touchmove', (e) => { e.preventDefault(); });
        document.body.classList.add('hamburgler-active');
      }
    },
  },
  computed: {
    // percent() {
    //   return parseFloat(Math.min(100, 100 / (this.steps.length) * (this.active)).toFixed(2));
    // },
    // progress() {
    //   return (this.active + 1) + '/' + this.steps.length;
    // },
    // title() {
    //   return this.steps[this.active];
    // }
  },
  watch: {
    language(val) {
      this.setLanguage(val);
      this.$emit('changeLanguage');
    },
  },
  mounted() {
    // Handle no locale condition
    if (!localStorage.getItem('language') || !this.languageMap[localStorage.getItem('language')]) {
      console.log("Not found");
      this.setLanguage('EN');
    }
    if (/zh_cn/gi.test(location.href)) {
      localStorage.setItem('language', 'zh_cn');
    }
    else if (/zh_tw/gi.test(location.href)) {
      localStorage.setItem('language', 'zh_tw');
    }
    else if (/en/gi.test(location.href)) {
      localStorage.setItem('language', 'en');
    }
    else {
      this.setLanguage(this.languageMap[localStorage.getItem('language')]);
    }
    this.language = this.languageMap[localStorage.getItem('language')];
    this.$nextTick(() => {
      this.init();
    });
  },
};

</script>
<style lang="scss" scoped>
// @import '../../sass/variables.scss';
.top-navbar {
  // background-color: #ddd;
  // height: 200px;
  // width: 100%;
}

</style>
 -->
