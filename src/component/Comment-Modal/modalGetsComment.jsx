import { useState,useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {getAllComment} from '../../js/Actions/CommentActions'
import { Button,Modal,Card,ListGroup } from 'react-bootstrap';
import ListCardComment from './ListCardComment'
import Comment from './comment';

function GetCommentModal({posts}){
  // console.log("posts comment",posts)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const dispatch=useDispatch();
  //   useEffect(()=>{
  //  dispatch(getAllComment())
  // },[])

// const dispatch=useDispatch();
// const handilgetsComments=()=>{
// dispatch(getAllComment())
// }
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        comment
      </Button> */}

      <span onClick={handleShow}>{posts.comment.length} <a href="#"className='Comment'>comment</a></span>

      <Modal show={show} onHide={handleClose}>
      <ListCardComment posts={posts._id}/>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default GetCommentModal;