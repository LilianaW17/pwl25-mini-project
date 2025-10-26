const validateProposal = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "Request body is required." });
    }

    const { judul, kategori, ketua, univ, tgl_pengajuan, pendanaan } = req.body;

    if (!judul || !ketua || pendanaan === undefined) {
        return res.status(400).json({
            message: "Fields 'judul', 'ketua', and 'pendanaan' are required"
        });
    }

    if (typeof pendanaan !== 'number') {
        return res.status(400).json({ message: "'pendanaan' must be a number" });
    }

    next();
};

module.exports = validateProposal;