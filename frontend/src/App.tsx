=from fastapi import FastAPI, responses
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from beanie import init_beanie
from app.models import SmokeSession
from typing import Any, cast 
import requests


app = FastAPI(title="Meat Master API")

@app.on_event("startup")
async def startup_event():
    """
    Initializes the application on startup by connecting to MongoDB and Beanie.
    """
    client = AsyncIOMotorClient("mongodb://mongodb:27017")
    db: AsyncIOMotorDatabase = client.get_database("meat_master")
    await init_beanie(database=cast(Any, db), document_models=[SmokeSession])
    print("Connected to MongoDB and initialized Beanie")

@app.get("/health")
async def health_check():
    """
    Checks if the API is running.

    Returns:
        dict: Status message indicating the API is operational.
    """
    return {"status": "Meat Master API is up and running."}

# -- Smoke Routes --
@app.post("/record_smoke")
async def record_smoke(session: SmokeSession):
    """
    Records the details of a smoke session.

    Args:
        session (SmokeSession): The smoke session data to record.

    Returns:
        dict: Confirmation message indicating successful save.
    """
    session.insert()
    return {"message": "Smoke Saved!"}

@app.get("/fetch_smokes")
async def get_all_smokes():
    """
    Fetches the details of every smoke session.

    Returns:
        List[SmokeSession]: A list of all smoke sessions.
    """
    return await SmokeSession.find_all().to_list()

@app.get("/get_smoke/{smoke_id}")
async def get_smoke(smoke_id: int):
    """
    Retrieves a specific smoke session by its ID.

    Args:
        smoke_id (int): The unique identifier of the smoke session.

    Returns:
        SmokeSession or dict: The smoke session document if found, or an error message if not found.
    """
    smoke = await SmokeSession.find_one(SmokeSession.smoke_id == smoke_id)

    if not smoke: 
        return {"message": "Error finding smoke"}    
    return smoke

#  -- Misc Routes --
@app.get("/get_weather")
async def get_weather():
    """
    Fetches weather forecast data from Open-Meteo API for a predefined location.

    Returns:
        dict or dict-like error response: Weather forecast data for the next 7 days or an error message in case of failure.
    """
    try:
        response = requests.get("https://api.open-meteo.com/v1/forecast?latitude=35.9943&longitude=-94.1752&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,showers_sum,snowfall_sum,rain_sum,wind_speed_10m_max,precipitation_probability_max,precipitation_sum,precipitation_hours&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch", timeout=10)
        
        response = response.json().get("daily")
        forcast_days = 7

        for i in range(forcast_days):
            date = response.get("time")[i]
            max_temp = response.get("temperature_2m_max")[i]
            min_temp = response.get("temperature_2m_min")[i]
            sunrise = response.get("sunrise")[i]
            sunset = response.get("sunset")[i]
            showers_sum = response.get("showers_sum")[i]
            rain_sum = response.get("rain_sum")[i]
            precipitation_sum = response.get("precipitation_sum")[i]
            wind_speed_max = response.get("wind_speed_10m_max")
            precipitation_chance = response.get("precipitation_probability_max")[i]
            precipitation_hours = response.get("precipitation_hours")[i]

        

        return response
    except requests.exceptions.Timeout:
        return {"message": "Request timed out"}
    except requests.exceptions.HTTPError as http_error:
        return {"message": f"Http error occured: {http_error}"}
    except Exception as e:
        return {"message": f"Error occured: {e}"}
