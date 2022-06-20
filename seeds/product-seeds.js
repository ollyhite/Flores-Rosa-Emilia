const { Product } = require("../models");

const productData = [
  {
    product_name: "50 Roses Bouquet",
    product_desc:
      "A bouquet of roses carefully wrapped in wrapping paper and tied with a ribbon.",
    product_name_es: "Ramo de 50 Rosas",
    product_desc_es:
      "Un ramo de rosas cuidadosamente envuelto en papel de regalo y atado con una cinta.",
    price: 180.0,
    category_id: 1,
  }, // 1
  {
    product_name: "Quinceañera Bouquet",
    product_desc:
      "Made to be held by hand, this bouquet of bright spring colors is a perfect addition for a quinceañera.",
    product_name_es: "Ramo De Quinceañera",
    product_desc_es:
      "Hecho para sostenerse con la mano, este ramo de brillantes colores primaverales es un complemento perfecto para una quinceañera.",
    price: 120.0,
    category_id: 1,
  }, // 2
  {
    product_name: "Mixed Flowers Bouquet",
    product_desc:
      "This bouquet of mixed flowers is perfect for adding a touch of color and beauty to spring and summer occasions.",
    product_name_es: "Ramo de Flores Mixtas",
    product_desc_es:
      "Este ramo de flores mixtas es perfecto para agregar un toque de color y belleza a las ocasiones de primavera y verano.",
    price: 180.0,
    category_id: 1,
  }, // 3
  {
    product_name: "100 Roses Bouquet",
    product_desc:
      "100 beautiful roses carefully wrapped in paper and tied with a bow, this bouquet is perfect for making a big and bold statement.",
    product_name_es: "Ramo de 100 Rosas",
    product_desc_es:
      "100 hermosas rosas cuidadosamente envueltas en papel y atadas con un lazo, este ramo es perfecto para hacer una declaración grande y audaz.",
    price: 280.0,
    category_id: 1,
  }, // 4
  {
    product_name: '"La Reina" Bouquet',
    product_desc:
      "100 exquisite roses wrapped in paper, lit with lights and given a crown, this bouquet will proclaim your love the Queen of your Heart.",
    product_name_es: 'Ramo "La Reina"',
    product_desc_es:
      "100 exquisitas rosas envueltas en papel, iluminadas con luces y coronadas, este ramo proclamará tu amor la Reina de tu Corazón.",
    price: 280.0,
    category_id: 1,
  }, // 5
  {
    product_name: "Small Mixed Flower Arrangement",
    product_desc:
      "Carefully arranged in a vase or a basket, this arrangement will add a touch of color and beauty to any room.",
    product_name_es: "Arreglo Floral Mixto Pequeño",
    product_desc_es:
      "Cuidadosamente arreglado en un jarrón o en una canasta, este arreglo agregará un toque de color y belleza a cualquier habitación.",
    price: 200.0,
    category_id: 2,
  }, // 6
  {
    product_name: "Small e with Balloon",
    product_desc:
      "Inside the balloon are flowers that will never wilt, just like your love for her.",
    product_name_es: "Arreglo Pequeño con Globo",
    product_desc_es:
      "Dentro del globo hay flores que nunca se marchitarán, al igual que tu amor por ella.",
    price: 65.0,
    category_id: 2,
  }, // 7
  {
    product_name: "Double Globe Arrangement",
    product_desc:
      "This beautiful and stylish arrangement will add color and life wherever it is placed.",
    product_name_es: "Arreglo de Doble Globo",
    product_desc_es:
      "Este hermoso y elegante arreglo agregará color y vida donde sea que se coloque.",
    price: 300.0,
    category_id: 2,
  }, // 8
  {
    product_name: "Mixed Flower Arrangement with Greenery",
    product_desc:
      "This arrangement is perfect for lighting up a room with the beauty of springtime!",
    product_name_es: "Arreglo Floral Mixto con Vegetación",
    product_desc_es:
      "¡Este arreglo es perfecto para iluminar una habitación con la belleza de la primavera!",
    price: 280.0,
    category_id: 2,
  }, // 9
  {
    product_name: "Spring Cornucopia",
    product_desc:
      "A perfect placement to display joy and prosperity in any room.",
    product_name_es: "Cornucopia de Primavera",
    product_desc_es:
      "Un lugar perfecto para mostrar alegría y prosperidad en cualquier habitación.",
    price: 150.0,
    category_id: 2,
  }, // 10
  {
    product_name: "Rose Arrangement",
    product_desc: "Remind her of your love every time she walks into the room.",
    product_name_es: "Arreglo de Rosas",
    product_desc_es: "Recuérdale tu amor cada vez que entre en la habitación.",
    price: 250.0,
    category_id: 2,
  }, // 11
  {
    product_name: "Large Rose Arrangement",
    product_desc:
      "Your love for her is big and bold; this e will say it louder than any words.",
    product_name_es: "Arreglo de Rosas Grandes",
    product_desc_es:
      "Tu amor por ella es grande y audaz; esto e lo diré más fuerte que cualquier palabra.",
    price: 280.0,
    category_id: 2,
  }, // 12
  {
    product_name: "Wreath with Mixed Flowers",
    product_desc: "Add a touch of life and love to any door or wall.",
    product_name_es: "Corona con Flores Mixtas",
    product_desc_es:
      "Agregue un toque de vida y amor a cualquier puerta o pared.",
    price: 280.0,
    category_id: 2,
  }, // 13
  {
    product_name: "Large Box of Roses with Wine",
    product_desc: "The perfect addition to any romantic evening.",
    product_name_es: "Caja Grande de Rosas con Vino",
    product_desc_es: "El complemento perfecto para cualquier velada romántica.",
    price: 250.0,
    category_id: 3,
  }, // 14
  {
    product_name: "Large Box of Roses with Video Player",
    product_desc: "When words alone aren't enough, let this box speak for you.",
    product_name_es: "Caja Grande de Rosas con Reproductor de Video",
    product_desc_es:
      "Cuando las palabras por sí solas no sean suficientes, deje que esta caja hable por usted.",
    price: 280.0,
    category_id: 3,
  }, // 15
  {
    product_name: "Large Round Box",
    product_desc: "Let this box add beauty and enjoyment to any celebration.",
    product_name_es: "Caja Redonda Grande",
    product_desc_es:
      "Deje que esta caja agregue belleza y disfrute a cualquier celebración.",
    price: 180.0,
    category_id: 3,
  }, // 16
  {
    product_name: '"I 💓 U" Box with Roses',
    product_desc: "Words are cheap, so let this box speak for you.",
    product_name_es: 'Caja "I 💓 U" con Rosas',
    product_desc_es:
      "Las palabras son baratas, así que deja que esta caja hable por ti.",
    price: 190.0,
    category_id: 3,
  }, // 17
  {
    product_name: "Heart-Shaped Box of Roses",
    product_desc: "You've already given her your heart; let this box prove it.",
    product_name_es: "Caja de rosas en forma de corazón",
    product_desc_es:
      "Ya le has dado tu corazón; deja que esta caja lo demuestre.",
    price: 180.0,
    category_id: 3,
  }, // 18
  {
    product_name: "Heart-Shaped Box of Roses with Chocolates",
    product_desc:
      "When flowers alone aren't enough, give her something as sweet as she is.",
    product_name_es: "Caja de Rosas con Bombones en Forma de Corazón",
    product_desc_es:
      "Cuando las flores por sí solas no sean suficientes, regálale algo tan dulce como ella.",
    price: 190.0,
    category_id: 3,
  }, // 19
  {
    product_name: "Heart-Shaped Box of Roses with Large Balloon",
    product_desc:
      "Bold feelings require bold arrangements. Show her how bold you can be.",
    product_name_es: "Caja de Rosas en Forma de Corazón con Globo Grande",
    product_desc_es:
      "Los sentimientos audaces requieren arreglos audaces. Muéstrale lo audaz que puedes ser.",
    price: 150.0,
    category_id: 3,
  }, // 20
  {
    product_name: "Stuffed Bear in Balloon",
    product_desc:
      "Give her a constant companion to remind her of your love for her.",
    product_name_es: "Oso de peluche en globo",
    product_desc_es:
      "Dale un compañero constante para recordarle tu amor por ella.",
    price: 150.0,
    category_id: 4,
  }, // 21
  {
    product_name: "Double Balloon",
    product_desc: "Give her something as unique and beautiful as she is.",
    product_name_es: "Globo Doble",
    product_desc_es: "Regálale algo tan único y hermoso como ella.",
    price: 65.0,
    category_id: 4,
  }, // 22
  {
    product_name: "Printed Balloon",
    product_desc:
      "Actions speak louder than words; this arrangement does both.",
    product_name_es: "Globo Estampado",
    product_desc_es:
      "Las acciones hablan más que las palabras; este arreglo hace ambas cosas.",
    price: 100.0,
    category_id: 4,
  }, // 23
  {
    product_name: "Printed Balloon with Flowers",
    product_desc:
      "Give her the gift of words and flowers that will last as long as your love.",
    product_name_es: "Globo Estampado con Flores",
    product_desc_es:
      "Dale el regalo de palabras y flores que durarán tanto como tu amor.",
    price: 65.0,
    category_id: 4,
  }, // 24
];

const seedProducts = () => Product.bulkCreate(productData);
module.exports = seedProducts;
