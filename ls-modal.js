// initializing button
const showModal = document.querySelector(".ls-modal");

const callModal = (header, body, button) => {
  const modal = document.createElement('div');
  const modalHtml = `
      <div class="ls-modal-background ls-modal-flex">
          <div class="ls-modal-inner ls-modal-flex">
              <div class="ls-modal-contents ls-modal-flex">
                <span class="ls-modal-header">
                    <b>${header || "Attention!"}</b>
                </span>
                <br>
                <span class="ls-modal-body">
                    ${body || "This is default modal body text"}
                </span>
            </div>
            <div class="ls-modal-button-wrapper ls-modal-flex">
              <button class="ls-modal-button">${button || "OK"}</button>
            </div>
          </div>
      </div>`;  
  
  document.body.appendChild(modal).innerHTML = modalHtml;
  
  const modalWindow = document.querySelector(".ls-modal-background");
  const modalButton = document.querySelector(".ls-modal-button");

  const animateExit = (appliedTo) => {
    setTimeout(() => document.body.removeChild(modal), 180);
    (function() {
      appliedTo.classList.add('fade');
    }());
  }

  modalButton.addEventListener("click", async () => {
    animateExit(modalWindow)
  });
  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      animateExit(modalWindow)
    } 
  });
}

const btn = document.querySelector('.blah');
btn.addEventListener("click", () => callModal())