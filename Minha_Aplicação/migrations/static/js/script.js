// Base setup for Django REST framework integration
// Assuming Django backend provides APIs for authentication, CRUD operations, and data fetching.

// Authentication Module
const Auth = {
    register: async (username, password) => {
        // Sends a registration request to the Django backend
        const response = await fetch('/api/auth/register/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        });
        return response.json();
    },

    login: async (username, password) => {
        // Sends a login request to the Django backend
        const response = await fetch('/api/auth/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        });
        return response.json();
    },

    getUserProfile: async () => {
        // Fetches the authenticated user's profile
        const response = await fetch('/api/auth/profile/', {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
        return response.json();
    }
};

// Habit Tracking Module
const Habits = {
    addHabit: async (name, category) => {
        const response = await fetch('/api/habits/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({name, category})
        });
        return response.json();
    },

    editHabit: async (id, updatedData) => {
        const response = await fetch(`/api/habits/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(updatedData)
        });
        return response.json();
    },

    deleteHabit: async (id) => {
        const response = await fetch(`/api/habits/${id}/`, {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
        return response.ok;
    },

    getProgress: async (filter) => {
        // Fetches progress filtered by daily, weekly, or monthly
        const response = await fetch(`/api/habits/progress/?filter=${filter}`, {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
        return response.json();
    }
};

// Diet Routine Module
const Diet = {
    planMeal: async (mealPlan) => {
        const response = await fetch('/api/diet/meal-plans/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(mealPlan)
        });
        return response.json();
    },

    logFood: async (foodLog) => {
        const response = await fetch('/api/diet/logs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(foodLog)
        });
        return response.json();
    },

    getNutritionStats: async () => {
        const response = await fetch('/api/diet/stats/', {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
        return response.json();
    }
};

// Workout Module
const Workout = {
    planWorkout: async (workoutPlan) => {
        const response = await fetch('/api/workouts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(workoutPlan)
        });
        return response.json();
    },

    logActivity: async (activityLog) => {
        const response = await fetch('/api/workouts/logs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(activityLog)
        });
        return response.json();
    },

    getProgress: async () => {
        const response = await fetch('/api/workouts/progress/', {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
        return response.json();
    }
};

// Mood Tracking Module
const Mood = {
    logMood: async (moodData) => {
        const response = await fetch('/api/moods/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(moodData)
        });
        return response.json();
    },

    getMoodGraph: async () => {
        const response = await fetch('/api/moods/graph/', {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
        return response.json();
    }
};

// Medication Module
const Medication = {
    logMedication: async (medData) => {
        const response = await fetch('/api/medications/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(medData)
        });
        return response.json();
    },

    getReminders: async () => {
        const response = await fetch('/api/medications/reminders/', {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
        return response.json();
    }
};

// Task Checklist Module
const Tasks = {
    addTask: async (task) => {
        const response = await fetch('/api/tasks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(task)
        });
        return response.json();
    },

    toggleTaskCompletion: async (id) => {
        const response = await fetch(`/api/tasks/${id}/toggle/`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.ok;
    },

    deleteTask: async (id) => {
        const response = await fetch(`/api/tasks/${id}/`, {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
        return response.ok;
    }
};

// Recipe Module
const Recipes = {
    addRecipe: async (recipe) => {
        const response = await fetch('/api/recipes/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(recipe)
        });
        return response.json();
    },

    editRecipe: async (id, updatedData) => {
        const response = await fetch(`/api/recipes/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(updatedData)
        });
        return response.json();
    },

    deleteRecipe: async (id) => {
        const response = await fetch(`/api/recipes/${id}/`, {
            method: 'DELETE',
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
        return response.ok;
    },

    getCategories: async () => {
        const response = await fetch('/api/recipes/categories/', {
            headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        });
        return response.json();
    },

    addComment: async (recipeId, comment) => {
        const response = await fetch(`/api/recipes/${recipeId}/comments/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({comment})
        });
        return response.json();
    }
};
