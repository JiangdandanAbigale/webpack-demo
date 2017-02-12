//entry.js
// require("!style!css!./style.css");//载入style.css
// 增加了webpack的配置，可简写为
require('./style.css');
document.write('holy shit ');
// 添加模块
document.write(require('./module.js'));