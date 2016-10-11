 
	    var tbton = document.getElementById('start')
         var bbton = document.getElementById('stop')
		//游戏表格
		var mainTable = document.getElementById("main");
		//帧编号的盒子
		var frameBox = document.getElementById("frameBox");
		//分数盒子
		var fenshuBox = document.getElementById("shijian");
		//预览图表格
		var previsionTable = document.getElementById("previsionTable");

		//创建表格，20行12列。把所有的td放入二维数组，tds[3][8]就能这么控制
		var tds = [];
		for(var row = 0 ; row < 20 ; row++){
			//创建外层的行
			var oTR = document.createElement("tr");
			mainTable.appendChild(oTR);
			var temp = [];
			//创建每个行里面的td
			for(var col = 0 ; col < 12 ; col++){
			 	var oTD = document.createElement("td");
				oTR.appendChild(oTD);
				temp.push(oTD);
			}
			tds.push(temp);
		}

		//把预览方块也集中到一个二维数组里面
		var previsionTds = [];
		for(var i = 0 ; i < 4 ; i++){
			//遍历previsionTable中的所有tr，把这个tr里面的4个td都放入数组
			previsionTds.push(previsionTable.getElementsByTagName("tr")[i].getElementsByTagName("td"));
		}
		 


		//实例化地图，页面上只有一个地图，所以我们只实例化一个地图类
		var map = new Map();
		map.setBlocksByMatrix();
		
		//实例化预览图
		var pre = new Prevision();

		//实例化转块，页面上只有一个转块，所有我们只用b变量引用这唯一的转块
		//一会儿要产生新的转块，这个新转块也要被b引用。变量b就是唯一的活动转块。
		var b = new Block();
		//产生一个新的预览图
 		pre = new Prevision();

		//添加监听
		document.onkeydown = function(event){
			switch(event.keyCode){
				case 37 :
					//左键
					b.goLeft();
					break;
				case 39 :
					b.goRight();
					//右键
					break;
				case 38 :
					//上键
					b.changeDirection();
					break;
				case 40 : 
					//下键
					b.goDown();
					break;
				case 32 : 
					//空格键。快速下落，一直做，直到为假
					while(b.goDown()){

					}
					break;
			}
		}

		//分数
		var fenshu = 0;
		//帧编号
		var frame = 0;
		var timer = setInterval(impor,50);
		function impor(){
			//每一帧，帧编号加1
			frame++;

			//打印帧编号
			frameBox.innerHTML = "帧编号:" + frame;

			// //打印分数
			fenshuBox.innerHTML = "分数:" + fenshu;

			//清屏，我们要每帧都要把所有的类名去掉，然后重绘
			for(var row = 0 ; row < 20 ; row++){
				for(var col = 0 ; col < 12 ; col++){
					tds[row][col].className = "";
				}
			}

			if(frame % 10 == 0){
				//如果小砖块不能下移了
				if(!b.goDown()){
					//① 当前小方块去死
					b.goDie();
					//② 产生新的小方块
					b = new Block();
					//③ 产生新的预览图
					pre = new Prevision();
					//④ 判定消行
					map.check();
				}
			}
			
			b.render();

			//绘制地图上面的方块，“死方块”
			map.setBlocksByMatrix();
            
            //绘制预览图
			pre.render();
			
		}
		clearInterval(timer)
      
      var lock = true;

     tbton.onclick=function(){
       if(!lock) return;
       lock =false;
       setTimeout(function(){
           lock =true
       }, 1000)
           timer = setInterval(impor,50);
     }


     bbton.onclick=function(){
        clearInterval(timer)
          }