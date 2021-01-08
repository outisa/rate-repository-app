import { useMutation} from '@apollo/react-hooks';
import { DELETE_REVIEW } from '../graphql/mutations';

const useDeleteReview= () => {
  const [remove, res] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    await remove({ variables: {id: id}});
  };

  return [deleteReview, res];
};

export default useDeleteReview;