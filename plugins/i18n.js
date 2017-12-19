import Vue from 'vue'
import VueI18n from 'vue-i18n'
import labelsCn from '~/i18n/zh-hans'
import labelsEn from '~/i18n/en'
import labelsZh from '~/i18n/zh-hant'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  const language = 'zh_cn'

  app.i18n = new VueI18n({
    locale: language,
    messages: {
      zh_cn: labelsCn,
      en: labelsEn,
      zh_tw: labelsZh
    },
    fallbackLang: 'en'
  })
  debugger;
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
