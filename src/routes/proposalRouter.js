const express = require('express');
const router = express.Router();

const proposalController = require('../controllers/proposalController');
const validateProposal = require('../middleware/proposalValidate');

router.get('/', proposalController.getAllProposals);
router.get('/:id', proposalController.getProposalById);
router.post('/', validateProposal, proposalController.createProposal);
router.put('/:id', validateProposal, proposalController.updateProposal);
router.delete('/:id', proposalController.deleteProposal);

module.exports = router;