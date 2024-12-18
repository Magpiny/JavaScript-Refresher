// All about HTML5 form manipulation
let buttons = document.querySelectorAll("[name=color]");
for (let button of Array.from(buttons)) {
  button.addEventListener("change", () => {
    document.body.style.background = button.value;
  });
}

//Select
let select = document.querySelector("select");
let output = document.querySelector("span#output");
select.addEventListener("change", () => {
  let number = 0;
  for (let option of Array.from(select.options)) {
    if (option.selected) {
      number += Number(option.value);
    }
  }
  output.textContent = number;
});

// -> Never worked and i don't know why??
let input1 = document.querySelector("input#file");
input1.addEventListener("change", () => {
  if (input1.files.length > 0) {
    let file1 = input1.files[0];
    print("You chose", file1.name);
    if (file1.type) {
      print("It has type", file1.type);
    }
  }
});
print("Hello from form file", input1.nodeType);

let input3 = document.querySelector("input#file2");
input3.addEventListener("change", () => {
  for (let file of Array.from(input3.files)) {
    let reader = new FileReader();
    if (reader.error) {
      print(new ErrorEvent("Error reading file"));
    }
    reader.addEventListener("load", () => {
      console.log(
        "File :",
        file.name,
        " is of type: ",
        file.type,
        " size: ",
        (file.size / 1026).toFixed(0),
        "kb",
        " starts with: \n",
        reader.result.slice(0, 50)
      );
    });
    reader.readAsText(file, "");
  }
});
