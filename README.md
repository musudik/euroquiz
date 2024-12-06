# Real-Time Quiz App  

The Real-Time Quiz App is an interactive platform designed for hosting quizzes in real-time. Built using **Firebase** and **React + Vite**, it offers admins the tools to create, publish, and manage quizzes while participants enjoy an engaging and competitive experience.  

## Features  

### Admin Functionality  
- **Quiz Creation**: Easily create quizzes with multiple-choice questions, images, and time limits.  
- **Publishing via QR Code**: Generate unique QR codes for quizzes, simplifying participant access.  
- **Real-Time Control**: Start, pause, or stop quizzes and monitor participant progress live.  
- **Analytics Dashboard**: View detailed reports and performance metrics after each quiz session.  

### Participant Experience  
- **Easy Registration**: Join quizzes by scanning a QR code and registering basic details.  
- **Live Interaction**: Participate in quizzes as they are started by the admin and compete in real-time.  
- **Dynamic Leaderboard**: Track scores live to see your ranking among participants.  

### Firebase Integration  
- **Real-Time Updates**: Instant synchronization ensures a seamless experience for both admins and participants.  
- **Secure Data Management**: Uses Firebase authentication and Firestore for secure user and quiz data management.  

### Modern Frontend  
- **Responsive Design**: Built with **React** and **Vite** for a fast, modern, and user-friendly experience on both desktop and mobile.  

## Use Cases  
- **Corporate Training**: Create fun quizzes to test employee knowledge.  
- **Educational Institutions**: Engage students with live quizzes during lectures or events.  
- **Social Events**: Host trivia nights or themed quizzes for entertainment.  

## Getting Started  

### Prerequisites  
- Node.js (v16 or above)  
- Firebase account with Firestore and Authentication enabled  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/real-time-quiz-app.git
   cd real-time-quiz-app


npm run dev
npm install -g firebase-tools
firebase init
npm run build
firebase deploy
npm install react-router-dom @mui/material @mui/icons-materialnp
npm install @emotion/styled
npm install @emotion/react
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install @mui/material @mui/icons-material @mui/x-date-pickers
npm install date-fns
#npm install qrcode.react
npm install qrcode
npm install @mui/icons-material
npm install @paypal/react-paypal-js


2. Set up and start the backend server. 
mkdir server
cd server
npm init -y

npm install express cors resend dotenv
Create a .env file in the server directory:
PORT=3000
RESEND_API_KEY=your_resend_api_key_here

npm install --save-dev nodemon

# In the server directory
npm run dev  # for development with auto-reload
# or
npm start    # for production

# Resend
npm install resend

# Mailchimp
npm install @mailchimp/mailchimp_marketing
npm install @mailchimp/mailchimp_transactional