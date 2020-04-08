
	
function getUserIP(onNewIP) { // onNewIp - your listener function for new IPs
//compatibility for firefox and chrome
var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
var pc = new myPeerConnection({
iceServers: []
}),
noop = function() {},
localIPs = {},
ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
key;

function iterateIP(ip) {
if (!localIPs[ip]) onNewIP(ip);
localIPs[ip] = true;
}

//create a bogus data channel
pc.createDataChannel("");

// create offer and set local description
pc.createOffer().then(function(sdp) {
sdp.sdp.split('\n').forEach(function(line) {
if (line.indexOf('candidate') < 0) return;
line.match(ipRegex).forEach(iterateIP);
});

pc.setLocalDescription(sdp, noop, noop);
}).catch(function(reason) {
// An error occurred, so handle the failure to connect
});

//sten for candidate events
pc.onicecandidate = function(ice) {
if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
};
}

// Usage
var i = 0;
    var t=0;
//  localStorage.setItem("t",t);
function checkIP(ip) {
            var ipAddr = ip.substring(0, ip.lastIndexOf('.'));
            console.log(ipAddr);
            var i = 0;
            var t=0;
            
            time = setInterval(function getip() {
                if (i <= 225) {
                    function loadXMLDoc() {
                        var xmlhttp;
                        ipAdd = ipAddr + "." + i;
                        i++;
                        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                            xmlhttp = new XMLHttpRequest();
                        }
                        else {// code for IE6, IE5
                            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        xmlhttp.onreadystatechange = function () {
                            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                            	t++;
                            	console.log(t);
                                localStorage.setItem("ip"+t, xmlhttp.responseURL);
 //                            alert(localStorage.getItem("ip"+t).substring(7,20));

								

                                console.log(xmlhttp.responseURL);
//                              window.clearInterval(time);
                            }
                        }
                        xmlhttp.open("GET", "http://" + ipAdd + ":8888/api/og/detail", true);
                        xmlhttp.send(ipAdd);
                    }
                    loadXMLDoc();
                }
                
                else {
                    clearInterval(time);
                }
                localStorage.setItem("t", t);
            }, 200);
            }
//getUserIP(function(ip){
// if(ip.length==13){
//  console.log(ip)
//  
//  checkIP(ip);
//      
//
// var offCanvasSide=document.getElementById('offCanvasSide');
//		offCanvasSide.style.visibility='hidden';
//
//       mui.init({
//									subpages:[{
// 										url:'try.html',
//										id:'try.html',
//  									styles:{
//    										top:'45px',//mui标题栏默认高度为45px；
//    										bottom:'0px'//默认为0px，可不定义；
//  									}
//									}]
//								});
//
//}
//})
