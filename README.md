# React + TypeScript + Vite

# 🌤️ Frontend Challenge — LAPISCO

Web application developed with **React + TypeScript** as part of the **LAPISCO Frontend Challenge**, with the goal of consuming public weather data APIs and presenting current and future weather information in an interactive, responsive, and accessible way.

The application allows users to search for cities, automatically identify the user's approximate location through IP-based geolocation, check current weather conditions, and visualize temperature forecasts for the next 7 days through an interactive chart.

---

# 📌 About the Project

This project was developed to meet the requirements proposed by the **LAPISCO Frontend Challenge**, which requires the development of an application capable of:

* 🔎 Dynamically searching for cities;
* 📍 Automatically identifying the user's approximate location;
* 🌡️ Displaying current weather data;
* 💧 Displaying relative humidity;
* 💨 Displaying wind speed;
* 📊 Displaying the minimum and maximum temperature variation for the next 7 days;
* 🌦️ Visually differentiating weather conditions;
* 🌗 Providing light and dark themes;
* 📱 Adapting the interface to different screen sizes;
* ⚠️ Handling API communication errors;
* ⚛️ Using React and TypeScript;
* 🧠 Using Context API for shared state management;
* 🚀 Applying good development practices and code organization.

The project uses public APIs and does not require an API key to operate.

---

# ✨ Features

## 🔎 City Search

Users can enter a city name to check its weather conditions.

The application follows this process:

```text
City name
      ↓
Geocoding API
      ↓
Latitude + Longitude
      ↓
Weather forecast API
      ↓
Weather data
      ↓
User interface
```

Geocoding is required because the weather API uses geographic coordinates to perform weather forecasts.

---

## 📍 Automatic Location Detection

When the application starts, it attempts to identify the user's approximate location using **IP-based geolocation**.

The process is:

```text
User opens the application
          ↓
IP-based location request
          ↓
Location identified
          ↓
Weather request
          ↓
Forecast displayed automatically
```

> **Note:** IP-based geolocation is approximate and may return a city different from the user's exact physical location. This is a natural limitation of this geolocation method.

---

## 🌡️ Current Weather Conditions

The application displays current weather information, including:

* 🌡️ Temperature;
* 💧 Relative humidity;
* 💨 Wind speed;
* 🌦️ Current weather condition.

Weather conditions are interpreted based on the weather code returned by the API.

---

## 🌦️ Weather Condition Identification

Weather codes are converted into user-friendly information.

The application contains a function responsible for transforming the received weather code into presentation information:

```text
Weather Code
     ↓
getWeatherCondition()
     ↓
┌─────────────────────┐
│ Icon                │
│ Description         │
│ CSS Class           │
└─────────────────────┘
```

This allows different conditions, such as clear skies, cloudy weather, rain, and other weather situations, to be visually represented in different ways.

This logic is isolated in `utils/weatherCondition.ts`, preventing weather-related business rules from being placed directly inside UI components.

---

## 📊 7-Day Forecast

The application displays an interactive chart using **Recharts**.

The following temperatures are displayed:

* 🔺 Daily maximum temperature;
* 🔻 Daily minimum temperature.

The data received from the API is transformed before being passed to the chart component:

```text
API
│
├── dates[]
├── temperature_max[]
└── temperature_min[]
        ↓
Data transformation
        ↓
chartData[]
        ↓
Recharts
        ↓
Chart
```

The goal is to make it easier to compare temperature variations over the next seven days.

> The chart represents a **future forecast**, not historical temperature data.

---

## 🌗 Light and Dark Theme

The application supports:

* ☀️ Light theme;
* 🌙 Dark theme.

Theme management is handled through the **Context API**.

The selected preference is also stored in `localStorage`, allowing the selected theme to persist between visits.

When no previously saved preference exists, the application also considers the operating system's appearance preference through `prefers-color-scheme`.

Flow:

```text
Saved preference?
       │
   ┌───┴───┐
  YES      NO
   │        │
   ▼        ▼
localStorage
            ↓
    prefers-color-scheme
            ↓
       Initial theme
```

---

## 📱 Responsive Layout

The interface was designed to adapt to different screen sizes.

The layout primarily considers:

* 🖥️ Desktop computers;
* 💻 Laptops;
* 📱 Smartphones;
* 📲 Tablets.

The search component, weather cards, chart, and interface controls are organized to maintain usability across different resolutions.

---

## ⚠️ Error Handling

The application handles situations in which requests cannot be completed.

Some of the handled scenarios include:

* City not found;
* Failure to identify the user's location;
* Error while retrieving weather data;
* API communication failure;
* Missing expected data.

Error messages are centralized in:

```text
src/enums/error-text.enum.ts
```

This prevents error strings from being duplicated across different parts of the application and makes future changes easier.

---

# 🛠️ Technologies Used

## Front-end

| Technology     | Usage                                     |
| -------------- | ----------------------------------------- |
| **React**      | Building the interface and components     |
| **TypeScript** | Static typing and development-time safety |
| **Vite**       | Development environment and build tool    |
| **Recharts**   | Weather data visualization                |
| **CSS**        | Styling and responsive layout             |

## Development Tools

| Tool                    | Usage                            |
| ----------------------- | -------------------------------- |
| **ESLint**              | Static analysis and code quality |
| **TypeScript Compiler** | Type checking during the build   |
| **Git**                 | Version control                  |
| **GitHub**              | Source code hosting              |

---

# 🌐 APIs Used

The application uses public APIs to obtain the required data.

## 📍 IP Geolocation — ipapi

Used to approximately identify the user's city through their IP address.

**Responsibility:**

```text
User's IP address
   ↓
Approximate location
   ↓
City
```

The retrieved information is used to automatically perform the initial weather request.

---

## 🗺️ Open-Meteo Geocoding

Used to convert a city name into geographic coordinates.

**Responsibility:**

```text
"Fortaleza"
     ↓
Latitude
Longitude
```

These coordinates are then used by the weather forecast API.

---

## 🌤️ Open-Meteo Forecast

Responsible for providing weather data.

The application uses information such as:

* Current temperature;
* Relative humidity;
* Wind speed;
* Weather condition code;
* Daily maximum temperature;
* Daily minimum temperature.

General flow:

```text
City
  ↓
Geocoding
  ↓
Latitude + Longitude
  ↓
Open-Meteo Forecast
  ↓
Weather data
```

---

# 🏗️ Project Architecture

The project is organized by separating responsibilities between UI components, state management, hooks, services, types, and utility functions.

The current `src` directory structure is:

```text
src/
│
├── components/
│   ├── SearchBar.tsx
│   ├── ThemeButton.tsx
│   ├── WeatherCards.tsx
│   └── WeatherChart.tsx
│
├── context/
│   ├── ThemeContext.tsx
│   └── WeatherContext.tsx
│
├── enums/
│   └── error-text.enum.ts
│
├── hooks/
│   ├── useTheme.ts
│   └── useWeather.ts
│
├── services/
│   ├── geolocationService.ts
│   └── weatherService.ts
│
├── types/
│   └── weather.ts
│
├── utils/
│   └── weatherCondition.ts
│
├── App.css
├── App.tsx
└── main.tsx
```

---

# 🧩 Responsibility Breakdown

## `components/`

Contains components responsible for the user interface.

### `SearchBar.tsx`

Responsible for city search interaction.

### `ThemeButton.tsx`

Responsible for the visual control used to switch between light and dark themes.

### `WeatherCards.tsx`

Displays current weather conditions.

### `WeatherChart.tsx`

Transforms forecast data and displays it using Recharts.

---

## `context/`

Responsible for sharing global application state.

### `WeatherContext.tsx`

Shares weather-related information between different components.

The context provides:

* City;
* Location;
* Weather data;
* Loading state;
* Error state;
* Search functions;
* Initial location loading.

### `ThemeContext.tsx`

Manages the application's visual theme and provides the function used to switch between light and dark modes.

---

## `hooks/`

Contains custom hooks used to encapsulate reusable logic.

### `useWeather.ts`

Centralizes weather-related logic.

### `useTheme.ts`

Provides convenient access to `ThemeContext`.

The use of custom hooks reduces the amount of logic directly contained within presentation components.

---

## `services/`

Responsible for communicating with external services.

### `weatherService.ts`

Centralizes requests related to:

* Geocoding;
* Weather forecasts.

### `geolocationService.ts`

Responsible for retrieving approximate location information based on the user's IP address.

This separation prevents React components from needing to know API endpoint and HTTP request details.

---

## `types/`

Contains the type definitions used throughout the application.

### `weather.ts`

Defines the structure of the weather data used by the Front-end.

Using TypeScript allows the application to work with known data structures during development.

---

## `utils/`

Contains utility functions that do not directly depend on React components.

### `weatherCondition.ts`

Converts weather codes into information used by the interface:

```text
Code
  ↓
Icon
Description
CSS Class
```

---

## `enums/`

Centralizes constant values related to application messages.

### `error-text.enum.ts`

Stores the error messages used during requests and application operations.

---

# 🔄 Data Flow

The application's main data flow can be represented as follows:

```text
                    ┌──────────────────┐
                    │      User        │
                    └────────┬─────────┘
                             │
                 ┌───────────┴───────────┐
                 │                       │
                 ▼                       ▼
          Search city            Initial location
                 │                       │
                 ▼                       ▼
        WeatherContext          Geolocation Service
                 │                       │
                 │                       ▼
                 │                     IPAPI
                 │                       │
                 └───────────┬───────────┘
                             │
                             ▼
                    Weather Service
                             │
                    ┌────────┴────────┐
                    ▼                 ▼
               Geocoding          Forecast
                    │                 │
                    └────────┬────────┘
                             │
                             ▼
                     WeatherContext
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        WeatherCards    WeatherChart    App / States
              │              │
              ▼              ▼
           Weather         Chart
            Data
```

---

# 🧠 State Management

State management primarily uses **React Context API** and hooks.

Two independent contexts were created:

```text
ThemeContext
     │
     └── Application theme

WeatherContext
     │
     ├── City
     ├── Location
     ├── Weather
     ├── Loading
     ├── Error
     └── Weather-related functions
```

This separation prevents unrelated application states from being concentrated in a single context.

The logic responsible for retrieving data is also separated from the presentation layer.

---

# ⚡ Performance and Best Practices

The project uses React features to organize and optimize the application.

## `useCallback`

Used to preserve function references when necessary, avoiding unnecessary function recreation during certain rendering cycles.

## `useMemo`

Used when processing the data required by the chart, preventing the data transformation from being recalculated when its dependencies have not changed.

## Componentization

The interface is divided into smaller and independent components, allowing each component to have a specific responsibility.

## Separation of Concerns

The application avoids concentrating:

* UI;
* API requests;
* State;
* Business logic;
* Type definitions;

inside a single file.

---

# 🛡️ Request Handling

Requests are handled within the `services` layer, while loading and error states are managed through the weather context flow.

The general flow is:

```text
Request starts
        ↓
loading = true
        ↓
HTTP request
        │
        ├── success
        │     ↓
        │   weather
        │     ↓
        │   loading = false
        │
        └── error
              ↓
          error = message
              ↓
          loading = false
```

This approach keeps external communication separate from visual components.

---

# ♿ UI and Accessibility

The application was designed to provide a simple and clear user experience.

Considerations include:

* Responsive interface;
* Visual contrast between elements;
* Visual differentiation of weather conditions;
* Dedicated button for theme switching;
* Loading states;
* User-friendly error messages;
* Semantic organization of the interface.

Accessibility remains an area for future improvement, particularly regarding enhanced labels, ARIA attributes, and complete keyboard navigation.

---

# 📁 General Project Structure

```text
Frontend-Challenge/
│
├── src/
│   ├── components/
│   ├── context/
│   ├── enums/
│   ├── hooks/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── App.css
│   ├── App.tsx
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

# 🚀 How to Run the Project

## 1. Prerequisites

Before starting, make sure you have installed:

* **Node.js**
* **npm**
* **Git**

---

## 2. Clone the Repository

```bash
git clone https://github.com/Cvtr-C/Frontend-Challenge.git
```

Then navigate to the project directory:

```bash
cd Frontend-Challenge
```

---

## 3. Install Dependencies

```bash
npm install
```

The project currently uses React, React DOM, and Recharts as its main dependencies. Development tools include TypeScript, Vite, and ESLint.

---

## 4. Run the Development Server

```bash
npm run dev
```

After starting the development server, Vite will provide a local URL in the terminal.

Open the displayed address in your browser.

---

# 🏗️ Production Build

To verify that the project can be compiled for production:

```bash
npm run build
```

The command performs TypeScript checking and then generates the production build using Vite.

---

# 🔍 Run ESLint

To check the project for linting issues:

```bash
npm run lint
```

---

# 👀 Preview the Production Build

After running the build:

```bash
npm run preview
```

Vite will start a local server to preview the production version.

---

# 🔐 Environment Variables

Currently, the project **does not require environment variables** to run.

The APIs used by the application are public and do not require a private API key for the implemented requests.

> If an API requiring authentication is added in the future, the configuration should be adapted to use appropriate environment variables.

---

# 📋 Challenge Requirements

| LAPISCO Requirement                   | Implementation                           |
| ------------------------------------- | ---------------------------------------- |
| 🔎 Dynamic city search                | ✅ Implemented                            |
| 📍 Automatic geolocation              | ✅ Implemented using IP-based geolocation |
| 🌡️ Current temperature               | ✅ Implemented                            |
| 💧 Humidity                           | ✅ Implemented                            |
| 💨 Wind speed                         | ✅ Implemented                            |
| 📊 Minimum and maximum temperatures   | ✅ Implemented                            |
| 📅 7-day forecast                     | ✅ Implemented                            |
| 🌦️ Weather condition differentiation | ✅ Implemented                            |
| 🌗 Light and dark themes              | ✅ Implemented                            |
| 📱 Responsive layout                  | ✅ Implemented                            |
| ⚛️ React                              | ✅ Used                                   |
| 🔷 TypeScript                         | ✅ Used                                   |
| 🧠 Context API                        | ✅ Used                                   |
| 📈 Chart library                      | ✅ Recharts                               |
| ⚠️ Error handling                     | ✅ Implemented                            |
| 🧹 Code organization                  | ✅ Separation of responsibilities         |
| 🚀 `useMemo` / `useCallback`          | ✅ Used                                   |

---

# 🧪 Future Improvements

Although the project implements the main features proposed by the challenge, several improvements can be made in the future.

## Automated Testing

Add unit and component tests using tools such as Vitest and React Testing Library.

Potential testing areas:

```text
weatherCondition
SearchBar
WeatherCards
WeatherChart
useWeather
```

---

## Accessibility

Improve:

* Keyboard navigation;
* Form labels;
* ARIA attributes;
* Loading state announcements;
* Error communication for assistive technologies.

---

## External Data Validation

Add runtime validation for API responses to improve the application's resilience against unexpected changes in external data.

---

## CI/CD

Add a continuous integration pipeline to automatically execute:

```text
Lint
  ↓
Type Check
  ↓
Tests
  ↓
Build
```

whenever changes are pushed to the repository.

---

# 🎯 Learning Objectives

In addition to meeting the challenge requirements, this project was developed to practice the following concepts:

* React componentization;
* React Hooks;
* Custom Hooks;
* Context API;
* TypeScript;
* Data typing;
* REST API consumption;
* `fetch`;
* Geocoding;
* IP-based geolocation;
* Asynchronous state management;
* Error handling;
* `useMemo`;
* `useCallback`;
* `localStorage`;
* Light and dark themes;
* Responsive design;
* Data visualization;
* Code organization;
* Separation of concerns.

---

# 🏛️ Architectural Decisions

Several important architectural decisions were made during development.

## Why Context API?

The application contains information used by multiple components, especially weather data and theme configuration.

Context API allows this information to be shared without manually passing props through multiple levels of the component tree.

---

## Why Separate Services?

Communication with external APIs does not need to be part of the UI components.

Therefore:

```text
Components
     ↓
Context / Hooks
     ↓
Services
     ↓
APIs
```

This organization makes the application easier to maintain and allows the implementation of external communication to be modified without requiring changes throughout the UI.

---

## Why Use Custom Hooks?

Hooks such as:

```text
useWeather()
useTheme()
```

encapsulate application logic and provide a simpler interface for components.

This keeps components primarily focused on presentation and user interaction.

---

## Why Use Recharts?

The challenge requires a graphical representation of weather data.

Recharts makes it possible to transform API data into an interactive visualization without manually implementing the entire chart rendering logic.

---

# 🌎 Complete Search Flow

When the user searches for a city, the complete flow is:

```text
┌──────────────────────┐
│ User enters a city  │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ SearchBar            │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ WeatherContext       │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ weatherService       │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Open-Meteo Geocoding │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Latitude / Longitude │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Open-Meteo Forecast  │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Weather data         │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ WeatherContext       │
└──────────┬───────────┘
           ↓
     ┌─────┴─────┐
     ↓           ↓
WeatherCards  WeatherChart
```

---

# 📚 Challenge Reference

This project was developed based on the requirements of the:

**LAPISCO Frontend Challenge**

The main objective of the challenge is to evaluate Front-end development skills using React, TypeScript, API consumption, state management, data visualization, responsive design, error handling, and software development best practices.

---

# 👨‍💻 Author

**Carlos**

Project developed as part of the author's studies and practice in **Front-end development with React + TypeScript**.

---

# 📄 License

This project was developed for educational and technical evaluation purposes within the context of the **LAPISCO Frontend Challenge**.
