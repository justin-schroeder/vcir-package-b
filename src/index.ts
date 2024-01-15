import { h, defineComponent } from 'vue'
import { count } from 'vcir-package-a'

console.log('vcir-package DEV MODE')

export const CounterComponent = defineComponent(() => {
    const currentCount = count()
    return () => h('div', ['counter:', currentCount])
})
