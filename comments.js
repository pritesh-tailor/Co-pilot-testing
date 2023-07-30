// create web server
// 1. load the express module
const express = require('express');
// 2. create an express application
const app = express();
// 3. load the mongoose module
const mongoose = require('mongoose');
// 4. load the body-parser module
const bodyParser = require('body-parser');
// 5. load the express-session module
const session = require('express-session');
// 6. load the express-handlebars module
const handlebars = require('express-handlebars');
// 7. load the express-fileupload module
const fileUpload = require('express-fileupload');
// 8. load the connect-flash module
const flash = require('connect-flash');
// 9. load the connect-mongodb-session module
const MongoDBStore = require('connect-mongodb-session')(session);
// 10. load the method-override module
const methodOverride = require('method-override');
// 11. load the passport module
const passport = require('passport');
// 12. load the passport-local module
const LocalStrategy = require('passport-local').Strategy;
// 13. load the passport-local-mongoose module
const passportLocalMongoose = require('passport-local-mongoose');
// 14. load the dotenv module
const dotenv = require('dotenv');
// 15. load the nodemailer module
const nodemailer = require('nodemailer');
// 16. load the moment module
const moment = require('moment');
// 17. load the slugify module
const slugify = require('slugify');
// 18. load the marked module
const marked = require('marked');
// 19. load the createDomPurify module
const { JSDOM } = require('jsdom');
// 20. load the dompurify module
const dompurify = require('dompurify');
// 21. load the User model
const User = require('./models/User');
// 22. load the Post model
const Post = require('./models/Post');
// 23. load the Comment model
const Comment = require('./models/Comment');
// 24. load the Category model
const Category = require('./models/Category');

// configure dotenv
dotenv.config();

// configure mongoose
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

// configure body-parser