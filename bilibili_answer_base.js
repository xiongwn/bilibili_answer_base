// for (let i = 0; i < 4; i++) {
// 	setTimeout(() => {
// 		for (let j = 0; j < 40; j++) {
// 		let dom = $(`.answer-list .exam-list:nth-of-type(${j+1}) .key-list li:nth-of-type(${i+1})`)
// 		if (i === 0) {
// 			dom.trigger('click')
// 		}
// 		else if ($(`.answer-list .exam-list:nth-of-type(${j+1}) .key-list li:nth-of-type(${i})`).hasClass('error')) {
// 			dom.trigger('click')
// 		}
// 	}
// 	$('.btn-default, .btn-width').trigger('click')
// 	}, i*3000)
// }
//2018年版本，已作废

index=0
setInterval(()=>{
	$(".answer-outer").eq(index).trigger("click")
	index=index===3?0:index+1
},1000)
//2020年最新
