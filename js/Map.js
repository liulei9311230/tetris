//这个版本把地图做成一个类
function Map(){
	//地图矩阵
	this.matrix = [
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"],
		["9","9",9,9,9,9,9,9,9,9,9,9,9,9,"9","9"],
		["9","9",9,9,9,9,9,9,9,9,9,9,9,9,"9","9"],
		["9","9",9,9,9,9,9,9,9,9,9,9,9,9,"9","9"],
	]
}
//根据矩阵设置转块
Map.prototype.setBlocksByMatrix = function(){
	//遍历我们的地图矩阵，看看哪个位置不是0，就给相应的tds设置类名
	for(var row = 0 ; row < 20 ; row++){
		for(var col = 0 ; col < 12 ; col++){
		 	if(this.matrix[row][col + 2] != 0){
		 		tds[row][col].className = "block" + this.matrix[row][col + 2];
		 	}
		}
	}
}

//判定消行
Map.prototype.check = function(){
	//满行的个数
	var geshu = 0;
	//只要这一行中，有0那么这一行没有满！
	//反之，这一行没有0，那么这一行满了！！
	for(var row = 0 ; row < 20 ; row++){
		if(this.matrix[row].indexOf(0) == -1){
			//个数加1
			geshu++;
			//删除这一行
			this.matrix.splice(row,1);	
			//地图头部插入一行。删了一行，插入了一行，地图总行数不变
			this.matrix.unshift(["9","9",0,0,0,0,0,0,0,0,0,0,0,0,"9","9"]);
			console.log(row + "满了");
		}
	}

	//下面这个小数组，就表示当要用户消除了0行的时候，加0分。消除了1行的时候，加1分。消除了2行的时候，加3分……
	var arr = [0,1,3,5,10];
	fenshu += arr[geshu];
}