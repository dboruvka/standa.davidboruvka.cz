module.exports = {
  extends: [
    "stylelint-config-standard-scss",
  ],
  plugins: [
    "stylelint-order"
  ],
  rules: {
    // Základní pravidla, uprav dle svých preferencí
    "order/properties-order": [],
    "color-hex-case": "lower",          // hex barvy malými písmeny
    "string-quotes": "double",          // uvozovky
    "block-no-empty": true,             // zakáže prázdné bloky
    "selector-class-pattern": null      // povolí libovolné názvy tříd
  }
}