db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.count(),
});

db.resumoProdutos.findOne({
  franquia: "McDonalds",
}, { _id: 0, franquia: 1, totalProdutos: 1 });