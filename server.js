const express = require("express");
const courseRoutes = require("./routes/courseRoutes");

const server = express();
const PORT = 3000;

server.use(express.json());

server.use("/api/courses", courseRoutes);

server.use((req, res) => {
    res.status(404).json({ success: false, error: "Endpoint not found" });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
