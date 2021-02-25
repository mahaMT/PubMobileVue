// 获取URL参数
function getQueryString(name) {
  let reg = `(^|&)${name}=([^&]*)(&|$)`;
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
//判断是否是安卓还是ios
function isAndroid() {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //android终端或者uc浏览器
  return isAndroid == true ? true : false;
}
function isIos() {
  var u = navigator.userAgent;
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  return isiOS == true ? true : false;
}
// 隐藏电话号码中间的
function telHide(phone) {
  var nPhone = phone.substr(0, 3) + "****" + phone.substring(7, 11);
  return nPhone;
}
// 判断是否为手机号码
function isPoneAvailable(str) {
  let myreg = /^[1][2,3,4,5,6,7,8,9][0-9]{9}$/;
  if (!myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};
function tsFormatTime(timestamp, format) {
  const formateArr = ["Y", "M", "D", "h", "m", "s"];
  let returnArr = [];

  let date = new Date(timestamp);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  returnArr.push(year, month, day, hour, minute, second);

  returnArr = returnArr.map(formatNumber);

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}
// 倒计时
function formatSeconds(value) {
  var secondTime = parseInt(value); // 秒
  var minuteTime = 0; // 分
  var hourTime = 0; // 小时
  if (secondTime > 60) {
    //如果秒数大于60，将秒数转换成整数
    //获取分钟，除以60取整数，得到整数分钟
    minuteTime = parseInt(secondTime / 60);
    //获取秒数，秒数取佘，得到整数秒数
    secondTime = parseInt(secondTime % 60);
    //如果分钟大于60，将分钟转换成小时
    if (minuteTime > 60) {
      //获取小时，获取分钟除以60，得到整数小时
      hourTime = parseInt(minuteTime / 60);
      //获取小时后取佘的分，获取分钟除以60取佘的分
      minuteTime = parseInt(minuteTime % 60);
    }
  }
  var miao =
    parseInt(secondTime) >= 10
      ? parseInt(secondTime)
      : "0" + parseInt(secondTime);
  var fen =
    parseInt(minuteTime) >= 10
      ? parseInt(minuteTime)
      : "0" + parseInt(minuteTime);
  var shi =
    parseInt(hourTime) >= 10 ? parseInt(hourTime) : "0" + parseInt(hourTime);

  return shi + ":" + fen + ":" + miao;
}

export default{
    getQueryString,
    isAndroid,
    isIos,
    telHide,
    isPoneAvailable,
    formatSeconds,
    formatNumber,
    tsFormatTime,
}