from beanie import Document, Insert, Replace, after_event, before_event
from datetime import datetime
from typing import Optional
from pydantic import Field

class SmokeSession(Document):
"""
For smoke type
"""
    food_type: str
    wood_used: str
    description: Optional[str] = None
    notes: Optional[str] = None
    score: int
    start_time: Optional[datetime] = None
    end_time: Optional[datetime] = None 
    status: str = "active"
    smoke_id: Optional[int] = None

    class Settings:
        name = "smoke_sessions"

    @before_event(Insert)
    async def get_new_id(self):
        """
        Inciments the ID for the smokes sessions to provide a unique ID
        """
        counter = await IdCounter.find_one(
            IdCounter.target_collection == "smoke_sessions"
        )
        if counter is None:
            counter = IdCounter(target_collection="smoke_session", last_value=0)
            await counter.insert()
        
        await counter.inc({IdCounter.last_value: 1})
        self.custom_id = counter.last_value

    @before_event(Insert, Replace)
    async def clean_data(self):
        """
            Normalize the data
        """
        self.food_type.strip().capitalize()
        self.wood_used.strip().lower()


class IdCounter(Document):
    target_collection: str
    last_value: int = 0
    
    class Settings:
        name = "id_counters"

