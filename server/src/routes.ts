import { Router } from "express";
import { deleteCartsController } from "./controllers/deleteCartsController";
import { getAddressController } from "./controllers/getAddressController";
import { getCartsController } from "./controllers/getCartsController";
import { getCategoryController } from "./controllers/getCategoryController";
import { getFreteController } from "./controllers/getFreteController";
import { getProductController } from "./controllers/getProductController";
import { getRegistrationController } from "./controllers/getRegistrationController";
import { getRequestController } from "./controllers/getRequestController";
import { postAddressController } from "./controllers/postAddressController";
import { postCartsController } from "./controllers/postCartsController";
import { postRegistrationController } from "./controllers/postRegistration";
import { postRequestController } from "./controllers/postRequestController";
import { putCartsController } from "./controllers/putCartsController";

const router = Router();

// const createProduct = 

const getProduct = new getProductController();
const getCategory = new getCategoryController();
const postCarts = new postCartsController();
const getCarts = new getCartsController();
const getFrete = new getFreteController();
const putCarts = new putCartsController();
const deleteCarts = new deleteCartsController();
const getAddress = new getAddressController();
const postAddress = new postAddressController();
const getRegistration = new getRegistrationController();
const postRegistration = new postRegistrationController();
const postRequest = new postRequestController();
const getRequest = new getRequestController();

router.get("/products", getProduct.handle);
router.get("/categories", getCategory.handle);
router.get("/frete", getFrete.handle);

router.get("/:id/carts", getCarts.handle);
router.post("/carts", postCarts.handle);
router.put("/carts/:id", putCarts.handle);
router.delete("/carts/:id", deleteCarts.handle);

router.get("/:id/address", getAddress.handle);
router.post("/:id/address", postAddress.handle);

router.get("/:id/registration", getRegistration.handle);
router.post("/:id/registration", postRegistration.handle);

router.post("/:id/request", postRequest.handle);
router.get("/:id/requests", getRequest.handle);


export { router }