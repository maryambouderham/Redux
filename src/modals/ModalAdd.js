import React from 'react'

const ModalAdd = () => {
    return (
        <>
            <div className="modal fade" id="add" tabIndex={-1} role="dialog" aria-labelledby="add" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true"><span className="glyphicon glyphicon-remove" aria-hidden="true" /></button>
          <h4 className="modal-title custom_align" id="Heading">Add Your Detail</h4>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <input className="form-control " type="text" placeholder="title" />
          </div>
          <div className="form-group">
            <input className="form-control " type="text" placeholder="thumbail" />
          </div>
          <div className="form-group">
            <textarea rows={2} className="form-control" placeholder="Description" defaultValue={""} />
          </div>
        </div>
        <div className="modal-footer ">
          <button type="button" className="btn btn-success btn-lg" style={{width: '100%'}}><span className="glyphicon glyphicon-ok-sign" />&nbsp;Add</button>
        </div>
      </div>
      {/* /.modal-content */} 
    </div>
    {/* /.modal-dialog */} 
  </div>
        </>
    )
}

export default ModalAdd
