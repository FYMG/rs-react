import { Character } from '@models/RickAndMortyApiResponse';
import { download, generateCsv } from 'export-to-csv';
import config from '@services/csv/config';

const convertCsv = (item: Character) => ({
  id: item.id,
  name: item.name,
  status: item.status,
  species: item.species,
  gender: item.gender,
  origin: item.origin.name,
  location: item.location.name,
  image: item.image,
});

const downloadCharacterCsv = (items: Character[]) => {
  const downloadConfig = config();

  downloadConfig.filename = `characters_${items.length}_${Date.now()}`;
  downloadConfig.title = 'Characters';

  const csv = generateCsv(downloadConfig)(items.map((item) => convertCsv(item)));

  download(downloadConfig)(csv);
};

export default downloadCharacterCsv;
