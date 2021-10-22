import React from 'react'

const ModalEdit = () => {
    return (
        <>
          <div className="modal fade" id="edit" tabIndex={-1} role="dialog" aria-labelledby="edit" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true" /></button>
          <h4 className="modal-title custom_align" id="Heading">Edit Your Detail</h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <input className="form-control " type="text" placeholder="Mohsin" />
          </div>
          <div className="form-group">
            <input className="form-control " type="text" placeholder="Irshad" />
          </div>
          <div className="form-group">
            <textarea rows={2} className="form-control" placeholder="CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan" defaultValue={""} />
          </div>
        </div>
        <div className="modal-footer ">
          <button type="button" className="btn btn-warning btn-lg" style={{width: '100%'}}><span className="glyphicon glyphicon-ok-sign" />&nbsp;Update</button>
        </div>
      </div>
      {/* /.modal-content */} 
    </div>
    {/* /.modal-dialog */} 
  </div>  
        </>
    )
}

export default ModalEdit
