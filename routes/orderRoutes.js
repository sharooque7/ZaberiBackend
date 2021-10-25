import express from "express";
const Router = express.Router();
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from "../controllers/orderController.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

Router.get("/myorders", protect, getMyOrders);
Router.get("/", protect, admin, getOrders);
Router.post("/", protect, addOrderItems);
Router.get("/:id", protect, getOrderById);
Router.put("/:id/pay", protect, updateOrderToPaid);
Router.put("/:id/deliver", protect, admin, updateOrderToDelivered);

export default Router;
