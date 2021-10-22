import React from 'react'
import Datatable from './Datatable'

const Dashboard = (props) => {
    return (
        <div>
            <div className="home">
  <div className="container-fluid display-table">
    <div className="row display-table-row">
      {/* SIDEBAR */}
      <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
        <div className="logo">
          <a hef="home.html"><img src="https://pngimage.net/wp-content/uploads/2018/06/movie-logos-png-3.png" alt="merkery_logo" className="hidden-xs hidden-sm" />
          </a>
        </div>
        <div className="navi">
          <ul>
            <li className="active"><a href="#"><i className="fa fa-home" aria-hidden="true" /><span className="hidden-xs hidden-sm">Home</span></a></li>
            <li><a href="#"><i className="fa fa-calendar" aria-hidden="true" /><span className="hidden-xs hidden-sm">Users</span></a></li>
            <li><a href="#"><i className="fa fa-cog" aria-hidden="true" /><span className="hidden-xs hidden-sm">Setting</span></a></li>
          </ul>
        </div>
      </div>
      {/* SIDEBAR/ */}
      <div className="col-md-10 col-sm-11 display-table-cell v-align">
        <div className="row">
          {/* HEADER */}
          <header>
            <div className="col-md-7">
              <nav className="navbar-default pull-left">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#side-menu" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
              </nav>
              <div className="search hidden-xs hidden-sm">
                <input type="text" placeholder="Search" id="search" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="header-rightside">
                <ul className="list-inline header-top pull-right">
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="https://previews.123rf.com/images/aurora72/aurora721606/aurora72160600006/59282564-avatar-girls-icon.jpg" alt="user" />
                      <b className="caret" /></a>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="navbar-content">
                          <span>JS Krishna</span>
                          <p className="text-muted small">
                            me@jskrishna.com
                          </p>
                          <div className="divider">
                          </div>
                          <a href="#" className="view btn-sm active">View Profile</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          {/* HEADER/ */}
        </div>
        <div className="user-dashboard">
          {/* PAGE CONTENT */}
          <Datatable list={listMovies}  OnClickDeleteMovie={DeleteMovie}/>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div id="add_project" className="modal fade" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header login-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <h4 className="modal-title">Add Project</h4>
        </div>
        <div className="modal-body">
          <input type="text" placeholder="Project Title" name="name" />
          <input type="text" placeholder="Post of Post" name="mail" />
          <input type="text" placeholder="Author" name="passsword" />
          <textarea placeholder="Desicrption" defaultValue={""} />
        </div>
        <div className="modal-footer">
          <button type="button" className="cancel" data-dismiss="modal">Close</button>
          <button type="button" className="add-project" data-dismiss="modal">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

export default Dashboard
