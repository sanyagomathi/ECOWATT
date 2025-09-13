from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="EcoWatt Backend")

# -----------------------
# Models
# -----------------------
class LeaderboardEntry(BaseModel):
    rank: int
    name: str
    points: int

class Mission(BaseModel):
    id: int
    title: str
    description: str

class Insight(BaseModel):
    id: int
    message: str

# -----------------------
# Sample Data
# -----------------------
leaderboard = [
    LeaderboardEntry(rank=1, name="Green Colony", points=1250),
    LeaderboardEntry(rank=2, name="Eco Warriors", points=1130),
    LeaderboardEntry(rank=3, name="Solar Savers", points=980),
]

missions = [
    Mission(id=1, title="Reduce 10% Energy", description="Try to reduce your energy usage by 10% this month."),
    Mission(id=2, title="LED Switch", description="Replace old bulbs with LED bulbs."),
    Mission(id=3, title="Peak Hour Awareness", description="Shift usage from peak hours to save energy."),
]

insights = [
    Insight(id=1, message="You saved energy equal to planting 2 trees."),
    Insight(id=2, message="Peak hours consume more electricity. Try shifting usage."),
    Insight(id=3, message="Using LED bulbs can save up to 20% of electricity."),
]

# -----------------------
# API Endpoints
# -----------------------
@app.get("/")
def root():
    return {"message": "Hello from EcoWatt backend!"}

@app.get("/leaderboard")
def get_leaderboard():
    return leaderboard

@app.get("/missions")
def get_missions():
    return missions

@app.get("/insights")
def get_insights():
    return insights


