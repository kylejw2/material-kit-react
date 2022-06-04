import db from '../../services/db';

const nftHandler = async (req, res) => {
  if (req.method !== 'GET') {
    // Return 200 to avoid API predators
    return res.status(200);
  }

  const { filters } = req.query;

  const result = await db(filters);

  return res.status(200).json(result);
};

export default nftHandler;
