# Basic modal alert

Simple & light modal window alerts

![modal example](./modal.JPG)

## 1. Add files to the project:

ls-modal.js \
ls-modal.css

## 2. Add to the HTML:

```html
<link rel="stylesheet" href="./ls-modal.css"> 
<script async src="./ls-modal.js"></script>
```

## 3. Call for modal:

From HTML: 
    
```html
<button
    onclick="callModal('Header Text', 'Body Text', 'Button Text')">
    Butty Button
</button>
```

From code:
```js
const btn = document.querySelector('.neededButtonTrigger');
btn.addEventListener("click", () => callModal('Header Text', 'Body Text', 'Button Text'));
```
