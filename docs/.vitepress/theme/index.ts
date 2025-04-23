import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import MyLayout from "./components/MyLayout.vue"
import confetti from "./components/confetti.vue"
export default {
Layout: MyLayout, 
extends: DefaultTheme,
enhanceApp({app}) { 
    // 注册全局组件
    app.component('MyLayout' , MyLayout)
    app.component('confetti' , confetti)
}
}

