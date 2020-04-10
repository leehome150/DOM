const div = dom.create("<div>hi</div>");
console.log(div);

dom.after(test, div);

dom.before(test, test2);

const div2 = dom.create("<div></div>");
dom.append(test, div2);

const div3 = dom.create("<div>yeah</div>");
dom.wrap(test, div3);

dom.remove(test2);

dom.attr(test, "title", "leehome");

dom.text(a, "liuchuanfeng");

// dom.html(test, " LOL");
// dom.class.on(test, "click", () => {
//   console.log("别点了");
// });
// console.log(f);
dom.class.add(test, "red");
dom.class.add(l, "red");
dom.class.add(i, "red");
dom.class.add(u, "red");
const f = dom.find("#test.red")[0];
dom.style(test, { border: "1px solid red", color: "red" });
const divList = dom.find(".red");
console.log(divList);
dom.each(divList, (n) => console.log(n));
