const mongoose = require("mongoose");
const validator = require("validator");



const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email address");
            }
        }
    },
    mobile: {
        type: String,
        required: true,
        //unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    carts:Array
});






const User = new mongoose.model("USER", userSchema);

module.exports = User;




// carts:Array
// jo aavi rite carts ne add karso to pn chale other wise je old methods 6 eto use krvij
// carts:[
//     {
//         cart:Object
//     }
// ]
//  this.carts = this.carts.concat({cart}); // to pachi cart ne destructring krine lakhvu