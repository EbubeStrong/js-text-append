import { mk } from "./util.js";

let mainContainer = mk("div", {
  id: "mainContainer",
  style: {
    backgroundColor: "white",
      padding: "0 10px 0 0",
      height: "fit-content",
    borderTop: "1px solid green",
    borderBottom: "1px solid green",
      borderRight: "1px solid green",
    borderRadius: "5px",
  },
});

let container = mk("div", {
  id: "container",
  style: {
      padding: "10px 10px 40px 50px",
      borderLeft: "5px solid lightblue",
  },
});

let title = mk("h1", {
  textContent:
    "See you on the other side, where we will discuss the Events in JavaScript, May God be with you",
  style: {
    color: "black",
    fontSize: "28px",
      textAlign: "left",
    padding: "0 0 0 0",
  },
});
let quoteLeft = mk("svg", { innerHTML: `<i class='bx bxs-quote-alt-left'></i>` });
let quoteRight = mk("svg", {
    innerHTML: `<i class='bx bxs-quote-alt-right'></i>`,
    style: {
        padding: "0 0 0 30px",
    }
});

function render() {
  container.prepend(quoteLeft);
  container.append(title);

//   let clonedQuote = quote.cloneNode(true);

  container.append(quoteRight);

  mainContainer.prepend(container);

  let root = document.getElementById("root");
  root.append(mainContainer);
}
render();
