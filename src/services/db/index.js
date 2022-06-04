require('dotenv').config();
import { MongoClient } from 'mongodb';
import * as config from './config';
import makeQuery from './query';

const client = new MongoClient(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getNfts = async (filtersString) => {
  const filters = JSON.parse(Buffer.from(filtersString, 'base64').toString());

  try {
    await client.connect();

    const database = client.db(config.dbName);
    const nfts = database.collection(config.nftCollectionName);

    const query = makeQuery(filters);

    const cursor = nfts
      .find(query)
      .limit(100)
      .skip(filters.skip || 0);

    return await cursor.toArray();
  } finally {
    await client.close();
  }
};

export default getNfts;
