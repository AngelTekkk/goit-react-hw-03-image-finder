import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=28534250-bbba7677f72b19e29ec2a8926&image_type=photo&orientation=horizontal&safesearch=true';

export default async function PixabayAPI(
  searchQuery = '',
  currentPage = 1,
  perPage = 12
) {
  try {
    const response = await axios.get(
      `&q=$${searchQuery}&page=${currentPage}&per_page=${perPage}`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
