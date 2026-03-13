=This is part of a text. Provide documentation to the entire project to start!

# Meat Master

Meat Master is a BBQ smoke tracking application that helps users log, manage, and analyze their smoking sessions using MongoDB and FastAPI with Beanie ODM.

## ������ Tech Stack

- **Backend**: FastAPI, Beanie (Motor + Pydantic), MongoDB
- **Frontend**: React, TypeScript, Chakra UI, Vite
- **External APIs**: Open-Meteo for weather forecasts

## ������ Project Structure

```plaintext
meatmaster/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py             # FastAPI entrypoint
│   │   ├── api/
│   │   │   └── v1/
│   │   │       ├── __init__.py
│   │   │       ├── routes.py   # API endpoints
│   │   │       └── schema.py   # Pydantic models
│   │   ├── core/
│   │   │   ├── __init__.py
│   │   │   ├── config.py       # App configuration (env vars)
│   │   │   └── db.py           # Beanie connection setup
│   │   ├── models/
│   │   │   └── smoke.py        # Beanie model definitions
│   ├── requirements.txt
│   ├── .env
│   └── README.md
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.tsx
    │   └── main.tsx
    ├── index.html
    ├── vite.config.ts
    └── package.json
```

## ������ Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- MongoDB instance (local or Atlas)
- [Open-Meteo API](https://open-meteo.com/) (optional, if you want weather data)

### Backend Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/meatmaster.git
   cd meatmaster/backend
   ```

2. **Set up virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # or `venv\Scripts\activate` on Windows
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Create `.env`**
   ```env
   MONGO_URI=mongodb://localhost:27017
   MONGO_DB_NAME=meatmaster
   OPEN_METEO_API_URL=https://api.open-meteo.com/v1/
   ```

5. **Run the FastAPI app**
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```
   Visit `http://localhost:8000/docs` to test the API.

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Frontend should be up at `http://localhost:5173`.

## ������ API Endpoints

- `GET /api/v1/smoke/` — list all smoke sessions
- `POST /api/v1/smoke/` — create a new smoke session
- `GET /api/v1/smoke/{id}` — fetch a specific smoke session
- `PUT /api/v1/smoke/{id}` — update a smoke session
- `DELETE /api/v1/smoke/{id}` — delete a smoke session
- `GET /api/v1/weather/` — fetch weather forecast (if Open-Meteo enabled)

## ������ Contributing

Contributions are welcome! Fork, branch, commit, and open a PR. Please ensure tests pass and the code follows project conventions.

## ������ License

MIT License. See `LICENSE` for details.

---

*Happy smoking and coding!*