import React from "react";
export default function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            <i>
              <h3>
                <b>MOVIE</b>HERO
              </h3>
            </i>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../pages/About">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../pages/Contact">
                  Contact
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control-sm" type="text" placeholder="Search" />
              <div>
                <div>
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Log In
                  </button>

                  <div class="modal" id="myModal" data-bs-theme="dark">
                    <div class="modal-dialog modal-lg" id="modalborder">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4 class="modal-title mx-auto" id="logintext">
                            <b>MOVIE</b>HERO
                          </h4>

                          <button
                            type="button"
                            class="btn-close ms-0"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>

                        <div class="mb-3 mt-5 w-75 mx-auto" id="finput">
                          <input
                            type="text"
                            class="form-control  bg-light"
                            id="email"
                            placeholder="Enter User ID"
                            name="email"
                          />
                          <label for="email">Enter User ID</label>
                        </div>

                        <div class="mt-3 mb-3 w-75 mx-auto" id="fInput">
                          components
                          <input
                            type="text"
                            class="form-control bg-light"
                            id="pwd"
                            placeholder="Enter password"
                            name="pswd"
                          />
                          <label for="pwd">Enter Password</label>{" "}
                        </div>

                        <div class="modal-footer mx-auto mt-4" id="modalButton">
                          <button
                            type="button"
                            class="btn btn-warning"
                            data-bs-dismiss="modal"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
