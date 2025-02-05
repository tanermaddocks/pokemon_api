const express = require("express");

const router = express.Router();

// http://localhost:5678/team/:teamid
router.get(
	"/one/:teamid",  // route path 
	async (request, response) => { // route final callback 

		response.json({

		});
	}
);

// http://localhost:5678/team/all
router.get(
	"/all",  // route path 
	async (request, response) => { // route final callback 

		response.json({

		});
	}
);

// http://localhost:5678/team/
router.post(
	"/",  // route path 
	async (request, response) => { // route final callback 

		response.json({

		});
	}
);

// http://localhost:5678/team/:teamid
router.patch(
	"/:teamid",  // route path 
	async (request, response) => { // route final callback 

		response.json({

		});
	}
);

// http://localhost:5678/team/:teamid
router.delete(
	"/teamid",  // route path 
	async (request, response) => { // route final callback 

		response.json({

		});
	}
);



module.exports = {
	TeamRouter: router
}