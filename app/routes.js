// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line


// dispensing docs routes //
router.post('/fp34d/v1/vaccine-add-another', function(req,res) {

    var addAnother = req.session.data['add-another']

    if (addAnother == 'yes') {
        res.redirect('/fp34d/v1/doctor-details')
    }
    else if(addAnother == 'submit') {
        res.redirect('/optometry/ssecs/form/declare-submit')
    }
    else {
        res.redirect('/fp34d/v1/start-page')
    }
})

router.get(/influenzaOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('influenza-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('vaccine-typhoid'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/influenzaTwo/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('influenza-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('typhoid-details'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/typhoidAdd/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('typhoid-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('summary'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/typhoidOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('typhoid-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('vaccine-hep-a'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherOne/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('patient-details'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration-lft'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherVaccine/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-dropdown-no-records1'); 
  } else {
    res.redirect('table-summary');
  }
});

router.get(/addAnotherFlu/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-dropdown-no-records2'); 
  } else {
    res.redirect('table-summary');
  }
});

router.get(/addDoctor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('doctor-details'); 
  } else {
    res.redirect('summary-all-doctors');
  }
});

router.get(/addanotherDoctor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('doctor-details'); 
  } else {
    res.redirect('summary-all-doctors');
  }
});

router.get(/addAnotherL4/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid1'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherL0/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid0'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherL1/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid1'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherL2/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid2'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherL3/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid3'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherLft/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/areYouSure/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('declaration-lft'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('lft-start-day'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addAnotherDate/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('summary-add'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('lft-start-day'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/deleteDate/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-grid1'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('table-grid1'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addToSummary/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('lft-start-day'); // if both input values are "Yes" - redirect to 'page-name' //
  } else {
    res.redirect('declaration2'); // if both input values are "Yes" - redirect to 'page-name' //
  }
});

router.get(/addEnterVaccine01/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('all-vaccine-table-dropdown-1-10'); 
  } else {
    res.redirect('all-vaccine-table-dropdown-1-10');
  }
});

router.get(/addEnterVaccine1111/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-summary'); 
  } else {
    res.redirect('start-page');
  }
});

router.get(/addEnterVaccine1120/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-summary'); 
  } else {
    res.redirect('start-page');
  }
});

router.get(/addEnterVaccine2123/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-summary'); 
  } else {
    res.redirect('start-page');
  }
});

router.get(/addEnterVaccine0/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-summary'); 
  } else {
    res.redirect('start-page');
  }
});

router.get(/addEnterVaccine0110/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('table-summary'); 
  } else {
    res.redirect('all-vaccine-table-dropdown-1-10-pagination');
  }
});

router.get(/addContractor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('caseworker-nav'); 
  } else {
    res.redirect('contractor-nav');
  }
});

router.get(/addRetrospective/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('doctor-details'); 
  } else {
    res.redirect('start-page-1');
  }
});

router.get(/updateContractorP/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-contractor-personal-list'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/updateContractorB/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-contractor-banking-list'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/deactivateContractor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('deactivate-contractor-confirmation'); 
  } else {
    res.redirect('deactivate-contractor-list');
  }
});

router.get(/deactivateAnotherContractor/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('deactivate-contractor-list'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/addPerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('performer-nav'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/updatePerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('update-performer-list'); 
  } else {
    res.redirect('caseworker-nav');
  }
});

router.get(/assignPerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('assign-performer-confirmation'); 
  } else {
    res.redirect('assign-performer-to-contractor-list');
  }
});

router.get(/assignMorePerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('assign-performer-to-contractor-list'); 
  } else {
    res.redirect('contractor-nav');
  }
});

router.get(/deactivatePerformer/, function (req, res) {
  if (req.query.radioInlineGroup === "Yes" ) {
    res.redirect('deactivate-performer-confirmation'); 
  } else {
    res.redirect('deactivate-performer-list');
  }
});

module.exports = router;
