# Troubleshooting Guide

## "Failed to Create Task" Error

### Common Causes and Solutions:

### 1. MongoDB Not Running

**Check if MongoDB is running:**

**Windows:**
```bash
# Check if MongoDB service is running
net start | findstr MongoDB

# Start MongoDB service
net start MongoDB
```

**If MongoDB is not installed:**
- Download from: https://www.mongodb.com/try/download/community
- Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

### 2. MongoDB Atlas Setup (Recommended for Quick Start)

If you don't have MongoDB installed locally, use MongoDB Atlas:

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster (free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Update `backend/.env`:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/taskmanagement?retryWrites=true&w=majority
```
7. Replace `<username>` and `<password>` with your credentials

### 3. Backend Server Not Running

Make sure the backend server is running:
```bash
cd backend
npm start
```

You should see:
```
Server running on port 5000
MongoDB Connected: ...
```

### 4. CORS Issues

If you see CORS errors in browser console, make sure:
- Backend is running on port 5000
- Frontend is running on port 3000
- CORS is enabled in backend (already configured)

### 5. Check Browser Console

Open browser DevTools (F12) and check:
- Network tab: Look for failed requests to `http://localhost:5000/api/tasks`
- Console tab: Look for error messages

### 6. Test Backend Directly

Test if backend is working using curl or Postman:

```bash
# Test GET all tasks
curl http://localhost:5000/api/tasks

# Test CREATE task
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Test Task","description":"Test Description","status":"pending"}'
```

### 7. Check Backend Logs

Look at the terminal where backend is running for error messages:
- Connection errors
- Validation errors
- Database errors

### Quick Fix Checklist:

- [ ] MongoDB is running (or using MongoDB Atlas)
- [ ] Backend server is running on port 5000
- [ ] Frontend is running on port 3000
- [ ] `.env` file has correct MONGO_URI
- [ ] No errors in backend terminal
- [ ] No CORS errors in browser console

### Still Having Issues?

Check the browser console and backend terminal for specific error messages, then refer to the appropriate section above.
