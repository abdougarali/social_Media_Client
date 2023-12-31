import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import ListeLikes from  './ListeLikes'
const LikeModal = (props) => {
// console.log("posts",props.posts)

  return (
    <div>
         <Modal
         {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      >
    
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <ListeLikes posts={props.posts}/>
        {/* <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>

    </div>
  )
}

export default LikeModal