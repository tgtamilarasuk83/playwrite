# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationWebsite\test\Handlingalerts.spec.ts >> promt  alert
- Location: AutomationWebsite\test\Handlingalerts.spec.ts:39:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[@class=\'bg-yellow-500 text-white px-4 py-2 rounded\']')
    - locator resolved to <button onclick="showConfirm()" class="bg-yellow-500 text-white px-4 py-2 rounded">Show↵                        Confirm</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    22 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

```
Error: browserContext.close: Target page, context or browser has been closed
```