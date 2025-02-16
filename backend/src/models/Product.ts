import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    mark: { type: String, required: true },
    model: { type: String, required: true },
    image: { type: String, required: true },
    grade: { type: Number, required: true },
    videoReview: String,
    tags: [String],
    basePrice: { type: Number, required: true },
    promotionalPrice: Number,
    lowestPrice: Number,
    highestPrice: Number,
    averagePrice: Number,
    specifications: { type: Object, required: true }
});

export default mongoose.model('Product', ProductSchema)