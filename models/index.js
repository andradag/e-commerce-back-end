const Category = require("./Category");
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Tag = require("./Tag");

Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
});

Tag.belongsToMany(Product, {
  through: {
    model: this.ProductTag,
    unique: false,
  },
});

module.exports = {
  Category,
  Product,
  ProductTag,
  Tag,
};
