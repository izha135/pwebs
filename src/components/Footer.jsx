import React from "react";

export default function () {
  return (
    <footer class="mt-auto py-5 text-center bg-gray-100 " id="contact">
      <div class="container">
        <h2 class="display-4 pb-3 font-lobster-one text-violet-400 text-center">
          Get In Touch!
        </h2>
        <p class="lead text-center pb-3">
          I'm currently looking for full-time Software Engineering or Machine
          Learning opportunities! If you know of any positions available, if you
          have any questions, or if you just want to say hi, please feel free to
          email me at,{" "}
          <a class="text-decoration-none" href="mailto:ishaac135@gmail.com">
            ishaac135@gmail.com
          </a>
          .
        </p>
        <i class="fas fa-code"></i> with <i class="fas fa-heart"></i> by{" "}
        <a rel="noopener" href="" aria-label="My GitHub">
          {" "}
          <span class="badge bg-violet-200">Isha Chauhan</span>
        </a>{" "}
        using <i class="fab fa-react"></i>
        <p>
          <small class="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </div>
    </footer>
  );
}
