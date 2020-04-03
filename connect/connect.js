// // 全局抽取出来获取设备当前IP地址
// function getIp() {
//     var ip = "127.0.0.1";
//     var Context = plus.android.importClass("android.content.Context");
//     if (plus.os.name == "Android") {
//         //WifiManager
//         var Context = plus.android.importClass("android.content.Context");
//         var WifiManager = plus.android.importClass("android.net.wifi.WifiManager");
//         var wifiManager = plus.android.runtimeMainActivity().getSystemService(Context.WIFI_SERVICE);
//         var WifiInfo = plus.android.importClass("android.net.wifi.WifiInfo");

//         if (!wifiManager.isWifiEnabled()) { //未连接wifi
//             var Enumeration = plus.android.importClass("java.util.Enumeration");
//             var NetworkInterface = plus.android.importClass("java.net.NetworkInterface");
//             var Inet4Address = plus.android.importClass("java.net.Inet4Address");
//             var en = NetworkInterface.getNetworkInterfaces();
//             while (plus.android.invoke(en, "hasMoreElements")) {
//                 var ni = plus.android.invoke(en, "nextElement");
//                 var interfaceName = ni.getDisplayName();
//                 //console.log("tag", "网络名字" + interfaceName);
//                 var enumIpAddr = plus.android.invoke(ni, "getInetAddresses")
//                 while (plus.android.invoke(enumIpAddr, "hasMoreElements")) {
//                     var inetAddress = plus.android.invoke(enumIpAddr, "nextElement");
//                     if (!plus.android.invoke(inetAddress, "isLoopbackAddress") && inetAddress instanceof Inet4Address) {
//                         ip = plus.android.invoke(inetAddress, "getHostAddress");
//                         return ip;
//                     }
//                 }
//             }
//         } else { //连接wifi
//             var wifiInfo = wifiManager.getConnectionInfo();
//             ip = intToIp(wifiInfo.getIpAddress());
//             var wifiInfo = wifiManager.getConnectionInfo();
//             var ipAddress = wifiInfo.getIpAddress();
//             ip = intToIp(ipAddress);
//         }
//     }
//     return ip;
// }

// function intToIp(i) {
//     return (i & 0xFF) + "." + ((i >> 8) & 0xFF) + "." + ((i >> 16) & 0xFF) + "." + ((i >> 24) & 0xFF);
// }
			mui.plusReady(    
        function() {  
      	// var offCanvasSide=window.parent.document.getElementById('offCanvasSide')
      	var t=localStorage.getItem('t')
      	console.log(t);
      	var ul=document.getElementById("listul");
      	for(var i=0;i<t;i++){
      		console.log(t);
      		var lii=document.createElement('li');
      		lii.setAttribute("id", "li"+i);
            lii.setAttribute("class","mui-table-view-cell");
            ul.appendChild(lii);
            console.log( localStorage.getItem("ip"+t).substring(7,20));
            console.log("li"+i);
            console.log(listul);
            document.getElementById("li"+i).innerHTML = localStorage.getItem("ip"+t).substring(7,20);
     		var div=document.createElement('div');
                       		div.setAttribute("id", "newDiv");
                       		ul.appendChild(div);
							document.getElementById("li"+i).addEventListener('tap', function(){
								var btnArray = ['确定', '取消'];
    							var message = '<h5>请进行选择</h5>';
    							mui.confirm(message, 'Hello Opera', btnArray, function(e) {
    							var ip=localStorage.getItem('ip'+i);
    								var ipt;
    								var back;
    								console.log(ip.substring(7,20));    								
    										 if (e.index == 1){
    										 	back=0;
    										 	console.log(back);
       										 }
    										 else{
    										 	ipt=ip.substring(7,20);
    										 	 localStorage.setItem("ipt",ipt);
    										 	back=1;
    									}
    										 console.log(back);
    										 if(back==1){
    										 	var cPage = plus.webview.currentWebview();
    										 	var bPage = cPage.opener();
    										 	cPage.close();
    										 }
    							},'div');
            				});
        }
           
      	
                       		
//                     		
//    	 function disLoad() {  
//   $(".datagrid-mask").remove();  
//   $(".datagrid-mask-msg").remove();  
// }
//    	 disLoad();
   
//			var offCanvasSide=document.getElementById('offCanvasSide');
//				offCanvasSide.style.visibility='visible';
// if( Object.prototype.toString.call(this.mui('.mui-progressbar').progressbar()) === '[Object Object]' ){
// 	mui(".listl").progressbar().show();
// }


				
			});