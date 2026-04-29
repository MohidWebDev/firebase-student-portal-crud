# firebase-student-portal-crud
Real-Time Data Sync: Implements Firebase's onSnapshot listener to ensure the student list updates automatically across all users whenever a record is added, edited, or removed.  

Persistent Firestore Integration: Successfully connects the frontend to a cloud-hosted NoSQL database, utilizing addDoc, updateDoc, and deleteDoc for robust data persistence.  

Advanced Modal Logic: Features a reusable Modal component that manages its own visibility state (isOpen) and renders children dynamically, providing a professional "popup" experience for data entry.  

Dual-Mode Form Processing: Utilizes a single StudentForm component that intelligently toggles between "Add" and "Update" modes based on the presence of an editId.  

State-Driven Lifecycle Management: Effectively uses the useEffect hook to manage the database connection and the useState hook to track form inputs and the student list simultaneously.  

Comprehensive Student Profiling: captures and renders detailed student information, including first/last names, CNIC (national identity), and contact details.
