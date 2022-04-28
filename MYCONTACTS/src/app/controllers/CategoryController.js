const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(req, res) {
    const { orderBy } = req.query;
    const categories = await CategoryRepository.findAll(orderBy);

    if (!categories) {
      res.status(404).json({ error: 'Category not found' });
    }

    res.json(categories);
  }

  async show(req, res) {
    const { id } = req.params;

    const category = await CategoryRepository.findById(id);

    res.json(category);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoryRepository.create(name);

    res.json(category);
  }

  async delete(req, res) {
    const { id } = req.params;

    await CategoryRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new CategoryController();
