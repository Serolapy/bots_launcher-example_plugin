import express from 'express';

import db_schemas from './schemas/index.js'; 		// ваши схемы для базы данных

export default class {
	router = express.Router();
	db_models = {};									// модели из базы данных

	/**
	 * Конструктор Вашего плагина
	 * @param {string} plugin_name Название Вашего плагина, которое Вы указали в const.json
	 * @param {mongoose.Connection} database Соединение с базой данных Вашего плагина
	 */
	constructor(plugin_name, database) {
		this.database = database;

		for (const [name, schema] of Object.entries(db_schemas)) {
			this.db_models[name] = this.database.model(name, schema);
		}
		this.router.all('*', this.router_all);
		console.log(`Plug-in ${plugin_name} started`);
	}
	
	router_all (req, res) {
		console.log('Hello world');
		res.send('ok');
		// your code here
	}
}