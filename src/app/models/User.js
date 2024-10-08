import { log } from "console";
import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        validate: pass => {
            if (!pass?.length || pass.length < 5) {
                new Error('password must contain atleast 5 characters')
            }
        }
    }
}, { timestamps: true })


const User = models?.User || model('User', UserSchema)

export default User;