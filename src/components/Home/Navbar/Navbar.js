import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link mr-5" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">
              Denatl Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">
              Reviews
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">
              Blog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">
              Blog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link mr-5" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
