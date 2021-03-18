const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryVal = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [{ model: Product }],
    })
    res.status(200).json(categoryVal);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products

router.get('/:id', async (req, res) => {
  try {
    const categoryVal = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryVal) {
      res.status(404).json({ message: 'Sorry, no category found matching our records, try again' });
      return;
    }

    res.status(200).json(categoryVal);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body)
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err)
  }
});

// update a category by its `id` value

router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {

      where: {
        id: req.params.id
      }
    }).then(updateCategory)
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value

router.delete('/:id', async (req, res) => {
  try {
    const destroyCategory = await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }).then(destroyCategory => (destroyCategory) ? res.status(200).json : res.status(404).json
        ({ message: 'You cant destroy something that is NOT there!' }));
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
