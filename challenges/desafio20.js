/** Ref: https://www.mongodb.com/docs/manual/reference/operator/update/pop/ */

db.produtos.updateMany({ nome: "Quarteirão com Queijo" }, { $pop: { ingredientes: -1 } });

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });