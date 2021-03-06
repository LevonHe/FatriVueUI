/* eslint-disable prettier/prettier */
/* Automatically generated by './build/bin/build-entry.js' */

import Input from '../packages/input/index.js'
import Select from '../packages/select/index.js'
import Switch from '../packages/switch/index.js'
import DvBorder1 from '../packages/dv-border-1/index.js'
import Ellipsis from '../packages/ellipsis/index.js'
import DvScrollTable from '../packages/dv-scroll-table/index.js'
import ScrollNum from '../packages/scroll-num/index.js'
import Dialog from '../packages/dialog/index.js'
import Debounce from '../packages/debounce/index.js'
import ValidTable from '../packages/valid-table/index.js'
import ValidInput from '../packages/valid-input/index.js'
import StatusCard from '../packages/status-card/index.js'
import ModuleCreateHeader from '../packages/module-create-header/index.js'
import ModuleDetailHeader from '../packages/module-detail-header/index.js'

const components = [
  Input,
  Select,
  Switch,
  DvBorder1,
  Ellipsis,
  DvScrollTable,
  ScrollNum,
  Dialog,
  Debounce,
  ValidTable,
  ValidInput,
  StatusCard,
  ModuleCreateHeader,
  ModuleDetailHeader
]

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.1.22',
  install,
  Input,
  Select,
  Switch,
  DvBorder1,
  Ellipsis,
  DvScrollTable,
  ScrollNum,
  Dialog,
  Debounce,
  ValidTable,
  ValidInput,
  StatusCard,
  ModuleCreateHeader,
  ModuleDetailHeader
}
