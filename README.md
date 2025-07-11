# ✅ Chapter 4: Schema Validation & Field Constraints in Mongoose

This chapter focuses on ensuring **data quality and consistency** using Mongoose’s built-in validation options and **custom validators**.

---

## 📌 1. Why Use Schema Validation?

* ✅ Prevents **invalid or malformed data** from entering your database
* ✅ Makes your app more **robust, consistent, and secure**
* ✅ Defines **clear rules** and constraints for each field

---

## 🧱 2. Built-in Validation Types

| Constraint   | Description                          | Example                                 |
| ------------ | ------------------------------------ | --------------------------------------- |
| `required`   | Field must be provided               | `{ required: true }`                    |
| `unique`     | Value must be unique (creates index) | `{ unique: true }`                      |
| `min`, `max` | Numeric range validation             | `{ min: 1, max: 100 }`                  |
| `enum`       | Restrict values to a fixed list      | `{ enum: ['admin', 'user'] }`           |
| `match`      | Regex pattern validation             | `{ match: /^[\w\-\.]+@[\w\-]+\.\w+$/ }` |
| `default`    | Assign default if not provided       | `{ default: true }`                     |

---

## ✅ 3. Example Schema with Validations

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: 3,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/
  },
  age: {
    type: Number,
    min: 18,
    max: 65
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'guest'],
    default: 'user'
  },
  joinedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
```

📝 **Explanation**:

* `required` ensures values are present
* `unique` ensures no duplicate emails
* `match` uses regex for email format
* `enum` limits the `role` field to specific values
* `default` assigns the current date to `joinedAt` if not given

---

## 🛠 4. Custom Validation

Mongoose allows you to define **custom logic** using the `validate` property:

```js
phone: {
  type: String,
  validate: {
    validator: function (v) {
      return /^\d{10}$/.test(v); // Exactly 10 digits
    },
    message: props => `${props.value} is not a valid 10-digit phone number!`
  }
}
```

💡 **Use Case**: Perfect for validating Indian phone numbers, postal codes, or custom logic like “password must contain a symbol”.

---

## 🧠 Summary

* ✅ Mongoose offers **powerful field validation** out of the box
* ✅ Use validation to protect your DB from **bad data**
* ✅ Add custom logic where built-in validators fall short
* ✅ Combine with error handling in your app for safe data workflows

---

Would you like a `.docx` file version or a validation test example in `app.js` as the next step?
