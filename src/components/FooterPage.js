import React from "react";
export default function FooterPage() {
  return (
    <div id="footerText">
      <footer class="bg-dark text-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-centr text-md-left">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <p>
                <a href="#" class="text-white">
                  {" "}
                  Advertising
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  {" "}
                  Careers
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  {" "}
                  Businessess
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  {" "}
                  Ad Preferences
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  {" "}
                  Your Privacy Choices
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  Cookie Settings
                </a>
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <p>
                <a href="#" class="text-white">
                  {" "}
                  Investor
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  {" "}
                  Blog
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  {" "}
                  Gifts
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  {" "}
                  Terms
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  Help
                </a>
              </p>
              <p>
                <a href="#" class="text-white">
                  Community
                </a>
              </p>
            </div>

            <div
              class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3"
              id="newsLetter"
            >
              <p>
                <h2>GET OUR</h2>
              </p>
              <p>
                <h3>Newsletter</h3>
              </p>
              <button class="btn btn-warning" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
