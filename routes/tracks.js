import Router  from "express"

const router = Router();

router.get("/", (req, res) => {
    const data =  ["Hola", "mundo"]
    res.send({data})
});

export default router;
