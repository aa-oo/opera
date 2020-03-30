// 全局抽取出来获取设备当前IP地址
function getIp() {
    var ip = "127.0.0.1";
    var Context = plus.android.importClass("android.content.Context");
    if (plus.os.name == "Android") {
        //WifiManager
        var Context = plus.android.importClass("android.content.Context");
        var WifiManager = plus.android.importClass("android.net.wifi.WifiManager");
        var wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
        var WifiInfo = plus.android.importClass("android.net.wifi.WifiInfo");

        if (!wifiManager.isWifiEnabled()) { //未连接wifi
            var Enumeration = plus.android.importClass("java.util.Enumeration");
            var NetworkInterface = plus.android.importClass("java.net.NetworkInterface");
            var Inet4Address = plus.android.importClass("java.net.Inet4Address");
            var en = NetworkInterface.getNetworkInterfaces();
            while (plus.android.invoke(en, "hasMoreElements")) {
                var ni = plus.android.invoke(en, "nextElement");
                var interfaceName = ni.getDisplayName();
                //console.log("tag", "网络名字" + interfaceName);
                var enumIpAddr = plus.android.invoke(ni, "getInetAddresses")
                while (plus.android.invoke(enumIpAddr, "hasMoreElements")) {
                    var inetAddress = plus.android.invoke(enumIpAddr, "nextElement");
                    if (!plus.android.invoke(inetAddress, "isLoopbackAddress") && inetAddress instanceof Inet4Address) {
                        ip = plus.android.invoke(inetAddress, "getHostAddress");
                        return ip;
                    }
                }
            }
        } else { //连接wifi
            var wifiInfo = wifiManager.getConnectionInfo();
            ip = intToIp(wifiInfo.getIpAddress());
            var wifiInfo = wifiManager.getConnectionInfo();
            var ipAddress = wifiInfo.getIpAddress();
            ip = intToIp(ipAddress);
        }
    }
    return ip;
}

function intToIp(i) {
    return (i & 0xFF) + "." + ((i >> 8) & 0xFF) + "." + ((i >> 16) & 0xFF) + "." + ((i >> 24) & 0xFF);
}