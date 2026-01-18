// Google API Configuration
// Replace these values with your actual Google API credentials

const GOOGLE_CONFIG = {
    // Get from Google Cloud Console
    API_KEY: 'AIzaSyDI0CaMBoMo5OX8V4AEHBM4lT_UfNdDamk',
    CLIENT_ID: '1096868738526-1h152q6itjuuaotr9n025b8egtq233i9.apps.googleusercontent.com',
    
    // Google Sheets API
    DISCOVERY_DOC: 'https://sheets.googleapis.com/$discovery/rest?version=v4',
    SCOPES: 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.file',
    
    // Your Google Sheets ID (from the URL)
    SPREADSHEET_ID: '1sOjUlGBNKkn2dztPAFdmEOO-Rh5x_vW3SMLOIqsObBY',
    
    // Your Google Drive Folder ID (from the URL)
    DRIVE_FOLDER_ID: '1RkWqnogAYQyTD3IhdkynT8mZYJsLlbT1'
};

// Instructions:
// 1. Go to Google Cloud Console (console.cloud.google.com)
// 2. Create a new project or select existing one
// 3. Enable Google Sheets API and Google Drive API
// 4. Create credentials (API Key and OAuth 2.0 Client ID)
// 5. Create a Google Sheet and get its ID from URL
// 6. Create a Google Drive folder and get its ID from URL
// 7. Replace the values above with your actual credentials
