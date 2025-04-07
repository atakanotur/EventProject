# 📆 EventProject – Mobile Event Tracking App

EventProject is a full-stack mobile application that allows users to view a list of events and see their details.  
Built using React Native and connected to a custom .NET backend API, it demonstrates real-world mobile development including API integration, global state management, and clean UI components.

---

## 🛠️ Technologies Used

- React Native (CLI)
- TypeScript
- Redux Toolkit (global state management)
- Axios (API requests)
- React Navigation
- Custom Hooks
- .NET Web API (Backend)

---

## 🚀 Features

- ✅ Fetch events from a real backend API  
- ✅ Display event list  
- ✅ Navigate to event detail screens  
- ✅ Global state management with Redux Toolkit  
- ✅ Modular and clean component structure  

---

## 📁 Project Structure

```bash
├── source
│   ├── components            # Reusable UI components
│   ├── constants             # App-wide constants (colors, fonts, etc.)
│   ├── screens               # Screen components
│   ├── services              # API services (eventService.ts)
│   ├── store                 # Redux store and slices
│   └── utils                 # Helper functions
├── App.tsx

---

git clone https://github.com/atakanotur/EventProject.git
cd EventProject
npm install

# Android
npx react-native run-android

# iOS (requires macOS)
npx react-native run-ios

---