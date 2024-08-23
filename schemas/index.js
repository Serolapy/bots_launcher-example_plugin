import mongoose from 'mongoose';

export default {
	MyTable : new mongoose.Schema({
		field : {
			type: String,
		},
	})
};