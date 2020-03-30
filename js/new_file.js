//    	mui.init();
      	mui.plusReady(    
        function() {  
        	

        	mui('.mui-scroll-wrapper').scroll({
        		scrollY: true, //是否竖向滚动
 				scrollX: false, //是否横向滚动
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
			

			document.getElementById("list2").addEventListener('tap',function(){
				var btnArray = ['取消', '确定'];
				var message = '<h5>您确定链接设备吗？</h5>';
				mui.confirm(message,'opera',btnArray, function(e) {
      				if (e.index == 1) {getIPs()}
      				else {}
			},'div')		
			})
//			document.getElementById("list3").addEventListener('tap',function(){
				

//var btnArray = ['取消', '确定'];
//var message = '<h5>您确定链接设备吗？</h5>';
//mui.confirm(message,'opera',btnArray, function(e) {
//    if (e.index == 1) {
//
//				mui.init({
//						subpages:[{
// 						url:'try.html',
//						id:'try.html',
//  						styles:{
//    						top:'45px',//mui标题栏默认高度为45px；
//    						bottom:'0px'//默认为0px，可不定义；
//  						}
//						}]
//						});
//				var offCanvasSide=document.getElementById('offCanvasSide');
//				offCanvasSide.style.visibility='hidden';
//    } else {   
//
//    }
//},'div')
//			});
				
			

//				var add_div=document.getElementById("ull");
//				//添加class属性
//				add_div.classList.add("mui-action-back");

//			document.getElementById("list3").addEventListener('tap', function(){
//            mui.ajax('http://192.168.43.14:8080/config/list/squeezelite',{
//	                data:{
//		           
//					},
//					async :false,
//					dataType:'json',//服务器返回json格式数据
//					type:'get',//HTTP请求类型
//					
//					         
//					success:function(data){
//						if(data.success == true&&ajax.status == 200){
//							var vData = JSON.stringify(data);
//							mui.openWindow({
//							url: 'list.html',
//							id: 'ji',
//							extras:{
//								name:vData
//							}
//						});
//						}
//						
////                   	res_data =(new Function("","return "+vData))();
////
////                   	for(var i=0;i<res_data.data.length;i++){
////                     		alert(res_data.data[i].name);
////                   	}
//                  },
//					error:function(xhr,type,errorThrown){
//							//异常处理；
//						alert("异常");
//						console.log(type);
//					}
//				});
//       });  
document.getElementById("list3").addEventListener('tap', function() {
			var ip=localStorage.getItem('ipt')
			console.log(ip);
			mui.ajax('http://'+ip+':8888/api/blog/detail',{
				data:{
					id:1,
				},
				dataType:'json',//服务器返回json格式数据
				type:'get',//HTTP请求类型
				timeout:4000,//超时时间设置为10秒；
				// headers:{'Content-Type':'application/json'},	              
				success:function(data){
					//服务器返回响应，根据响应结果，分析是否登录成功；
					console.log(JSON.stringify(data));
					if(data.success == true&&ajax.status == 200){
							var vData = JSON.stringify(data);
							var offCanvasSide=document.getElementById('offCanvasSide');
							offCanvasSide.style.visibility='hidden';
							mui.init({
									subpages:[{
   										url:'list.html',
										id:'list.html',
    									styles:{
      										top:'45px',//mui标题栏默认高度为45px；
      										bottom:'0px'//默认为0px，可不定义；
    									},
    									extras:{
    										name:vData
    									}
									}]
								});
						}
						
				},
				error:function(xhr,type,errorThrown){
					//异常处理；
					alert("ehh");
					console.log(JSON.stringify(arguments));
				}
			});
		});

           document.getElementById("list6").addEventListener('tap', function(){    
                alert("是否确定");
           });  
           document.getElementById("list7").addEventListener('tap', function(){    
                alert("是否确定");
           }); 
           document.getElementById('sec').classList.add('mui-hidden');
           var i=0;
            document.getElementById("list9").addEventListener('tap', function(){ 
            	if(i==0){
            		document.getElementById("sec").classList.remove('mui-hidden');
            		i=1;
            	}
            	else{
            		document.getElementById('sec').classList.add('mui-hidden');
            		i=0;
            	}
            });
             document.getElementById('seco').classList.add('mui-hidden');
             var j=0;
            document.getElementById("list10").addEventListener('tap', function(){ 
            	if(j==0){
            		document.getElementById("seco").classList.remove('mui-hidden');
            		j=1;
            	}
            	else{
            		document.getElementById('seco').classList.add('mui-hidden');
            		j=0;
            	}
            });
           });  



