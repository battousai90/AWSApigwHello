// Import necessary modules
import { Router } from 'express';
import { sayHello } from '../controllers/helloController';

// Create a new router instance
const router = Router();

// Define the route for GET /hello
router.get('/hello', sayHello);

// Export the router
export default router;
