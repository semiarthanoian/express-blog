const express = require("express");
const router = express.Router();

router.all("/(:type)?(/:action)?(/:id)?", (request, response, next) => {
   var { session } = request.cookies;
   var { action } = request.params;

   if (session == "admin")
      next() /* main routers */;
   else
      if (["add", "edit", "delete"].includes(action))
         response.redirect("/admin/login");
      else
         next() /* main routers */;
}); // router.all

module.exports = router;
