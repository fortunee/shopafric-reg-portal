    import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Users Schema for product sellers
 */
const UsersSchema = new Schema({
    businessName: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    phone: { type: Number },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    productCategories: String,
    address: String,
    createdAt: Date,
    updatedAt: Date
});

const UsersModel = mongoose.model('UsersModel', UsersSchema);

export default UsersModel;
