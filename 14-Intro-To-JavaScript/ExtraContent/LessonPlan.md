### 22. Students Do: Todo List (0:15)

* Students will add the ability to add to the ToDo list from before. Open [index.html](14-Stu_AddingTodos/Solved/index.html) in a web browser and demonstrate how the results should look.

* **Files:**

  * [index.html](14-Stu_AddingTodos/Unsolved/index.html)

  * [index.js](14-Stu_AddingTodos/Unsolved/index.js)

* **Instructions**

  * Open `index.html` and notice the input field and a button that currently don't do anything.

  * Open `index.js` and add a "click" event listener to the `$addTodoBtn`.

  * When the `$addTodoBtn` is clicked, save a reference to the current `value` of the `$todoInput`.

  * Using the `push` method on the `todos` array, add a new object to the end of the `todos` array. This new object should have 2 properties:

    * A `text` property set to the `value` of the `$todoInput` element.

    * A `complete` property set to `false`.

  * After pushing the new object to the `todos` array, call `renderTodos` to re-render the list.

* **Hints**

  * See [MDN Docs For Input Element Properties](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)

  * See [MDN Docs For Array.prototype.push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

  * Check out [MDN Docs for EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

* **Bonus**

  * Try clearing the input field after adding a new todo!

### 23. Instructor Do: Review Adding ToDos (0:10)

* When time is up open [index.html](14-Stu_AddingTodos/Solved/index.html) in an editor and browser. Then open [index.js](14-Stu_AddingTodos/Solved/index.js) and [style.css](14-Stu_AddingTodos/Solved/style.css) in an editor.

* Key things to point out are:

  * Add the bootstrap cdn at the top of the HTML file.

  * This example added a jumbotron and button from bootstrap.

  * Add `text-alignment` and `background-color` in the `style.css` file.

  * Save a reference to the button to the variable `$addTodoBtn`.

  * Save a reference to the page's input field and store it in the `$todoInput` variable.

  * Collect the `value` property of the `$todoInput` element and store this string within the variable `inputText`.

  * `push` a new object to the end of the `todos` array. The `push` method works like Python's `append` method in that it adds a new element to the end of the array/list.

  * To clear out the input field, replace the value with a blank string.

  * Call the `renderTodos` function again, which will add the element in the list.

  * Answer and further questions.
