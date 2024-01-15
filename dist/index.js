var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  CounterComponent: () => CounterComponent
});
module.exports = __toCommonJS(src_exports);
var import_vue = require("vue");
var import_vcir_package_a = require("vcir-package-a");
var CounterComponent = (0, import_vue.defineComponent)(() => {
  const currentCount = (0, import_vcir_package_a.count)();
  return () => (0, import_vue.h)("div", ["counter:", currentCount]);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CounterComponent
});
