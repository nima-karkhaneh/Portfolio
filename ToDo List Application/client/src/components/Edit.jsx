import React from "react";


function Edit() {
    return(
        <>
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal">
                Edit
            </button>

            <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h4 class="modal-title">Edit your Todo Item</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div class="modal-body">
                            <input className="form-control" type="text" placeholder="Please edit your item here"/>
                        </div>

                        <div class="modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal">Submit</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit