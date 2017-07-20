let index = require('express').Router()
let html = require('fs').readFileSync(__dirname + '/../views/index.html')
let model = require('../model')
const PASSWORD ='hongchh'

index.post('/api/add', (req, res) => {
	try {
		model.set(req.body)
		res.json({err: false})
	} catch(e) {
		res.json({err: true})
	}
})

index.post('/api/check', (req, res) => {
	if (req.body.password === PASSWORD) {
		res.json({err: false})
	}else{
		res.json({err: true})
	}
})

index.get('/api/records', (req, res) => {
	res.json(model.get())
})

index.get('*', (req, res) => {
	res.status(200).end(html)
})

module.exports = index
