Step-by-Step Guide to Add an Angular App as a Microsoft Teams Tab :
 
1. 📁 Create the Manifest Folder
 
Create a new folder named manifest, and inside it, create a file called manifest.json with the following content:
 
Plain Text
{
  "$schema": "https://developer.microsoft.com/en-us/json-schemas/teams/v1.16/MicrosoftTeams.schema.json",
  "manifestVersion": "1.16",
  "version": "1.0.0",
  "id": "efb2a324-5c7f-4577-808f-56f4ec1c1a87",
  "packageName": "com.example.angularapp",
  "name": {
    "short": "Angular App",
    "full": "Angular App for Teams"
  },
  "description": {
    "short": "A sample Angular 18 app as a Teams tab.",
    "full": "This is an Angular 18 web app integrated as a Microsoft Teams tab application."
  },
  "developer": {
    "name": "Your Name",
    "websiteUrl": "https://yourdomain.com",
    "privacyUrl": "https://yourdomain.com/privacy",
    "termsOfUseUrl": "https://yourdomain.com/terms"
  },
  "icons": {
    "color": "color.png",
    "outline": "outline.png"
  },
  "accentColor": "#60A18E",
  "staticTabs": [
    {
      "entityId": "index",
      "name": "My Angular Tab",
      "contentUrl": "https://b32d-102-157-202-249.ngrok-free.app",
      "websiteUrl": "https://b32d-102-157-202-249.ngrok-free.app",
      "scopes": ["personal"]
    }
  ],
  "permissions": ["identity", "messageTeamMembers"],
  "validDomains": ["b32d-102-157-202-249.ngrok-free.app"]
}
 
 
🔁 Replace contentUrl, websiteUrl, and validDomains with your own host (e.g., production domain).
For local testing, I used Ngrok to expose my Angular app locally.
 
2. 🖼️ Add Required Icon Files
Inside the same manifest folder, add two PNG images:
color.png (192x192 pixels)
outline.png (32x32 pixels)
 
These icons are mandatory when uploading to Teams.
 
3. 🗜️ Package the Manifest
Open PowerShell in the manifest folder and run the following command to create the app package:
Compress-Archive -Path manifest.json,color.png,outline.png -DestinationPath angular-teams-app.zip
 
4. 🚀 Upload the App to Microsoft Teams
Open Microsoft Teams.
At the bottom left, click on “Apps”.
Scroll down and click “Manage your apps”.
Click “Upload a custom app” > “Upload for me or my teams”.
Select the angular-teams-app.zip file and upload it.
Once uploaded successfully, your Angular app will appear as a personal tab inside Teams.
💡 Notes
If your team uses a real server, replace the Ngrok link with your actual hosted app URL.
Ngrok (ngrok http 53003) is only recommended for local testing or demos.
