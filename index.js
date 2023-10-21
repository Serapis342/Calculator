function setup() {
    setup = function () {
    };
    window.dotPressed = false;
}

setup();

function appendOperation(operation) {
    let container = document.getElementById('resultArea').innerHTML;
    if (!(container.endsWith(' ') && isNaN(operation)) && !(container.endsWith('.') && isNaN(operation))) {
        if (!(isNaN(operation) && container === '')) {
            if (operation === '.' && dotPressed === false || operation !== '.') {
                document.getElementById('resultArea').innerHTML += operation;
            }
        }
    }
}

function calculateResult() {
    let container = document.getElementById('resultArea');
    if (container.textContent.includes('+') || container.textContent.includes('-') || container.textContent.includes('*') || container.textContent.includes('/')) {
        if (container.innerHTML !== "") {
            container.innerHTML = eval(container.innerHTML);
        }
    } else container.innerHTML = container.innerText * 2;
}

function del() {
    let container = document.getElementById('resultArea');
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}

function dotPressedHandler(handler) {
    let container = document.getElementById('resultArea').innerText;
    if (handler === true) {
        if (!(container.endsWith('+') || container.endsWith('-') || container.endsWith('*') || container.endsWith('/') || container.length === 0)) {
            dotPressed = handler;
        }
    } else dotPressed = handler;
}

function CE() {
    dotPressed = false;
    document.getElementById('resultArea').innerHTML = '';
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("serviceworker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
