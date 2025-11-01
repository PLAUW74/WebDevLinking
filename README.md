# Feedback App 💬

A full-stack feedback collection application with a beautiful React frontend and Flask backend. Users can submit feedback through an intuitive web interface, and all submissions are automatically saved to both a SQLite database and CSV file for easy data management.

![Feedback App](https://img.shields.io/badge/React-18.x-blue) ![Flask](https://img.shields.io/badge/Flask-3.x-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)

## ✨ Features

- 🎨 **Modern UI** - Done using Figma
- 💾 **Dual Storage** - Automatically saves to both SQLite database and CSV file
- 🔄 **Real-time Updates** - Feedback list updates immediately after submission
- 🌐 **CORS Enabled** - Frontend and backend communicate seamlessly
- 📊 **Data Export** - CSV format for easy analysis in Excel or Google Sheets

## 🛠️ Tech Stack

### Frontend
- **React** with TypeScript
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first styling

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-origin resource sharing
- **SQLAlchemy** - SQL database toolkit
- **SQLite** - Lightweight database

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **npm** or **yarn**

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd FeedBackApp
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask server:**
   ```bash
   python app.py
   ```

   The backend will start on `http://127.0.0.1:5000`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Node dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:3000` (or `http://localhost:5173`)

## 📡 API Endpoints

### POST `/submit`
Submit new feedback

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Great app!"
}
```

**Response:**
```json
{
  "message": "Feedback submitted!"
}
```

### GET `/feedbacks`
Retrieve all feedback entries

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Great app!"
  }
]
```

## 💾 Data Storage

Feedback is stored in two formats:

1. **SQLite Database** (`database.db`)
   - Structured storage with query capabilities
   - Persistent across server restarts

2. **CSV File** (`feedback.csv`)
   - Timestamped entries
   - Easy to open in Excel or Google Sheets
   - Format: `timestamp, name, email, message`

## 🎨 UI Preview

The application features:
- Gradient background (purple, pink, blue)
- Clean, modern card-based layout
- Responsive design for all screen sizes
- Real-time feedback display
- Smooth form interactions

## 🔧 Configuration

### Backend Configuration

Edit `app.py` to modify:
- Database URI
- CORS settings
- CSV file location

### Frontend Configuration

Edit `App.tsx` to modify:
- API endpoint URL
- Form fields
- UI components

## 📝 Usage

1. **Start both servers** (backend and frontend)
2. **Open the app** in your browser
3. **Fill out the form** with name, email, and message
4. **Click Submit** - feedback is instantly saved
5. **View feedback** in the list below the form
6. **Access data** from `feedback.csv` or `database.db`

## 🐛 Troubleshooting

### CORS Errors
- Ensure Flask backend has `CORS(app)` enabled
- Check that both servers are running

### Port Conflicts
- Backend: Change port in `app.py` → `app.run(port=XXXX)`
- Frontend: Change port in `vite.config.ts`

### Database Issues
- Delete `database.db` and restart Flask to recreate
- Check file permissions in the backend directory

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Built with ❤️ for efficient feedback collection

---

**Happy Coding!** 🚀
