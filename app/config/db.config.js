const fs = require('fs');

module.exports = {
    HOST: "financedb.mysql.database.azure.com",
    USER: "luis",
    PASSWORD: "Vortrexs22_",
    DB: "financetableone",
    ssl:{ca:fs.readFileSync(__dirname + "/DigiCertGlobalRootCA.crt.pem")}
};
