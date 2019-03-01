for (let j = 0; j < 40; j++) {
		let dom = $(`.answer-list .exam-list:nth-of-type(${j+1}) .key-list li:nth-of-type(1)`)
		dom.trigger('click')
	}
for (let i = 0; i < 4; i++) {
	setTimeout(() => {
		for (let j = 0; j < 40; j++) {
		let dom = $(`.answer-list .exam-list:nth-of-type(${j+1}) .key-list li:nth-of-type(${i+1})`)
		if (i === 0) {
			dom.trigger('click')
		}
		else if ($(`.answer-list .exam-list:nth-of-type(${j+1}) .key-list li:nth-of-type(${i})`).hasClass('error')) {
			dom.trigger('click')
		}
	}
	$('.btn-default, .btn-width').trigger('click')
	}, i*3000)
}