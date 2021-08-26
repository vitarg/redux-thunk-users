import { users } from "./features/users";
import thunk from "redux-thunk";
import { logger } from "redux-logger/src";
const { createStore, applyMiddleware } = require("redux");

export default createStore(users, applyMiddleware(thunk, logger));
