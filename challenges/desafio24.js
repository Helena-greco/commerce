db.produtos.updateMany({},
  { $push: { valoresNutricionais: { $each: [], $sort: { percentual: -1 } } } }); // sem acrescentar elemento

db.produtos.find({}, { _id: 0, nome: 1, valoresNutricionais: 1 });