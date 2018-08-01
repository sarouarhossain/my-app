import axios from 'axios'
export const simpleAction = () => dispatch => {
  axios.get("http://localhost:9999/")
  .then(function(response){
    dispatch({
      type: 'SIMPLE_ACTION',
      payload: response
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
}