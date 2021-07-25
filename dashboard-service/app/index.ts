import build, { server } from "./application";

const PORT = process.env.PORT || 3500;

/**
 * Initialise and configure server
 */
build();

/**
 * Start server on defined port
 */
server.listen(PORT, "0.0.0.0", (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
