import { useMutation} from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../graphql/mutations';


const useReview= () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ ownerName, repositoryName, rating, text}) => {
    const repositoryId = await mutate({ variables: { review: 
      {repositoryName: repositoryName, ownerName: ownerName, rating: rating, text: text}
    }});
    return repositoryId;
  };

  return [createReview, result];
};

export default useReview;