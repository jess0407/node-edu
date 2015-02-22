var nums = process.argv.splice(2, process.argv.length-2);
var sum = 0;
nums.map(function(v){
	sum += Number(v);
	});
console.log(sum);
