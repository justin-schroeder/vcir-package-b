// src/index.ts
import { h, defineComponent } from "vue";
import { count } from "vcir-package-a";
var CounterComponent = defineComponent(() => {
  const currentCount = count();
  return () => h("div", ["counter:", currentCount]);
});
export {
  CounterComponent
};
