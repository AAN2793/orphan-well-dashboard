# 🚀 Deployment Instructions

## Option 1: Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
cd orphan-well-dashboard
git init
git add .
git commit -m "Initial commit: Helios Dashboard"
gh repo create orphan-well-dashboard --public --source=. --remote=origin
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Select the `orphan-well-dashboard` repo
4. Click "Deploy"

### Step 5: Access Your Dashboard
Vercel will provide a URL like:
```
https://orphan-well-dashboard.vercel.app
```

---

## Option 2: Local Development

```bash
cd orphan-well-dashboard
npm install
npm run dev
# Open http://localhost:3000
```

---

## Features

### 🛢️ Orphan Well Tool
- API number lookup
- State/county filtering
- Methane risk analysis
- Grant eligibility checking

### 📈 Market Dashboard
- Real-time indices
- Premarket movers
- AlertsAndNews content drafts

### 📋 Activity Log
- Today's activities
- System events
- Flight tracking

### ⚙️ Settings
- Integration status
- Notification preferences
