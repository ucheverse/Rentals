const dotenv = require('dotenv');
const app = require('./app');


dotenv.config({ path: './startups/config.env' });

const DB = process.env.DB_DEV;
require('./db')(DB);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});