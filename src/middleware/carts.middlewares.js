export function validateParams(req, res, next) {
    const { pid, cid } = req.params;

    if (isNaN(pid) || isNaN(cid)) {
        res.status(400).json({ error: "los parametros debe ser un numero" });
    } else next();
}