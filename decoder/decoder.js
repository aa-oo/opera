mui.plusReady(function() {
				var self = plus.webview.currentWebview();
				
				res_data =(new Function("","return "+self.name))();

                     	for(var i=0;i<res_data.data.length;i++){
                     		var ul=document.getElementById("listul");
                       		var li=document.createElement('li');
                       		li.setAttribute("id", "li"+i);
                       		li.setAttribute("class","mui-table-view-cell");
                       		ul.appendChild(li);
                       		document.getElementById("li"+i).innerText = res_data.data[i].key;
                       		
                       		var div=document.createElement('div');
                       		div.setAttribute("id", "newDiv");
                       		ul.appendChild(div);
							document.getElementById("li"+i).addEventListener('tap', function(){
								var btnArray = ['DoP', 'Native'];
    							var message = '<h5>请进行选择</h5>';
    							mui.confirm(message, 'Hello Opera', btnArray, function(e) {
    					var ip=localStorage.getItem('ip'+i);
    								var dsd;
    								console.log(ip);
    								mui.get(ip+':8888/api/blog/detail',{data:dsd},
    								function(data){
    									if(data.success == true&&ajax.status == 200){
    										 if (e.index == 1){
    										 	dsd="DoPNative";
       										 }
    										 else{
    										 	dsd="DoP";
    										 	
    										 }
    									}
    									
    									
    									 mui.alert("选择成功", function () {    
    									 	//获取当前页面
//  										var cPage = plus.webview.currentWebview();
    										//获取上一级页面（B页面）
   											 var bPage = cPage.opener();
  											//获取上一级页面的上一级页面（A页面）
											//  var aPage = bPage.opener();
    										//关闭当前页面（C页面）、B页面和A页面
    										self.close();
											//  bPage.close();
											//  aPage.close();
//                          parent.window.location.href="index.html";
                            })
    								},'json');
        
    							},'div');
							})
                    }
                });