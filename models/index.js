// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag
  },
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Products, {
  foreignKey: 'tag_id',
  through: ProductTag,
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
