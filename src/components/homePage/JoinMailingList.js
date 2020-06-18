import React from 'react';

function JoinMailingList(){
    return(
        <form>
            <div className="form-row d-flex justify-content-center pt-2 border-top border-bottom">
                <div className="col-auto py-auto pt-1 mr-2">             
                    <h3 className="text-center">Join Our Mailing List</h3>
                </div>
                <div className="col-12 col-lg-auto">
                    <label className="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" className="form-control mb-2" id="name" name="name" placeholder="Name"/>
                </div>
                <div className="col-12 col-lg-auto">
                   <label className="sr-only" for="inlineFormInputGroup">Email</label>
                   <div className="input-group mb-2">
                        <input type="text" className="form-control" id="email" name="email" placeholder="Email"/>
                   </div>
                </div>        
                <div className="col-auto pb-2 pb-lg-0">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default JoinMailingList;