import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env }>();

app.use("*", cors());

// Simple health check - no database needed
app.get("/api/health", async (c) => {
  return c.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// All other functionality redirects to Google Forms - no API endpoints needed

export default app;
