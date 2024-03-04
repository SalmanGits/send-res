## Express Response Sender

> A simple utility function to send responses in Express.

## Function

### sendResponse

```js
/**
 * Send response with status and additional data.
 * @param {object} obj - Object containing response, status, and additional data.
 * @param {object} obj.res - Express response object.
 * @param {number} obj.status - HTTP status code.
 * @param {object} obj.data - Additional data to send in the response.
 */
sendResponse(obj:object)
```

Example:

```js
const express = require('express');
const { sendResponse } = require('res-express');
const app = express();

app.get("/", (req, res) => {
    sendResponse({ res, status: 200, data: { success: true } });
});

app.listen(3000, () => console.log("Server is running on port 3000"));
```
## Authors

* **Belal Ahmad** - [BelalAhmad](https://github.com/SalmanGits)



