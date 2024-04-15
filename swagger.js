const swaggerAutogen = require("swagger-autogen");

const doc = {
    info: {
        title: "My student API",
        description: "Api for showing students data.",
    },
    host: "nodejs-student-api-1.onrender.com",
    // host: "localhost:3000",
    schemes: ["http"],
};

const outputfile = "./swagger.json";
const endpointFiles = ["./routes/index.js"];

// Run to
swaggerAutogen(outputfile, endpointFiles, doc);

// Generates the swagger.json file
swaggerAutogen(outputfile, endpointFiles, doc).then(async() => {
    await import("./server.js");
});