import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
<%_ if (options.elementUIUsage === 'on-demand') { _%>
import { Button } from 'element-ui'  
Vue.use(Button)
<%_ } else { _%>
import Element from 'element-ui'  
Vue.use(Element)
<%_ } _%>
