db.produtos.find({}, { _id: 0, nome: 1, vendidos: 1 }).sort({ vendidos: 1 });

/** Ref: https://www.mongodb.com/docs/manual/reference/operator/update/sort/
 * The _id field is included in the returned documents by default unless you explicitly specify _id: 0 in the projection to suppress the field.
 */