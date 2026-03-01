/** -------------------
 * Book.js
 * 
 * defines the Mongoose schema for book objects in the books collection
 */

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: {type: String,
                   required: true
        },
        author: {type: String,
                   required: true 
        },
        genre:    {type: Array,
        },
        releaseDate: {type: String
        },
        aveStars: {type: mongoose.Types.Double
        },
        eBook: {type: Boolean
        }
    },
    {
        timestamps: true    //auto adds a createdAt and updatedAt fields
    }
);

module.exports = mongoose.model("Book", bookSchema);