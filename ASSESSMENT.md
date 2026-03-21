# Assessment: ReactJS Fundamentals (Cyber-Dojo) 
13cb0aad-5ae2-4112-a181-0f42508f7524

**Topic**: State, Props, and Hooks (`useState`, `useEffect`)  
**Duration**: 1.5 Hours  
**Difficulty**: Beginner

---

## 🎯 Objective
Your goal is to fix the **Cyber-Dojo Grade Tracker**, a React application that is currently non-functional due to common logical errors. You must identify and resolve four specific bugs to restore full functionality to the dashboard.

## 🛠️ Setup
1. Open the project in your IDE.
2. The dependencies are already installed in `node_modules`.
3. Start the development server:
   ```bash
   npm run dev
   ```
4. View the "Quick Review" section at the top of the app to refresh your knowledge.

---

## 📝 Tasks

### Task 1: The Prop Mismatch (Props)
The `StudentList` component is failing to render the existing students. 
- **Symptom**: The list says "No students found" even though the state in `App.jsx` has data.
- **Location**: `src/App.jsx` passing data to `src/components/StudentList.jsx`.
- **Goal**: Ensure the prop names match between the Parent and the Child.

### Task 2: The Silent Mutation (State)
The "Add Student" feature appears to do nothing when clicked.
- **Symptom**: An alert says a student is added, but the list never updates.
- **Location**: `src/App.jsx` -> `addStudent` function.
- **Goal**: Use the state setter correctly (avoid direct array mutation).

### Task 3: The Missing Logic (Scaffold Completion)
The addition form is incomplete.
- **Symptom**: Clicking "Add Student" only logs a message to the console.
- **Location**: `src/components/AddStudentForm.jsx`.
- **Goal**: Implement the `handleSubmit` logic to create a student object and pass it to the parent.

### Task 4: The Static Average (useEffect)
The "Class Statistics" dashboard is stuck on the initial average.
- **Symptom**: Adding or deleting students doesn't change the average grade displayed.
- **Location**: `src/components/Statistics.jsx`.
- **Goal**: Update the `useEffect` dependency array so the calculation runs when data changes.

---

## 🏆 Scoring Criteria
- ✅ **Task 1**: Students are rendered correctly on load (25 pts)
- ✅ **Task 2**: List updates instantly when a student is added (25 pts)
- ✅ **Task 3**: Form inputs are cleared after submission (25 pts)
- ✅ **Task 4**: The average grade updates dynamically (25 pts)

---

## 🚀 Submission
Once all tasks are complete, verify that:
1. You can add a new student named "Cyber Ninja" with grade 100.
2. You can delete "John Doe".
3. The average grade updates to reflect these changes.

**Good luck, Ninja!**
