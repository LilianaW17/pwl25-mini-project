require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const logger = require('./middleware/log');
const proposalRouter = require('./routes/proposalRouter');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

app.use(express.json());
app.use(logger);

app.use('/proposals', proposalRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server PKM berjalan di http://localhost:${PORT}`);
});