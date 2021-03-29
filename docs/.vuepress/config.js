const {
  description
} = require('../../package')

module.exports = {

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Flask demo 文档",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', {
      name: 'theme-color',
      content: '#0860d1'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/haojunyu/flask-demo-docs.git',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'https://git.datagrand.com/Data_Implementation_Department/Flask-template-demo.git',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    // editLinks: false,
    // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    lastUpdated: false,
    // sidebar: 'auto',
    base: "src",
    nav: [],
    sidebar: [
      {
        title: '简介',
        path: '/chapters/',
        sidebarDepth: 2,
        // collapsable: false, // 可选的, 默认值是 true,
      },

      {
        title: "开发环境",
        path: '/chapters/开发环境.md',
        sidebarDepth: 2,
        children: []
      },

      {
        title: "目录结构",
        path: '/chapters/目录结构.md',
        sidebarDepth: 2,
        children: []
      },


      {
        title: "编码规范",
        path: '/chapters/编码规范.md',
        sidebarDepth: 2,
        children: []
      },

      {
        title: "单元测试",
        path: '/chapters/单元测试.md',
        sidebarDepth: 2,
        children: []
      },

      {
        title: "集成部署",
        path: '/chapters/集成部署.md',
        sidebarDepth: 2,
        children: []
      },

      {
        title: "日志收集",
        path: '/chapters/日志收集.md',
        sidebarDepth: 2,
      },


      {
        title: "变更日志",
        path: '/chapters/变更日志.md',
        sidebarDepth: 2,
      },

      {
        title: "TODOS",
        path: '/chapters/TODOS.md',
        sidebarDepth: 2,
      },


    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-mermaidjs',
    '@vuepress/search', {
      searchMaxSuggestions: 10
    }
  ],
}

