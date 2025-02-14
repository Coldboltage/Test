# 🚀 HEO Test

Welcome to HEO Test. This project is a technical assessment that demonstrates essential TypeScript features along with Jest testing for a vehicle registration management system. It utilizes both function-based and class-based approaches to address core registration functionalities.

## 📁 Directory Structure

    └── coldboltage-test/
        ├── jest.config.js
        ├── package.json
        ├── tsconfig.json
        └── src/
            ├── _tests_/
            │   └── reg-check/
            │       └── features.spec.ts
            └── reg-check/
                ├── reg-check.types.ts
                └── reg-checker.ts


## 📜 Files Overview

- **jest.config.js** – Configures Jest for testing 🧪
- **package.json** – Defines scripts and dependencies 📦
- **tsconfig.json** – Specifies TypeScript compiler options ⚙️
- **src/\_tests\_/reg-check/features.spec.ts** – Contains the test suite ✅
- **src/reg-check/reg-checker.ts** – Implements core logic (function-based and class-based) 🔧

## 🛠️ Scripts

Available `npm` commands:

- **npm run build** – Compiles TypeScript to JavaScript 🏗️
- **npm run test** – Executes the Jest test suite 🧪

## 💡 Usage

1.  **Install dependencies:**

        npm install

2.  **Build the project (optional for testing):**

        npm run build

3.  **Run tests:**

        npm run test

4.  **Local test (execute compiled code):**

        npm run local-test

## 🎉 What to Expect

\- The **featureOne** and **featureTwo** functions provide basic map-building and vehicle ID lookups 🚗  
\- The **VehicleMap** class offers similar functionality with additional methods for counting, updating, and adding new registrations 📊  
\- The `features.spec.ts` file demonstrates usage and verifies that all functionalities work as expected ✅

Thank you for reviewing this assessment. We appreciate your attention to detail and look forward to your feedback. 👍
