//    	mui.init();
      	mui.plusReady(    
        function() {  
        	mui('.mui-scroll-wrapper').scroll({
        		scrollY: true, //是否竖向滚动
 				scrollX: false, //是否横向滚动
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});

			document.getElementById("list2").addEventListener('tap',mounted())
//				
//				mui.init({
//						subpages:[{
// 						url:'list.html',
//						id:'list.html',
//  						styles:{
//    						top:'40%',//mui标题栏默认高度为45px；
//    						bottom:'0px'//默认为0px，可不定义；
//  						}
//						}]
//						});

//				var add_div=document.getElementById("ull");
//				//添加class属性
//				add_div.classList.add("mui-action-back");
//

			document.getElementById("list3").addEventListener('tap', function(){
              mui.ajax('http://192.168.43.14:8080/config/list/squeezelite',{
	                data:{
		           
					},
					async :false,
					dataType:'json',//服务器返回json格式数据
					type:'get',//HTTP请求类型
					
					         
					success:function(data){
						if(data.success == true&&ajax.status == 200){
							var vData = JSON.stringify(data);
							mui.openWindow({
							url: 'list.html',
							id: 'ji',
							extras:{
								name:vData
							}
						});
						}
						
//                   	res_data =(new Function("","return "+vData))();
//
//                   	for(var i=0;i<res_data.data.length;i++){
//                     		alert(res_data.data[i].name);
//                   	}
                    },
					error:function(xhr,type,errorThrown){
							//异常处理；
						alert("异常");
						console.log(type);
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



